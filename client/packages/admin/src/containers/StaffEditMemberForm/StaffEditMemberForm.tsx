import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDrawerDispatch, useDrawerState } from '../../context/DrawerContext';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/CheckBox/CheckBox';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import Button, { KIND } from '../../components/Button/Button';
import es from 'react-phone-input-2/lang/es.json'

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
import Select from '../../components/Select/Select';
import { ADMIN, CLIENT, DELIVERY_BOY, MANAGER, MEMBER } from '../../settings/constants';

const GET_STAFFS = gql`
  query getStaffs($role: String, $searchBy: String) {
    staffs(role: $role, searchBy: $searchBy) {
      id
      name
      email
      contact_number
      creation_date
      role
    }
  }
`;

export const UPDATE_USER_WORK_INFO = gql`
  mutation UpdateUserWorkInfo(
    $id: ID!, 
    $isWorking: Boolean,
    $startedWorkTime: String,
    $stoppedWorkTime: String,
    $ratePerHour: Int,
    $logDescription: String,
    $totalWorkingMinutesPerWeek: Int,
    $totalSalaryToPayWeekly: Int,
    $advancedSalaryPaid: Int,
    $taskRelated: String,
    $role: String
  ) { updateUserWorkInfo(
      id: $id, 
      isWorking: $isWorking,
      startedWorkTime: $startedWorkTime,
      stoppedWorkTime: $stoppedWorkTime,
      ratePerHour: $ratePerHour,
      logDescription: $logDescription,
      totalWorkingMinutesPerWeek: $totalWorkingMinutesPerWeek,
      totalSalaryToPayWeekly: $totalSalaryToPayWeekly,
      advancedSalaryPaid: $advancedSalaryPaid,
      taskRelated: $taskRelated,
      role: $role
    ) {
    status
      message
    }
  }
`;

const EDIT_STAFF = gql`
  mutation editStaff($staff: AddStaffInput!) {
    editStaff(staff: $staff) {
      id
      first_name
      last_name
      name
      email
      contact_number
      creation_date
      role
    }
  }
`;

type Props = any;

const StaffEditMemberForm: React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const [country, setCountry] = React.useState(undefined);
  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState('');
  const itemData = useDrawerState('data');
  const [roleSelected, setRole] = React.useState(itemData.role || '');
  const [updateUserInfoMutation] = useMutation(UPDATE_USER_WORK_INFO);
  console.log('itemData', itemData)
  // itemData.role = itemData.role || '';
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: itemData,
  })

  function handleRole({ value }) {
    console.log('setRole(value);', value)
    setRole(value);

  }
  // const [createStaff] = useMutation(EDIT_STAFF, {
  //   update(cache, { data: { createStaff } }) {
  //     const { staffs } = cache.readQuery({
  //       query: GET_STAFFS,
  //     });

  //     cache.writeQuery({
  //       query: GET_STAFFS,
  //       data: { staffs: staffs.concat([createStaff]) },
  //     });
  //   },
  // });

  const updateUserWorkInfoMutation = async (data) => {
    const { workInfo, id } = itemData;
    console.log(data.workInfo);
    console.log(workInfo);
    const { ratePerHour, advancedSalaryPaid, totalSalaryToPayWeekly, totalWorkingMinutesPerWeek } = data.workInfo;
    
    // const newTotalSalaryToPayWeekly = Number(ratePerHour) * Number(totalWorkingMinutesPerWeek) - Number(advancedSalaryPaid);
    // const newAdvancedSalaryPaid = Number(totalSalaryToPayWeekly) - newTotalSalaryToPayWeekly;
    const ratePerMinute = Number(ratePerHour) / 60;
    const newTotalWorkingMinutesPerWeek = Number(totalWorkingMinutesPerWeek) * 60;
    const newTotalSalaryToPayWeekly = newTotalWorkingMinutesPerWeek * ratePerMinute - Number(advancedSalaryPaid);
    await updateUserInfoMutation({
      variables: {
         id,
         isWorking: workInfo.isWorking,
         startedWorkTime: workInfo.startedWorkTime,
         stoppedWorkTime: workInfo.stoppedWorkTime,
         ratePerHour: Number(ratePerHour),
         logDescription: `totalSalaryToPayWeekly from ${workInfo.totalSalaryToPayWeekly} to ${totalSalaryToPayWeekly}.advancedSalaryPaid from ${workInfo.advancedSalaryPaid} to ${advancedSalaryPaid}. ratePerHour from ${workInfo.ratePerHour} to ${ratePerHour}. totalWorkingMinutesPerWeek from ${workInfo.totalWorkingMinutesPerWeek} to ${totalWorkingMinutesPerWeek}`,
         totalWorkingMinutesPerWeek: newTotalWorkingMinutesPerWeek,
         totalSalaryToPayWeekly: newTotalSalaryToPayWeekly,
         advancedSalaryPaid: Number(advancedSalaryPaid),
         taskRelated: workInfo.taskRelated,
         role: roleSelected
        }
    });
  };

  React.useEffect(() => {  }, [register]);

  const roleSelectOptions = [
    { value: ADMIN, label: 'Admin' },
    { value: MANAGER, label: 'Manager' },
    { value: MEMBER, label: 'Member' },
    { value: DELIVERY_BOY, label: 'Delivery boy' },
    { value: CLIENT, label: 'Client' },
  ];
  
  const onSubmit = (data) => {

    updateUserWorkInfoMutation(data);
    closeDrawer();
  };

  const h = itemData.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
  const m = itemData.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Edit Staff Member</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
        <Scrollbars
          autoHide
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: 'none' }}
              className='track-horizontal'
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add staff name, description and necessary information from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                {/* <FormFields>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name='first_name'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name='last_name'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Contact No.</FormLabel>
                  <PhoneInput
                    onCountryChange={({ option }) => setCountry(option)}
                    text={text}
                    onTextChange={(e) => setText(e.currentTarget.value)}
                    inputRef={register({ required: true })}
                    name='contact_number'

                    // inputProps={{
                    //   name: 'phone',
                    //   required: true,
                    //   autoFocus: true
                    // }}
                    containerStyle={{textAlign: "left"}}
                    inputStyle={{backgroundColor: "#F7F7F7", height: "48px", marginBottom: "10px", width: "100%"}}
                    onlyCountries={['ar']}
                    localization={es}
                    country={'ar'}
                    masks={{ar: '(...) ...-....'}}
                  />
                </FormFields> */}
{/* 
                <FormFields>
                  <FormLabel>Role</FormLabel>
                  <Select
                    options={roleSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Role"
                    inputRef={register({ required: true })}
                    value={[roleSelectOptions[0]]}
                    // name='role'
                    searchable={false}
                    onChange={handleRole}
                    />
                </FormFields> */}

                {/* <FormFields>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    inputRef={register({ required: true })}
                    name='email'
                  />
                </FormFields> */}

                <FormFields>
                  <FormLabel>Minutes working bellow. {`(${h}:${Number(m) >= 9 ? m : '0' + m} hs)`}, Change example: type '2.5' for 2:30 hs </FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name='workInfo.totalWorkingMinutesPerWeek'
                  />
                </FormFields>
              
                <FormFields>
                  <FormLabel>Rate per hour</FormLabel>
                  <Input
                    type='number'
                    inputRef={register({ required: true })}
                    name='workInfo.ratePerHour'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Advanced Salary</FormLabel>
                  <Input
                    type='number'
                    inputRef={register({ required: true })}
                    name='workInfo.advancedSalaryPaid'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Total Salary To Pay Weekly</FormLabel>
                  <Input
                    type='number'
                    inputRef={register({ required: true })}
                    disabled={true}
                    name='workInfo.totalSalaryToPayWeekly'
                  />
                </FormFields>

              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Expand or restrict user’s permissions to access certain part of
                Ditto system.
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  { roleSelectOptions?.map(role => {
                    return (
                      <div key={`index-${role.value}`}>
                        <Checkbox
                          checked={role.value === roleSelected}
                          onChange={() => setRole(role.value)}
                          inputRef={register({ required: true })}
                          name={'role'}
                          overrides={{
                            Label: {
                              style: ({ $theme }) => ({
                                color: $theme.colors.textNormal,
                              }),
                            },
                          }}
                        >
                          {role.label}
                        </Checkbox>
                      </div>
                    )
                  })
                  }
                </FormFields>
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
            type='submit'
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
            Edit Staff
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default StaffEditMemberForm;
