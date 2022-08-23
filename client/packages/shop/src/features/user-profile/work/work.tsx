import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Col } from 'react-styled-flexboxgrid';
import { openModal } from '@redq/reuse-modal';
import Router, { useRouter } from 'next/router';
import RadioCardTWO from 'components/radio-card/radio-card-two';
import RadioCard from 'components/radio-card/radio-card';
import { WorkContext } from 'contexts/work/work.context';
import { AuthContext } from 'contexts/auth/auth.context';
import { DELETE_ADDRESS, SETPRIMARY_ADDRESS } from 'graphql/mutation/address';
import { UPDATE_USER, UPDATE_USER_WORK_INFO } from 'graphql/mutation/user';
import { CHANGE_PASSWORD } from 'graphql/mutation/changePassword';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_PHONENUMBER, SETPRIMARY_PHONENUMBER } from 'graphql/mutation/phone';
import StripePaymentForm from 'features/payment/stripe-form';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Row,
  ButtonGroup,
  SuccessMsg,
  ErrorMsg
} from './work.style';
import RadioGroupTwo from 'components/radio-group/radio-group-two';
import RadioGroupThree from 'components/radio-group/radio-group-three';

import PaymentGroup from 'components/payment-group/payment-group';
import UpdateAddressTwo from 'components/address-card/address-card-two';
import UpdateContact from 'components/contact-card/contact-card';
import { Button } from 'components/button/button';
import { Input } from 'components/forms/input';
import { UPDATE_ME } from 'graphql/mutation/me';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from 'components/forms/label';
import { ItemCount } from 'components/cart-popup/cart-popup.style';
import Switch from 'components/switch/switch';
import moment from 'moment';

type WorkContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const WorkContent: React.FC<WorkContentProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(WorkContext);
  const [userinfoMsg, setUserinfoMsg] = useState('');
  const [isChambeanding, setChamba] = useState(false);
  const [passwordChangeMsg, setPasswordChangeMsg] = useState('');
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const [updateMeMutation] = useMutation(UPDATE_ME);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);

  const [updateUserMutation] = useMutation(UPDATE_USER);
  const [updateUserInfoMutation] = useMutation(UPDATE_USER_WORK_INFO);
  const [changePasswordMutation] = useMutation(CHANGE_PASSWORD);
  const [deletePhoneNumberMutation] = useMutation(DELETE_PHONENUMBER);
  const [setprimaryPhoneNumberMutation] = useMutation(SETPRIMARY_PHONENUMBER);
  const [setprimaryAddressMutation] = useMutation(SETPRIMARY_ADDRESS);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const intl = useIntl();
 

  const { 
    delivery_address, 
    card,
    name,
    email,
    id,
    phones
  } = state;
  console.log(state)

  // const handleChange = (isWorking) => {
  //   const { value, name } = e.target;
  //   dispatch({
  //     type: isWorking ? 'HANDLE_WORK_START_CHANGE' : 'HANDLE_WORK_STOP_CHANGE',
  //     payload: { value, field: name },
  //   });
  // };

  
  const updateUserWorkInfoMutation = async (logDescription: string) => {
    const { workInfo, id } = state;
    const { isWorking, startedWorkTime, stoppedWorkTime, ratePerHour, totalWorkingMinutesPerWeek, totalSalaryToPayWeekly, advancedSalaryPaid, taskRelated} = workInfo;
    
    await updateUserInfoMutation({
      variables: {
         id,
         isWorking,
         startedWorkTime,
         stoppedWorkTime,
         ratePerHour,
         logDescription,
         totalWorkingMinutesPerWeek,
         totalSalaryToPayWeekly,
         advancedSalaryPaid,
         taskRelated,
         role: state.role
        }
    });
    setUserinfoMsg('Update user work info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };


  const stopWorking = () => {
    const user = state;
    if (!user.workInfo) user.workInfo = {};
    user.workInfo.isWorking = false;
    user.workInfo.stoppedWorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });

    const startedWorkTime = moment(new Date(user.workInfo.startedWorkTime));
    const stoppedWorkTime = moment(new Date(user.workInfo.stoppedWorkTime));

    const workedInMinutes = stoppedWorkTime.diff(startedWorkTime, 'minutes');
    const ratePerMinute = user.workInfo.ratePerHour / 60;

    user.workInfo.totalWorkingMinutesPerWeek += workedInMinutes;
    user.workInfo.totalSalaryToPayWeekly = user.workInfo.totalWorkingMinutesPerWeek * ratePerMinute - user.workInfo.advancedSalaryPaid;

    // user.logs.push({
    //   logDescription: ,
    //   timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
    // });

    dispatch({
      type: 'HANDLE_WORK_CHANGE',
      payload: { workInfo: user.workInfo, logs: user.logs },
    });
    updateUserWorkInfoMutation(`finished working.`);
  }

  const startWorking = () => {
    const user = state;
    if (!user.workInfo) user.workInfo = {};
    user.workInfo.isWorking = true;
    user.workInfo.startedWorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
    user.workInfo.stoppedWorkTime = null;

    user.workInfo.ratePerHour = 300;
    // user.logs.push({
    //   logDescription: ,
    //   timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
    // })

    dispatch({
      type: 'HANDLE_WORK_CHANGE',
      payload: { workInfo: user.workInfo, logs: user.logs },
    });
    updateUserWorkInfoMutation(`started working.`);
  };



  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   dispatch({
  //     type: 'HANDLE_ON_INPUT_CHANGE',
  //     payload: { value, field: name },
  //   });
  // };
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
        case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });
          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });

          
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
          if(delivery_address.length > 1){
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

  const handleSave = async () => {
    const { name, email } = state;
    await updateUserMutation({
      variables: {
         id,
         name,
         email
        }
    });
    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };

  const handleSavePassord = async () => {
    const { oldPassword , newPassword, confirmPassword } = state;
      await changePasswordMutation({
        variables: {
          id,
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword
          }
      });
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        authDispatch({ type: 'SIGN_OUT' });
        Router.push('/');
      }
      setPasswordChangeMsg('Loadding...')
  };
console.log("iswoprking:", state.workInfo)
const h = state.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
const m = state.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id='workPageTitle'
              defaultMessage='Ditto Farm'
            />
          </Title>
        </HeadingSection>
        <Col style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Row style={{ marginBottom: '15px' }}>
            <Switch 
              label={`Usted se encuentra: ${state.workInfo?.isWorking ? 'Chambeando' : 'Vagando'}`}
              disabled={false}
              labelPosition={'right'}
              // className,
              onUpdate={() => state.workInfo?.isWorking ? stopWorking() :startWorking() }
              // style
            />
          </Row>

          <Row>
          <Label style={{ marginRight: '15px', minWidth: '200px'}}>
                <FormattedMessage
                  id='profileNameField'
                  defaultMessage='Your Name'
                />
              </Label>
              <Label>
                {state.name}
              </Label>
          </Row>

          <Row>
              <Label style={{ marginRight: '15px', minWidth: '200px'}}>
                <FormattedMessage
                  id='workedHours'
                  defaultMessage='workedHours'
                />
              </Label>
              <Label>
                {`${h}:${Number(m) >= 9 ? m : '0' + m} hs`}
              </Label>
          </Row>


          <Row>
            <Label style={{ marginRight: '15px', minWidth: '200px'}}>
              <FormattedMessage
                id='salaryPerHour'
                defaultMessage='salaryPerHour'
              />
            </Label>
            <Label>
            {`$${state.workInfo?.ratePerHour}`}
            </Label>
          </Row>


          <Row>
            <Label style={{ marginRight: '15px', minWidth: '200px'}}>
              <FormattedMessage
                id='advancedSalaryPaid'
                defaultMessage='advancedSalaryPaid'
              />
            </Label>
            <Label>
              {`$${state.workInfo?.advancedSalaryPaid}`}
            </Label>
          </Row>

          <Row>
            <Label style={{ marginRight: '15px', minWidth: '200px'}}>
                <FormattedMessage
                  id='totalSalaryToPayWeekly'
                  defaultMessage='totalSalaryToPayWeekly'
                />
              </Label>
              <Label>
                {`$${state.workInfo?.totalSalaryToPayWeekly}`}
              </Label>
          </Row>

          <Row>
            <Label>
              <FormattedMessage
                id='todoTasks'
                defaultMessage='todoTasks'
              />
            </Label>
            {state.workInfo?.tasks?.map((task) => {
              return (
                <Label>
                  {task}
                </Label>
              )
            })}
          </Row>

        </Col>
        {/* <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileNameField'
                defaultMessage='Your Name'
              />
            </Label>
            <Input
              type='text'
              label='Name'
              name='name'
              value={name}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
              marginBottom='10px'
              // intlInputLabelId="profileNameField"
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileEmailField'
                defaultMessage='Your Email'
              />
            </Label>
            <Input
              type='email'
              name='email'
              label='Email Address'
              value={email}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              marginBottom='10px'
              // intlInputLabelId="profileEmailField"
            />
          </Col>

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button size='big' style={{ width: '100%', marginBottom: '10px' }} onClick={handleSave}>
              <FormattedMessage id='profileSaveBtn' defaultMessage='Save' />
            </Button>
          </Col>
          {userinfoMsg && (
              <SuccessMsg>
                <FormattedMessage
                  id='userInfoSuccess'
                  defaultMessage={userinfoMsg}
                />
              </SuccessMsg>
          )}
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='contactNumberTItle'
                    defaultMessage='Contact Numbers'
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroupThree
                  items={phones}
                  component={(item: any, index: any) => (
                    <RadioCard
                      id={index}
                      key={index}
                      title={item.is_primary ? intl.formatMessage({ id: 'primaryId', defaultMessage: 'Primary' }) : intl.formatMessage({ id: 'secundaryId', defaultMessage: 'Secondary' })}
                      content={item.number}
                      checked={item.is_primary === true}
                      onChange={() => handlePrimary(item, 'contact')}
                      name='contact'
                      onEdit={() => handleEditDelete(item, index, 'edit', 'contact')}
                      onDelete={() =>
                        handleEditDelete(item, index, 'delete', 'contact')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      size='big'
                      variant='outlined'
                      type='button'
                      className='add-button'
                      onClick={() =>handleModal(
                         UpdateContact, 
                         {
                          item:{},
                          id
                        }, 
                        'add-contact-modal'
                        )
                      }
                    >
                      <FormattedMessage
                        id='addContactBtn'
                        defaultMessage='Add Contact'
                      />
                    </Button>
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: 'relative' }}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='deliveryAddresTitle'
                    defaultMessage='Delivery Address'
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroupTwo
                  items={delivery_address}
                  component={(item: any, index: any) => (
                    <RadioCardTWO 
                      id={index}
                      key={index}
                      address={item.address}
                      district={item.district}
                      division={item.division}
                      title={item.title}
                      region = {item.region}
                      name='address'
                      isChecked={item.is_primary === true}
                      onChange={() =>handlePrimary(item, 'address')}
                      onEdit={() => handleEditDelete(item, index, 'edit', 'address')}
                      onDelete={() =>
                        handleEditDelete(item, index, 'delete', 'address')
                      }
                    />
                  )}
                  
                  secondaryComponent={
                    <Button
                      size='big'
                      variant='outlined'
                      type='button'
                      className='add-button'
                      onClick={() =>handleModal(
                          UpdateAddressTwo, 
                          {
                            item:{},
                            id
                          },
                          'add-address-modal')
                      }
                    >
                      <FormattedMessage
                        id={delivery_address?.length === 3 ? "fullDeliveryAddressesMsg" : "addAddressBtn"}
                        defaultMessage='Add Address' 
                      />
                    </Button>
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='changePasswordTitle'
                    defaultMessage='Change Password'
                  />
                </Title>
              </HeadingSection>
            </SettingsFormContent>
          </Col>
          <Col xs={12} sm={2} md={2} lg={3}>
            <Input
              type='password'
              label='Old Password' 
              placeholder={intl.formatMessage({ id: 'oldPasswordId', defaultMessage: 'Old password' })}
              name='oldPassword'
              value={ state.oldPassword || '' }
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
              marginBottom='10px'
              intlInputLabelId="profileNameField"
            />
          </Col>
          <Col xs={12} sm={2} md={2} lg={3}>
            <Input
              type='password'
              label='New Password'
              placeholder={intl.formatMessage({ id: 'newPasswordId', defaultMessage: 'New password' })}
              name='newPassword'
              value={ state.newPassword || '' }
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
              marginBottom='10px'
              // intlInputLabelId="profileNameField"
            />
          </Col>
          <Col xs={12} sm={2} md={2} lg={3}>
            <Input
              type='password'
              name='confirmPassword'
              placeholder={intl.formatMessage({ id: 'confirmPasswordId', defaultMessage: 'Confirm password' })}
              value={ state.confirmPassword || '' }
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              marginBottom='10px'
              // intlInputLabelId="profileEmailField"
            />
          </Col>
          <Col xs={12} sm={2} md={2} lg={3}>
            {!passwordChangeMsg &&
              <Button size='big' style={{ width: '100%', marginBottom: '10px' }} onClick={handleSavePassord}>
                <FormattedMessage id='profileSaveBtn' defaultMessage='Save' />
              </Button>
            }
            {passwordChangeMsg &&
              <Button size='big' style={{ width: '100%' }} onClick={handleSavePassord}>
                <FormattedMessage id='profileSaveBtn' defaultMessage='Loading..' />
              </Button>
            }
          </Col>
        </Row> */}

        {/*<Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='paymentCardTitle'
                    defaultMessage='Payments Card'
                  />
                </Title>
              </HeadingSection>
              <PaymentGroup
                name='payment'
                deviceType={deviceType}
                items={card}
                onEditDeleteField={(item: any, type: string) =>
                  handleEditDelete(item, type, 'payment')
                }
                onChange={(item: any) =>
                  dispatch({
                    type: 'SET_PRIMARY_CARD',
                    payload: item.id.toString(),
                  })
                }
                handleAddNewCard={() => {
                  handleModal(
                    StripePaymentForm,
                    { buttonText: 'Add Card' },
                    'add-address-modal stripe-modal'
                  );
                }}
              />
            </SettingsFormContent>
          </Col>
        </Row>*/}
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default WorkContent;
