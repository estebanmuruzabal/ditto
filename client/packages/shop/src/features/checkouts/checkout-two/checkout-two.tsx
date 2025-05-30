import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Button } from 'components/button/button';
import RadioCard from 'components/radio-card/radio-card';
import RadioGroup from 'components/radio-group/radio-group';
import RadioGroupTwo from 'components/radio-group/radio-group-two';
import RadioGroupThree from 'components/radio-group/radio-group-three';
import RadioCardTWO from 'components/radio-card/radio-card-two';
import PaymentGroup from 'components/payment-group/payment-group';
import UpdateContact from 'components/contact-card/contact-card';
import { DELETE_ADDRESS, SETPRIMARY_ADDRESS } from 'graphql/mutation/address';
import { DELETE_PHONENUMBER, SETPRIMARY_PHONENUMBER } from 'graphql/mutation/phone';
import { CREAT_ORDER } from 'graphql/mutation/order';
import { GET_COUPON } from 'graphql/query/coupon';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import { CC_PAYMENT_OPTION, CURRENCY, deliveryCarrySelectOptions, deliveryMethodCookieKeyName, DeliveryMethodsConstants } from 'utils/constant';
import { openModal } from '@redq/reuse-modal';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Scrollbars } from 'react-custom-scrollbars';
import CheckoutWrapper, {
  CheckoutContainer,
  CheckoutInformation,
  InformationBox,
  Heading,
  ButtonGroup,
  CheckoutSubmit,
  HaveCoupon,
  CouponBoxWrapper,
  CouponInputBox,
  HeadingWider,
  CouponCode,
  RemoveCoupon,
  ErrorMsg,
  TermConditionText,
  TermConditionLink,
  CartWrapper,
  CalculationWrapper,
  OrderInfo,
  Title,
  ItemsWrapper,
  Items,
  Quantity,
  Multiplier,
  ItemInfo,
  Price,
  TextWrapper,
  Text,
  Bold,
  Small,
  NoProductMsg,
  NoProductImg,
  IconWrapper,
  SectionNumber
} from './checkout-two.style';
import CouponBox from 'components/coupon-box/coupon-box';

import { Plus } from 'assets/icons/PlusMinus';
import { NoCartBag } from 'assets/icons/NoCartBag';

import Sticky from 'react-stickynode';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { APPLY_COUPON } from 'graphql/mutation/coupon';
import { useLocale } from 'contexts/language/language.provider';
import { useWindowSize } from 'utils/useWindowSize';


import UpdateAddressTwo from 'components/address-card/address-card-two';
import moment from 'moment';
import { calculateDeliveryCharge, capitalizeFirstLetter } from 'utils/shop-helper';
import { getCookie, setCookie } from 'utils/session';
import { DeliveryIcon } from 'assets/icons/DeliveryIcon';
import DeliverySelection from '../checkout-two-sections/delivery-selection';
import DeliverySchedule from '../checkout-two-sections/delivery-schedule';

// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
}

type CartItemProps = {
  product: any;
};

const OrderItem: React.FC<CartItemProps> = ({ product }) => {
  const { name, images, price, salePrice, unit, quantity = 0, recicledQuantity = 0, packagePrice, id } = product;
  const recicledPrice = price - packagePrice;
  const totalQuantity = quantity + recicledQuantity;
  const displayPrice = salePrice || price;
  const nonRecicledTotalPrice = displayPrice * quantity;
  const recicledTotalPrice = recicledPrice * recicledQuantity;
  const totalPrice = nonRecicledTotalPrice + recicledTotalPrice
  
  const intl = useIntl();
  return (
    <Items key={id}>
      {/* <Multiplier>x</Multiplier> */}
      <ItemInfo>
        { recicledQuantity > 0 && (
          <>
            <Quantity>{name}</Quantity>
            <br />
            {recicledQuantity} X {CURRENCY}{recicledPrice}
            <br />
          </>
        )}
        { quantity > 0 && (
          <>
            <Quantity>{name}</Quantity>
            <br />
            {quantity} X {CURRENCY}{price}
          </>
        )}
      </ItemInfo>
      <Price>
        {CURRENCY}
        {(totalPrice).toFixed(2)}
      </Price>
    </Items>
  );
};

const CheckoutWithSidebar: React.FC<MyFormProps> = ({ token, deviceType }) => {

  const [hasCoupon, setHasCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setError] = useState('');
  const [orderError, setOrderError] = useState('');
  const [deliveryMethodTypeSelected, setDeliveryMethodType] = React.useState('');
  const [checkoutError, setCheckoutError] = useState('');
  const { state, dispatch } = useContext(ProfileContext);
  const { isRtl } = useLocale();
  const {
    items,
    removeCoupon,
    coupon,
    applyCoupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant,
  } = useCart();
  const intl = useIntl();

  let cartProduct= null;

  if (items.length > 0) {
    cartProduct = items.map((item: any, index:any) => (
      {
      product_id: item.id,
      unit: item.unit,
      quantity: Number(item.quantity) || 0,
      recicledQuantity: Number(item.recicledQuantity) || 0,
      sale_price: item.sale_price,
      // price: (Number(item.quantity || 0) * item.price) + (Number(item.recicledQuantity || 0) * (item.price - (item.packagePrice || 0))),
      price: item.price,
      image: item.images[0],
      name: item.name,
    }))
  }
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  
  const [submitResult, setSubmitResult] = useState({
    contact_number: '',
    payment_option_id: '',
    payment_option_type: '',
    delivery_method_id: '',
    delivery_date: '',
    coupon_code: '',
    delivery_address: null,
    products: null
 });

  const {    
    delivery_address, 
    contact, 
    paymentMethods, 
    phones,
    name,
    email,
    id,
    deliveryMethods
  } = state;


  //set mututions
  const [setprimaryAddressMutation] = useMutation(SETPRIMARY_ADDRESS);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [setprimaryPhoneNumberMutation] = useMutation(SETPRIMARY_PHONENUMBER);
  const [deletePhoneNumberMutation] = useMutation(DELETE_PHONENUMBER);
  const [setOrderMutation] = useMutation(CREAT_ORDER);

  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const size = useWindowSize();
  const [deliveryMethodsSelected, setDeliveryMethodsSelected] = React.useState(null);
  const [deliveryMethodSelected, setDeliveryMethodSelected] = React.useState();

  const setDeliveryAddress =  (deliveryAddress, addressAlreadyAdded) => { 
    setSubmitResult({
      ...submitResult,
      delivery_address: deliveryAddress,
      products: cartProduct
    })

    if (!addressAlreadyAdded) {
      handleModal(UpdateAddressTwo,  { item:{ address: deliveryAddress?.split(",")[0], location: deliveryAddress?.split(",")[1].includes('Resistencia') ? 'Resistencia' : deliveryAddress?.split(",")[1] }, id }, 'add-address-modal');
    }
  };

  const setDeliveryMethodSchedule =  (methodSelected, addressAlreadyAddedSelected) => {
    const delivery_date = methodSelected?.isPickUp ? methodSelected?.details.split("|")[1]?.trim() : `${methodSelected?.details.split("|")[0]?.trim()} ${methodSelected?.details.split("|")[1]?.trim()}`;
    // const deliveryDateAndTime = `${getDeliverySchedule(deliveryMethodSelected?.details)} - ${moment(deliveryDate).format('DD MMM')}`;
    setDeliveryMethodSelected(methodSelected)

    setSubmitResult({
      ...submitResult,
      delivery_method_id: methodSelected.id, 
      delivery_date, 
    })
  };

  const [appliedCoupon] = useMutation(GET_COUPON);
  let deliveryCharge = 0;
  const selectedAddress = delivery_address && delivery_address.find(
    (item) => item.is_primary === true
  );
  const selectedContact= phones.find(
    (item) => item.is_primary === true
  );

  const pickUpAddress = deliveryMethods.find(deliveryMethod => {
    return submitResult.delivery_method_id === deliveryMethod.id;
  })?.pickUpAddress;

  const calculateCCCharge = () => {
    const paymentOptionSelected = paymentMethods.find(paymentMethod => {
      return submitResult?.payment_option_id === paymentMethod?.id;
    });

    const total = Number(calculateSubTotalPrice());

    if (paymentOptionSelected?.name?.toLowerCase().includes('tarjeta') || paymentOptionSelected?.name?.toLowerCase().includes('card')) {
      const ccCharge = paymentOptionSelected?.name?.replace(/\D/g, '');
      const result = total * (ccCharge / 100);
      return result;
    }
    return 0;
  }

  const calculateIfCashDiscount = () => {
    const paymentOptionSelected = paymentMethods.find(paymentMethod => {
      return submitResult?.payment_option_id === paymentMethod?.id;
    });

    const total = Number(calculateSubTotalPrice());

    if (paymentOptionSelected?.name?.toLowerCase().includes('efectivo')) {
      const cashDiscount = 5;
      const result = total * (cashDiscount / 100);
      return result;
    }
    return 0;
  }

  // const selectedAddressText = selectedAddress?.address ? `${selectedAddress && capitalizeFirstLetter(selectedAddress.title)} - ${selectedAddress && capitalizeFirstLetter(selectedAddress.address)}, ${selectedAddress && selectedAddress.instructions}` : null;

  useEffect(() => {
    removeCoupon();
    setHasCoupon(false);
    
    deliveryCharge = calculateDeliveryCharge(deliveryMethodSelected?.name);

    setSubmitResult({
      ...submitResult,
      products: cartProduct,
      contact_number: selectedContact.number
    })
    if (
      calculatePrice() > 0 &&
      cartItemsCount > 0 &&
      (submitResult?.delivery_method_id || pickUpAddress) &&
      phones.length &&
      deliveryMethods.length
    ) {
      setIsValid(true);
    }
  }, [state, deliveryMethodSelected]);

  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-address-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };

  const handleEditDelete = async (item: any, index: any, type: string, name: string) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? UpdateAddressTwo : UpdateContact;
      handleModal(modalComponent,{
        item,
        id
      });
    } else {
      switch (name) {
       /* case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });
          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });
        */
        case 'contact':
          if(phones.length > 1){
            dispatch({ type: 'DELETE_CONTACT', payload: item.id });
            return await deletePhoneNumberMutation({
              variables: { 
                id,
                phoneId: item.id
              },
            });
          }else{
            return null
          }
        case 'address':
          if(delivery_address.length >= 1){
          dispatch({ type: 'DELETE_ADDRESS', payload: item.id });
            return await deleteAddressMutation({
              variables: { 
                id,
                addressId: item.id
              },
            });
          }else{
            return null
          }
        default:
          return false;
      }
    }
  };

  const handlePrimary = async (item: any, name: string) => {
    switch (name) {
      case 'contact':
        dispatch({ type: 'SET_PRIMARY_CONTACT', payload: item.id });
        return await setprimaryPhoneNumberMutation({
          variables: { 
            id,
            phoneId: item.id
          },
        });
      case 'address':
        dispatch({ type: 'SET_PRIMARY_ADDRESS', payload: item.id });
          return await setprimaryAddressMutation({
            variables: { 
              id,
              addressId: item.id
            },
          });
      default:
        return false;
    }
  };

  const handleApplyCoupon = async () => {

    if(!couponCode){
      setError('Invalid Coupon');
      return null;
    }

    const { data, errors }: any = await appliedCoupon({
      variables: { code: couponCode },
    });

    if(!data.getCoupon.coupon && data.getCoupon.message && !data.getCoupon.message.status){
      setError('Invalid Coupon');
      return null;
    }

    if(errors){
      setError('Invalid Coupon');
      return null;
    }

    if (data.getCoupon.coupon && data.getCoupon.coupon.percentage) {
      applyCoupon(data.getCoupon.coupon);
      setSubmitResult({
        ...submitResult,
        coupon_code: couponCode,
        products: cartProduct
      });

      setCouponCode('');
    } else {
      setError('Invalid Coupon');
    }
  };
  const handleOnUpdate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCouponCode(e.currentTarget.value);
  };

  const setErrorFor5Sec = (messageId) => {
    const error = intl.formatMessage({ id: messageId, defaultMessage: 'Please check the form' })
      setCheckoutError(error);
      setTimeout(() => setCheckoutError(null), 3500)
      return null;
  };

  const handleSubmit = async () => {
    const deliveryCharge: number = calculateDeliveryCharge(deliveryMethodSelected?.name);
    const ccCharge: number = calculateCCCharge();
    const cashDiscount: number = calculateIfCashDiscount();
    const otherSubmitResult = {
      customer_id: id,
      sub_total: Number(calculateSubTotalPrice()),
      total: Number(calculatePrice(deliveryCharge+ccCharge)),
      discount_amount: Number(calculateDiscount()),
    }

    const {
      contact_number,
      payment_option_id,
      payment_option_type,
      delivery_method_id,
      delivery_address,
      delivery_date,
      coupon_code,
      products
    } = submitResult;

    const {
      customer_id,
      sub_total,
      total,
      discount_amount
    } = otherSubmitResult;
    
    console.log("deliveryMethodTypeSelected", deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP, !submitResult?.delivery_address)

    if (deliveryMethodTypeSelected === '') { setErrorFor5Sec('checkoutDeliveryMethodInvalid');return; }
    if (deliveryMethodTypeSelected === DeliveryMethodsConstants.DELIVERY && !submitResult?.delivery_address) { setErrorFor5Sec('checkoutDeliveryAddressInvalid');return; }
    if (deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP && !deliveryMethodsSelected) { setErrorFor5Sec('checkoutDeliveryZipcodeInvalid');return; }
    if (deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP && !delivery_method_id) { setErrorFor5Sec('checkoutDeliveryPickupDateNotSelected');return; }
    if (deliveryMethodTypeSelected === DeliveryMethodsConstants.DELIVERY && submitResult?.delivery_address && !submitResult?.delivery_date) { setErrorFor5Sec('checkoutDeliveryDateNotSelected');return; }
    if (!contact_number) { setErrorFor5Sec('checkoutContactNumberInvalid');return; }
    if (!payment_option_id) { setErrorFor5Sec(pickUpAddress ? 'checkoutPaymentMethodInvalidOption4' : 'checkoutPaymentMethodInvalidOption4');return; }

    if (!customer_id || !products) {
      setCheckoutError('Please place a valid order!');
      return null;
    }
    setLoading(true);
    
    // if (confirm('Are you sure? You want to place this order?')) {
      try {
        const {errors: orderCreateError} = await setOrderMutation({
          variables: {
              input: {
                  customer_id,
                  contact_number,
                  payment_option_id,
                  delivery_method_id,
                  delivery_date,
                  delivery_address,
                  sub_total,
                  total,
                  coupon_code,
                  discount_amount,
                  products,
                  payment_option_type,
                  isWhatsappPurchase: false,
                  lenguageLocale: intl.locale
              }
            }
        });

        if (!orderCreateError) {
            if (isValid) {
                clearCart();
                removeCoupon();
                setHasCoupon(false);
                  Router.push({
                    pathname: '/order-received',
                    query: { itemId: id }
                  })
            }
            setLoading(false);
            setIsValid(false);
        }

        if (orderCreateError) {
          setOrderError(orderCreateError[0]?.message || 'Somehting went wrong')
          setLoading(false);
        }
      } catch (error) {
        if (confirm('Algo salió mal! Te pedimos disculpas y que por favor, comiences de vuelta tu compra.')) {
          console.log(error)
          setLoading(false);
          startAllOver();
        }
      }
        setLoading(false);
    // }
  };

  const startAllOver = () => {
    clearCart();
    removeCoupon();
    setHasCoupon(false);
    Router.push({ pathname: '/' })
  }

  return (
    <form>
      <CheckoutWrapper>
        <CheckoutContainer>
          <CheckoutInformation>

          <InformationBox>
            <Heading>
                <SectionNumber />
                <FormattedMessage
                   id={(deliveryMethodsSelected) ? 'selectDeliveryMethodSelected' : 'selectDeliveryMethod'}
                   defaultMessage='Select Your Delivery Type'
                />
              </Heading>
              <DeliverySelection
                deliveryMethodSelected={deliveryMethodSelected}
                setDeliveryMethodsSelected={setDeliveryMethodsSelected}
                deliveryMethodsSelected={deliveryMethodsSelected}
                setDeliveryAddress={setDeliveryAddress}
                deliveryMethodTypeSelected={deliveryMethodTypeSelected}
                setDeliveryMethodType={setDeliveryMethodType}
                deliveryMethods={deliveryMethods}
                setSubmitResult={setSubmitResult}
                userSavedAddresses={delivery_address}
                submitResult={submitResult}
                handleEditDelete={handleEditDelete}
                handlePrimary={handlePrimary}
                cartProduct={cartProduct}
              />
          </InformationBox>
            
          { deliveryMethodsSelected && (
            <InformationBox>
              <Heading>
                  <SectionNumber />
                  <FormattedMessage
                      id='deliveryDateId'
                      defaultMessage='deliveryDateId'
                    />
                </Heading>
                <DeliverySchedule
                  setDeliverySchedule={setDeliveryMethodSchedule}
                  schedulesOfDeliveryMethodSelected={deliveryMethodsSelected}
                  deliveryMethodSelected={deliveryMethodSelected}
                />
            </InformationBox>
          )}
            
            {/* Contact number */}
            <InformationBox>
              <Heading>
                <SectionNumber />
                <FormattedMessage
                  id='contactNumberText'
                  defaultMessage='Select Your Contact Number'
                />
              </Heading>
              <ButtonGroup>
                <RadioGroupThree
                  items={phones}
                  component={(item: any, index: any ) => (
                    <RadioCard
                      id={index}
                      key={index}
                      title={item.is_primary ? intl.formatMessage({ id: 'primaryId', defaultMessage: 'Primary' }) : intl.formatMessage({ id: 'secundaryId', defaultMessage: 'Secondary' })}
                      details={item.number}
                      checked={item.is_primary === true}
                      onChange={() =>handlePrimary(item, 'contact')}
                      onClick={() => setSubmitResult({
                        ...submitResult,
                        contact_number: item.number,
                        products: cartProduct
                      })}
                      name='contact'
                      onEdit={() => handleEditDelete(item, index, 'edit', 'contact')}
                      onDelete={() =>
                        handleEditDelete(item, index, 'delete', 'contact')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      className='addButton'
                      variant='text'
                      type='button'
                      onClick={() =>
                        handleModal(
                          UpdateContact, 
                          {
                           item:{},
                           id
                         }, 
                         'add-contact-modal'
                         )
                      }
                    >
                      <IconWrapper>
                        <Plus width='10px' />
                      </IconWrapper>
                      <FormattedMessage
                        id='addContactBtn'
                        defaultMessage='Add Contact'
                      />
                    </Button>
                  }
                />
              </ButtonGroup>
            </InformationBox>
            {/* PaymentOption */}

            {/* Own bag */}
            {/* <InformationBox>
              <Heading>
                <FormattedMessage
                  id='ownBagText'
                  defaultMessage=''
                />
                <SectionNumber />
              </Heading>
              <ButtonGroup>
                   <RadioGroupThree
                      items={deliveryCarrySelectOptions}
                      component={(item: any, index: any) => (
                        <RadioCard
                          id={item.id}
                          key={item.id}
                          title={item.label}
                          details={item.details}
                          link={item.isPickUp && item.pickUpAddress ? item.pickUpAddress : null}
                          name='schedule'
                          checked={true}
                          withActionButtons={false}
                          onClick={() => setSubmitResult({
                            ...submitResult,
                            delivery_method_id: item.id, 
                            products: cartProduct
                          })}
                          onChange={() =>{
                            return(dispatch({
                              type: 'SET_PRIMARY_SCHEDULE',
                              payload: item.id.toString(),
                            }))
                            }
                          }
                        />
                      )}
                     secondaryComponent={ deliveryMethodSelected ? (
                      <Button
                        className='changeButton'
                        variant='text'
                        type='button'
                        onClick={resetDeliveryMethodAndDeleteSavedCookie}
                      >
                        <IconWrapper>
                            <Plus width='10px' />
                          </IconWrapper>
                        <FormattedMessage id='changeDeliveryMethod' defaultMessage='changeDeliveryMethod' />
                      </Button>
                     ) : (null)
                     }
                   />
                 </ButtonGroup>
            </InformationBox> */}
            {/* Own bag */}

            <InformationBox
              className='paymentBox'
              style={{ paddingBottom: 30 }}
            >
              <Heading>
                <SectionNumber />
                <FormattedMessage
                  id='selectPaymentText'
                  defaultMessage='Select Payment Option'
                />
              </Heading>

              <PaymentGroup
                name='payment'
                deviceType={deviceType}
                items={paymentMethods}
                onEditDeleteField={(item: any, type: string) =>  null }
                onClick={(item: any) => {
                   setSubmitResult({
                    ...submitResult,
                     payment_option_id: item.id,
                    payment_option_type: item.type,
                    products: cartProduct
                  })
                  return null
                  }
                }
                onChange={(item: any) =>{
                  return(dispatch({
                    type: 'SET_PRIMARY_CARD',
                    payload: item.id.toString(),
                  }))
                  }
                }
                handleAddNewCard={() => null }
              />

              {/* Coupon start
              {coupon ? (
                <CouponBoxWrapper>
                  <CouponCode>
                    <FormattedMessage id='couponApplied' />
                    <span>{coupon.code}</span>

                    <RemoveCoupon
                      onClick={(e) => {
                        e.preventDefault();
                        removeCoupon();
                        setHasCoupon(false);
                      }}
                    >
                      <FormattedMessage id='removeCoupon' />
                    </RemoveCoupon>
                  </CouponCode>
                </CouponBoxWrapper>
              ) : (
                <CouponBoxWrapper>
                  {!hasCoupon ? (
                    <HaveCoupon onClick={() => setHasCoupon((prev) => !prev)}>
                      <FormattedMessage
                        id='specialCode'
                        defaultMessage='Have a special code?'
                      />
                    </HaveCoupon>
                  ) : (
                    <>
                      <CouponInputBox>
                        <CouponBox
                          onClick={handleApplyCoupon}
                          value={couponCode}
                          onChange={handleOnUpdate}
                          className='normalCoupon'
                        />
                      </CouponInputBox>

                      {couponError && (
                        <ErrorMsg>
                          <FormattedMessage
                            id='couponError'
                            defaultMessage={couponError}
                          />
                        </ErrorMsg>
                      )}
                    </>
                  )}
                </CouponBoxWrapper>
              )} */}

              <TermConditionText>
                <FormattedMessage
                  id='termAndConditionHelper'
                  defaultMessage='By making this purchase you agree to our'
                />
                <Link href='#'>
                  <TermConditionLink>
                    <FormattedMessage
                      id='termAndCondition'
                      defaultMessage='terms and conditions.'
                    />
                  </TermConditionLink>
                </Link>
              </TermConditionText>

              <CheckoutSubmit>
                <Button
                    type='button'
                    onClick={handleSubmit}
                    disabled={loading}
                    size='big'
                    loading={loading}
                    style={{ width: '100%' }}
                >
                  <FormattedMessage
                    id={loading ? 'processesingCheckout' : 'processCheckout'}
                    defaultMessage='Proceed to Checkout'
                  />
                   . ({CURRENCY}{calculatePrice(calculateDeliveryCharge(deliveryMethodSelected?.name)+calculateCCCharge())})
                </Button>
                      {/* CheckoutSubmit */}
              {checkoutError && (
                        <ErrorMsg>
                            <FormattedMessage
                                id='checkoutError'
                                defaultMessage={checkoutError}
                            />
                        </ErrorMsg>
                    )}

              </CheckoutSubmit>
                <div>
                    
                    {orderError && (
                        <ErrorMsg>
                            <p>{orderError}</p>
                        </ErrorMsg>
                    )}
                </div>
            </InformationBox>
          </CheckoutInformation>

          <CartWrapper>
            {/* <Sticky enabled={true} top={totalHeight} innerZ={999}> */}
            <Sticky
              enabled={size.width >= 768 ? true : false}
              top={120}
              innerZ={999}
            >
              <OrderInfo>
                <Title>
                  <FormattedMessage
                    id='cartTitle'
                    defaultMessage='Your Orderdfd'
                  />
                </Title>

                <Scrollbars
                  universal
                  autoHide
                  autoHeight
                  autoHeightMax='390px'
                  renderView={(props) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        marginLeft: isRtl ? props.style.marginRight : 0,
                        marginRight: isRtl ? 0 : props.style.marginRight,
                        paddingLeft: isRtl ? 15 : 0,
                        paddingRight: isRtl ? 0 : 15,
                      }}
                    />
                  )}
                >
                  <ItemsWrapper>
                    {cartItemsCount > 0 ? (
                      items.map((item) => (
                        <OrderItem key={`cartItem-${item.id}`} product={item} />
                      ))
                    ) : (
                      <>
                        <NoProductImg>
                          <NoCartBag />
                        </NoProductImg>

                        <NoProductMsg>
                          <FormattedMessage
                            id='noProductFound'
                            defaultMessage='No products found'
                          />
                        </NoProductMsg>
                      </>
                    )}
                  </ItemsWrapper>
                </Scrollbars>

                <CalculationWrapper>
                  <TextWrapper>
                    <Text>
                      <FormattedMessage id='subTotal' defaultMessage='Subtotal' />
                    </Text>
                    <Text>
                      {CURRENCY} {calculateSubTotalPrice()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage id='discountText' defaultMessage='Discount' />
                    </Text>
                    <Text>
                      {CURRENCY} {calculateDiscount()}
                    </Text>
                  </TextWrapper>

                  {calculateCCCharge() > 0 && (
                    <TextWrapper>
                      <Text>
                        <FormattedMessage id='ccrChargeText' defaultMessage='Card charge' />
                      </Text>
                      <Text>
                        {CURRENCY} {calculateCCCharge()?.toFixed(2)}
                      </Text>
                    </TextWrapper>
                  )}

                  <TextWrapper>
                    <Text>
                      <FormattedMessage id='deliveryChargeText' defaultMessage='Delivery charge' />
                    </Text>
                    <Text>
                      {CURRENCY} {calculateDeliveryCharge(deliveryMethodSelected?.name)}
                    </Text>
                  </TextWrapper>

                  <TextWrapper style={{ marginTop: 20 }}>
                    <Bold>
                      <FormattedMessage id='totalText' defaultMessage='Total' />{' '}
                    </Bold>
                    <Bold>
                      {CURRENCY} {calculatePrice(calculateDeliveryCharge(deliveryMethodSelected?.name)+calculateCCCharge())}
                    </Bold>
                  </TextWrapper>
                </CalculationWrapper>
              </OrderInfo>
            </Sticky>
          </CartWrapper>
        </CheckoutContainer>
      </CheckoutWrapper>
    </form>
  );
};

export default CheckoutWithSidebar;
