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
import { Row, Col, Container } from '../../components/FlexBox/FlexBox';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
  TaskDetail
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

export const DELETE_USER_TASK = gql`
  mutation DeleteUserTask(
    $id: ID!, 
    $taskId: String,
  ) { deleteUserTask(
      id: $id, 
      taskId: $taskId,
    ) {
    status
      message
    }
  }
`;

export const UPDATE_USER_TODO_TASKS = gql`
  mutation UpdateUserTasks(
    $id: ID!, 
    $taskId: String,
    $description: String,
    $startDate: String,
    $finishDate: String,
    $plannedDate: String,
    $isRepetitived: Boolean,
    $completationTimes: String,
    $workedHours: String,
    $isDone: Boolean
  ) { updateUserTasks(
      id: $id, 
      taskId: $taskId,
      description: $description,
      startDate: $startDate,
      finishDate: $finishDate,
      plannedDate: $plannedDate,
      isRepetitived: $isRepetitived,
      completationTimes: $completationTimes,
      workedHours: $workedHours,
      isDone: $isDone
    ) {
    status
      message
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

  const [task, setTask] = React.useState({
    taskId: null,
    description: '',
    startDate: '',
    finishDate: '',
    plannedDate: '',
    isRepetitived: false,
    completationTimes: '',
    workedHours: '',
    isDone: false
  });
  const itemData = useDrawerState('data');
  const [roleSelected, setRole] = React.useState(itemData.role || '');
  const [updateUserInfoMutation] = useMutation(UPDATE_USER_WORK_INFO);
  const [updateUserTodoMutation] = useMutation(UPDATE_USER_TODO_TASKS);
  const [deleteUserTaskMutation] = useMutation(DELETE_USER_TASK);
  console.log('itemData', itemData)
  // itemData.role = itemData.role || '';
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: itemData,
  })

  const updateUserWorkInfoMutation = async (data) => {
    const { workInfo, id } = itemData;
    const { ratePerHour, advancedSalaryPaid, totalSalaryToPayWeekly, totalWorkingMinutesPerWeek } = data.workInfo;
    const ratePerMinute = Number(ratePerHour) / 60;
    const newTotalSalaryToPayWeekly = Number(totalWorkingMinutesPerWeek) * ratePerMinute - Number(advancedSalaryPaid);

    await updateUserInfoMutation({
      variables: {
         id,
         isWorking: workInfo.isWorking,
         startedWorkTime: workInfo.startedWorkTime,
         stoppedWorkTime: workInfo.stoppedWorkTime,
         ratePerHour: Number(ratePerHour),
         logDescription: `totalSalaryToPayWeekly from ${workInfo.totalSalaryToPayWeekly} to ${totalSalaryToPayWeekly}.advancedSalaryPaid from ${workInfo.advancedSalaryPaid} to ${advancedSalaryPaid}. ratePerHour from ${workInfo.ratePerHour} to ${ratePerHour}. totalWorkingMinutesPerWeek from ${workInfo.totalWorkingMinutesPerWeek} to ${totalWorkingMinutesPerWeek}`,
         totalWorkingMinutesPerWeek: Number(totalWorkingMinutesPerWeek),
         totalSalaryToPayWeekly: parseInt(Number(newTotalSalaryToPayWeekly).toFixed(2)),
         advancedSalaryPaid: Number(advancedSalaryPaid),
         taskRelated: workInfo.taskRelated,
         role: roleSelected || workInfo.role
        }
    });
  };

  const deleteUserTask = async (taskId) => {
    const { id } = itemData;
    await deleteUserTaskMutation({
      variables: {
         id,
         taskId: taskId
        }
    });
  };

  const addUserTasks = async () => {
    const { id, tasks } = itemData;
    
    tasks.push(task)

    await updateUserTodoMutation({
      variables: {
         id,
         ...task,
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

  const editTask = (field, value) => {
    switch (field) {
      case 'description':

        break;
    
      default:
        setTask({ ...task, [field]: value });
        break;
    }

  };

  
  const h = itemData.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
  const m = itemData.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
  console.log(task)
  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Edit Staff Member {itemData.name}</DrawerTitle>
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
                <FormFields>
                  <FormLabel>Working Hours:{`${h}: ${Number(m) >= 9 ? m : '0' + m} hs.  Total Working Minutes:`}</FormLabel>
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

                <Col>
                  <FormLabel>Total Salary To Pay Weekly</FormLabel>
                  <FormLabel>{`:   $${itemData?.workInfo?.totalSalaryToPayWeekly}`}</FormLabel>
                  {/* <Input
                    type='number'
                    inputRef={register({ required: true })}
                    disabled={true}
                    name='workInfo.totalSalaryToPayWeekly'
                  /> */}
                </Col>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add tasks
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                    <Input
                      placeholder={'Task description'}
                      label='Task description'
                      value={task.description}
                      onChange={(e) => setTask({ ...task, description: e.target.value })}
                      backgroundColor='#F7F7F7'
                      marginBottom='10px'
                      // inputRef={register({ required: true })}
                      // name='workInfo.totalSalaryToPayWeekly'
                    />

                    <Input
                      placeholder={'Planned date'}
                      label='Planned date'
                      type="datetime-local"
                      value={task.plannedDate}
                      onChange={(e) => setTask({ ...task, plannedDate: e.target.value })}
                      backgroundColor='#F7F7F7'
                      marginBottom='10px'
                      // inputRef={register({ required: true })}
                      // name='workInfo.totalSalaryToPayWeekly'
                    />

                    <Checkbox
                      checked={task.isRepetitived}
                      onChange={() => setTask({ ...task, isRepetitived: !task.isRepetitived })}
                      // inputRef={register({ required: true })}
                      // name={'role'}
                      overrides={{
                        Label: {
                          style: ({ $theme }) => ({
                            color: $theme.colors.textNormal,
                          }),
                        },
                      }}
                    >
                      {'Is repetitived?'}
                    </Checkbox>
                    <Button size='small' style={{ width: '100%', marginBottom: '10px' }} onClick={addUserTasks}>
                      {'Add task'}
                    </Button>
                  </FormFields>

                  { itemData?.tasks?.length > 0 && itemData?.tasks?.map((task) => {
                    const { taskId } = task || {};
                    return (
                      <Container>
                        <Col lg={4}>
                          <TaskDetail>
                            - Description: {task?.description || 'not set'}
                          </TaskDetail>
                          <TaskDetail>
                            - Start Date: {task?.startDate || 'not set'}
                          </TaskDetail>
                          <TaskDetail>
                            - Finish Date: {task?.startDate || 'not set'}
                          </TaskDetail>
                          <TaskDetail>
                            - Is done: {task?.isDone ? 'true' : 'false'}
                          </TaskDetail>
                          </Col>
                          <Button
                            kind={KIND.tertiary}
                            onClick={() => deleteUserTask(taskId)}
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
                            delete
                          </Button>

                        </Container>
                    );
                  }) 
                    
                  }
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
                          // name={'role'}
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
