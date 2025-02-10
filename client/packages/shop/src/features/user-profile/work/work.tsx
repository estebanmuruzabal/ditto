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
import { UPDATE_USER_TODO_TASKS, UPDATE_USER_WORK_INFO } from 'graphql/mutation/user';
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
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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

  const [updateUserTodoMutation] = useMutation(UPDATE_USER_TODO_TASKS);
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
    user.workInfo.stoppedWorkTime = new Date().toLocaleString('en-US', { timeZone });

    const startedWorkTime = moment(new Date(user.workInfo.startedWorkTime));
    const stoppedWorkTime = moment(new Date(user.workInfo.stoppedWorkTime));

    const workedInMinutes = stoppedWorkTime.diff(startedWorkTime, 'minutes');
    const ratePerMinute = user.workInfo.ratePerHour / 60;

    user.workInfo.totalWorkingMinutesPerWeek += workedInMinutes;
    user.workInfo.totalSalaryToPayWeekly = Number(user.workInfo.totalWorkingMinutesPerWeek) * Number(ratePerMinute) - Number(user.workInfo.advancedSalaryPaid || 0);

    user.logs.push({
      logDescription: 'finished working',
      timestamp: new Date().toLocaleString('en-US', { timeZone })
    });

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
    user.workInfo.startedWorkTime = new Date().toLocaleString('en-US', { timeZone });
    user.workInfo.stoppedWorkTime = null;

    user.logs.push({
      logDescription: `started working.`,
      timestamp: new Date().toLocaleString('en-US', { timeZone })
    })

    dispatch({
      type: 'HANDLE_WORK_CHANGE',
      payload: { workInfo: user.workInfo, logs: user.logs },
    });
    updateUserWorkInfoMutation(`started working.`);
  };


  
  const handleTaskChange = async (task: any, action: string) => {
    const { id, tasks } = state;
    const completationTimes =  task.isRepetitived ? (Number(task.completationTimes)+ 1).toString() : task.completationTimes;
    const taskIndex = tasks?.findIndex(t => t.taskId === task.taskId);
    let taskUpdated;

    switch (action) {
      case 'stop':
        const finishDate = new Date().toLocaleString('en-US', { timeZone });
        const workedHours = getDurationTimeInHours(task.startDate, finishDate);

        taskUpdated = {
          id,
          taskId: task.taskId,
          description: task.description,
          startDate: task.startDate,
          finishDate,
          plannedDate: task.plannedDate,
          isRepetitived: task.isRepetitived,
          completationTimes,
          workedHours: workedHours,
          isDone: true
        }
        break;
      case 'start':
        const startDate = new Date().toLocaleString('en-US', { timeZone });
        taskUpdated = {
          id,
          taskId: task.taskId,
          description: task.description,
          startDate: startDate,
          finishDate: task.finishDate,
          plannedDate: task.plannedDate,
          isRepetitived: task.isRepetitived,
          completationTimes,
          workedHours: task.workedHours,
          isDone: task.isDone
        }
        break;
      default:
        taskUpdated = task;
        break;
      }

      tasks[taskIndex] = taskUpdated;
      dispatch({
        type: 'HANDLE_TODO_TASKS',
        payload: { tasks },
      });

      return await updateUserTodoMutation({
        variables: {
          ...taskUpdated,
        },
      });
    }

  const getDurationTimeInHours = (start: string, finish: string) => {
    const startDate = moment(new Date(start));
    const finishDate = moment(new Date(finish));

    const duration = moment.duration(finishDate.diff(startDate));
    const hours = duration.asHours();
    const minutes = duration.asHours();
    return `${parseInt(duration.asHours().toString())}:${parseInt(duration.asMinutes().toString()) % 60}`;
  };

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


  const h = state.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
  const m = state.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
  const subtotalSalario = Number(state.workInfo?.totalWorkingMinutesPerWeek) / 60 * Number(state.workInfo?.ratePerHour);
  const pendingTasks = state?.tasks.filter((task) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false) || task.isRepetitived)
  const inProgressTasks = state?.tasks.filter((task) => (task.startDate.length > 1 && task.finishDate.length === 0));

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
              checked={state.workInfo?.isWorking}
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
            {`$${state.workInfo?.ratePerHour?.toFixed(2) || '-'}`}
            </Label>
          </Row>

          <Row>
            <Label style={{ marginRight: '15px', minWidth: '200px'}}>
              <FormattedMessage
                id='subtotalSalary'
                defaultMessage='Salary Subtotal'
              />
            </Label>
            <Label>
              {`$${subtotalSalario}`}
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
                {`$${state.workInfo?.totalSalaryToPayWeekly?.toFixed(2) || '-'}`}
              </Label>
          </Row>

          { inProgressTasks?.length > 0 && (
            <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <SettingsFormContent>
                <HeadingSection>
                  <Title>
                    <FormattedMessage id='inProgressTasks' defaultMessage='inProgressTasks' />
                  </Title>
                </HeadingSection>
                <ButtonGroup>
                  <RadioGroupThree
                    items={inProgressTasks}
                    component={(task: any, index: any) => (
                      <RadioCard
                        id={index}
                        key={index}
                        title={task.description}
                        content={`Comenzaste: ${moment(new Date(task.startDate)).format('HH:mm A - DD MMM')}.`}
                        checked={task.isDone}
                        onChange={() => handleTaskChange(task, 'nothing')}
                        name='contact'
                        hasEdit={false}
                        onDelete={() => handleTaskChange(task, 'stop')}
                      />
                    )}
                  />
                </ButtonGroup>
              </SettingsFormContent>
            </Col>
          </Row>
          )}

          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <SettingsFormContent>
                <HeadingSection>
                  <Title>
                    <FormattedMessage id='pendingTasks' defaultMessage='pendingTasks' />
                  </Title>
                </HeadingSection>
                <ButtonGroup>
                  <RadioGroupThree
                    items={pendingTasks}
                    component={(task: any, index: any) => {
                      const plannedDateDay = moment(task.plannedDate, 'MM/D/YYYY').day();
                      const plannedDate = moment(task.plannedDate, 'MM/D/YYYY');
                      const today = moment(new Date(), 'MM/D/YYYY');
                      const todayDay = moment(new Date(), 'MM/D/YYYY').day();
                      let message = null;

                      if (task.plannedDate?.length > 1 && task.isRepetitived && plannedDateDay === todayDay) {
                        message = `Tarea repetitiva: ${moment(new Date(task.plannedDate)).format('HH:mm A - ddd')}`
                      } else if (task.plannedDate?.length > 1 && !task.isRepetitived && plannedDate.isSame(today, 'date')){
                        message = `Tarea unica, fecha: ${moment(new Date(task.plannedDate)).format('HH:mm A - DD MMM')}`
                      }
                      return (
                        <RadioCard
                          id={index}
                          key={index}
                          disabled={!!!message}
                          title={task.description}
                          content={message}
                          checked={task.isDone}
                          onChange={() => handleTaskChange(task, 'contact')}
                          name='contact'
                          onEdit={() => handleTaskChange(task,'start')}
                          hasDelete={false}
                        />
                      )}
                    }
                  />
                </ButtonGroup>
              </SettingsFormContent>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <SettingsFormContent>
                <HeadingSection>
                  <Title>
                    <FormattedMessage id='doneTasks' defaultMessage='doneTasks' />
                  </Title>
                </HeadingSection>
                <ButtonGroup>
                  <RadioGroupThree
                    items={state?.tasks.filter((task) => (task.isDone === true))}
                    component={(task: any, index: any) => (
                      <RadioCard
                        id={index}
                        key={index}
                        title={task.description}
                        content={`Comenzaste: ${moment(new Date(task.startDate)).format('HH:mm A - DD MMM')}. /nTerminaste: ${moment(new Date(task.finishDate)).format('HH:mm A - DD MMM')}. Tardaste: ${task.workedHours}hs`}
                        checked={task.isDone}
                        onChange={() => handleTaskChange(task, 'nothing')}
                        name='contact'
                        hasDelete={false}
                        hasEdit={false}
                      />
                    )}
                  />
                </ButtonGroup>
              </SettingsFormContent>
            </Col>
          </Row>

        </Col>
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default WorkContent;
