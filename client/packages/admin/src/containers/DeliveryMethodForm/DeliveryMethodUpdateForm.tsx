import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import Checkbox from '../../components/CheckBox/CheckBox';
import { useDrawerDispatch, useDrawerState } from '../../context/DrawerContext';
import { Scrollbars } from 'react-custom-scrollbars';
import Input from '../../components/Input/Input';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
// import { Switch } from '../../components/Switch/switch';

const GET_DELIVERY_METHODS = gql`
  query GetDeliveryMethods(
    $searchText: String
    $offset: Int
  ) {
    deliveryMethods(
      searchText: $searchText
      offset: $offset
    ) {
      items {
        id
        name
        details
        created_at
        isPickUp
        pickUpAddress
      }
      totalCount
      hasMore
    }
  }
`;

const UPDATE_DELIVERY_METHOD = gql`
  mutation UpdateDeliveryMethod($id: ID!, $name: String!, $details: String!, $isPickUp: Boolean, $pickUpAddress: String) {
    updateDeliveryMethod(id: $id, name: $name, details: $details, isPickUp: $isPickUp, pickUpAddress: $pickUpAddress) {
      id
      name
      details
      created_at
      isPickUp
      pickUpAddress
    }
  }
`;

type Props = any;

const UpdateDeliveryMethod: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const itemData = useDrawerState('data');
  const [isPickUp, setIsPickUp] = useState(itemData.isPickUp);

  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: itemData,
  })

  React.useEffect(() => {  }, [register]);

  const { data, error, refetch } = useQuery(GET_DELIVERY_METHODS);

  const [updateDeliveryMethod] = useMutation(UPDATE_DELIVERY_METHOD);

  const onSubmit = ({ name, details, isPickUp, pickUpAddress}) => {
    console.log(name, details, isPickUp, pickUpAddress);
    updateDeliveryMethod({
      variables: {
        id: itemData.id,
        name: name,
        details: details,
        isPickUp,
        pickUpAddress: isPickUp ? pickUpAddress : ''
      },
    });
    closeDrawer();
  };

  // console.log(itemData);
  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Update Delivery Method</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }} encType={'multipart/form-data'}>
        <Scrollbars
          autoHide
          renderView={props => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={props => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>
                Update your delivery method and necessary information's from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Name</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name="name"
                    required={true}
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Details</FormLabel>
                  <Input
                      inputRef={register({required: true})}
                      name="details"
                      required={true}
                  />
                </FormFields>

                <FormFields>
                  <Checkbox
                    checked={isPickUp}
                    inputRef={register()}
                    name='isPickUp'
                    onChange={e => {
                      setValue('isPickUp', e.target.checked)
                      setIsPickUp(e.target.checked)
                    }}

                    overrides={{
                      Label: {
                        style: ({ $theme }) => ({
                          color: $theme.colors.textNormal,
                        }),
                      },
                    }}
                  >
                    {'Pickup only'}
                  </Checkbox>
                </FormFields>
                    { isPickUp ? (
                      <FormFields>
                        <FormLabel>Pickup Address</FormLabel>
                        <Input
                            inputRef={register()}
                            name="pickUpAddress"
                        />
                      </FormFields>
                    ) : (null)}
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                  marginRight: '15px',
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Update Delivery Method
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default UpdateDeliveryMethod;
