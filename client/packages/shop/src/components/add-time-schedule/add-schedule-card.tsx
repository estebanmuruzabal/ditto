import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/forms/text-field';
import { Button } from 'components/button/button';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_ADDRESS } from 'graphql/mutation/address';
import { ButtonsContainer, DayContainer, FieldWrapper, Heading, ListDes, ListItem, ListTitle, PlantsSensorContainer, Text, WeekContainer } from './add-schedule-card.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage, useIntl } from 'react-intl';
import Loader from 'components/loader/loader';

import TimePicker from 'react-time-picker'
import { WeekDays } from 'utils/constant';
import Checkbox from 'components/checkbox/checkbox';
import { UPDATE_HUMIDITY_1_SETTINGS, UPDATE_HUMIDITY_2_SETTINGS, UPDATE_LIGHT_SETTINGS } from 'graphql/query/plants.query';


// Shape of form values
interface FormValues {
  id?: number | null;
  name?: string;
  info?: string;
}

// The type of props MyForm receives
interface MyFormProps {
  item?: any | null;
}

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
  
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      id: props.item.id || null,
      name: props.item.name || '',
      info: props.item.info || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Required!'),
    info: Yup.string().required('Required'),
  }),
  handleSubmit: (values) => {
    // do submitting things
  },
});

const AddTimeSchedule = (props: FormikProps<FormValues> & MyFormProps) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    
    handleReset,
    isSubmitting,
  } = props;
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info,
  };
  const { state, dispatch } = useContext(ProfileContext);
  const [loading, setLoading] = useState(false);
  const [isSmartLightingOn, isSmartLighting] = useState(false);
  const [startTime, startTimeChange] = useState('00:00');
  const [endTime, endTimeChange] = useState('23:59');
  const [daysSelected,setDaysSelected] = useState([]);
  const [updateLightSettings] = useMutation(UPDATE_LIGHT_SETTINGS);
  const [updateHumiditySettings1] = useMutation(UPDATE_HUMIDITY_1_SETTINGS);
  const [updateHumiditySettings2] = useMutation(UPDATE_HUMIDITY_2_SETTINGS);
  
  const intl = useIntl();

  const handleSubmit = async () => {
    const newSchedule = {
      daysToRepeat: daysSelected,
      startTime,
      endTime,
      enabled: true,
      smartLight: isSmartLightingOn
    };

    setLoading(true);
    // if (isValid) {
      switch (item.name) {
        case 'add-light-schedule':
          item.plant.lightSettings.scheduledOnTimes = item.plant.lightSettings.scheduledOnTimes ? item.plant.lightSettings.scheduledOnTimes : [];
          item.plant.lightSettings.scheduledOnTimes.push(newSchedule)
          
          dispatch({
            type: 'HANDLE_LIGHT_SETTINGS_CHANGE',
            payload: { plant: item.plant, value: item.plant.lightSettings.scheduledOnTimes, field: 'scheduledOnTimes' },
          });
         
          return await updateLightSettings({
            variables: {
              id: item?.id,
              controllerId: item.plant.controllerId,
              input: item.plant.lightSettings
            },
          });
        case 'add-humidity-1-schedule':
          item.plant.soilHumiditySettings1.scheduledOnTimes = item.plant.soilHumiditySettings1.scheduledOnTimes ? item.plant.soilHumiditySettings1.scheduledOnTimes : [];
          item.plant.soilHumiditySettings1.scheduledOnTimes.push(newSchedule)
          
          dispatch({
            type: 'HANDLE_HUMIDITY_1_SETTINGS_CHANGE',
            payload: { plant: item.plant, value: item.plant.soilHumiditySettings1.scheduledOnTimes, field: 'scheduledOnTimes' },
          });
          
          return await updateHumiditySettings1({
            variables: {
              id: item?.id,
              controllerId: item.plant.controllerId,
              input: item.plant.soilHumiditySettings1
            },
          });

        case 'add-humidity-2-schedule':
          item.plant.soilHumiditySettings2.scheduledOnTimes = item.plant.soilHumiditySettings2.scheduledOnTimes ? item.plant.soilHumiditySettings2.scheduledOnTimes : [];
          item.plant.soilHumiditySettings2.scheduledOnTimes.push(newSchedule)
          
          dispatch({
            type: 'HANDLE_HUMIDITY_2_SETTINGS_CHANGE',
            payload: { plant: item.plant, value: item.plant.soilHumiditySettings2.scheduledOnTimes, field: 'scheduledOnTimes' },
          });
         
          return await updateHumiditySettings2({
            variables: {
              id: item?.id,
              controllerId: item.plant.controllerId,
              input: item.plant.soilHumiditySettings2
            },
          });
        default:
          break;
      }
      
      closeModal();
      setLoading(false);
    // }
  };


  const handleDaysAddition = (day: WeekDays) => {
    const dayIndex = daysSelected.indexOf(day);
    let newDaysSelectedArray: any = daysSelected;

    dayIndex >= 0 ? newDaysSelectedArray.splice(dayIndex, 1) : newDaysSelectedArray.push(day);

    setDaysSelected(newDaysSelectedArray);
  };

    // const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    // const lightSchedule = {
    //     daysToRepeat: [weekDays[0], weekDays[2], weekDays[3]],
    //     startTime: '00:00',
    //     endTime: '23:59',
    //     enabled: true,
    //     smartLight: false
    // }

    // const b = {
    //     daysToRepeat: [weekDays[0], weekDays[2], weekDays[3]]
    // }
    // const onTimes = [a, b]


    //set notification schedule
    // [mon] tue wed thu ...
    // 00:00 --- 07:15
    // 15:15 ----- 23:59
    // Add time Schedule (button)

    // (when pressing the button you see this pop up)
    // Add time Schedule
    //start time: 00:00
    //end time: 23:59

    // repeat: (touch and you can see all days of the week to select/deselect) press ok, and original view is seeing the selected days


    // also the smart option for when is no light and there should be light
  return (
    // <Form style={{ height: '100px' }}>
    <Form>
      <PlantsSensorContainer>
      <Heading>{<Heading>{intl.formatMessage({ id: 'addTimeScheduleId', defaultMessage: 'addTimeScheduleId' })}</Heading>}</Heading>
      
        <ListItem>
          <ListTitle>
            <Text bold>
              <FormattedMessage
                id="startTimeId"
                defaultMessage="startTimeId"
              />
            </Text>
          </ListTitle>
          <ListDes>
            <TimePicker
              onChange={(e) => startTimeChange(e)}
              value={startTime}
              disableClock={true}
            />
          </ListDes>
        </ListItem>

        <ListItem>
          <ListTitle>
            <Text bold>
              <FormattedMessage
                id="endTimeId"
                defaultMessage="endTimeId"
              />
            </Text>
          </ListTitle>
          <ListDes>
            <TimePicker
              onChange={(e) => endTimeChange(e)}
              value={endTime}
              disableClock={true}
            />
          </ListDes>
        </ListItem>

      <WeekContainer>
        {Object.keys(WeekDays).map((day: WeekDays, i: number) => {
            return (
              <DayContainer
                key={i + '-day-container'}
                style={{ backgroundColor: daysSelected.indexOf(day) >= 0 ? '#b99c9c' : 'transparent' }}
                onClick={() => handleDaysAddition(day)}
              >
                {day.substring(0,3)}
              </DayContainer>
            )
          })
        }
      </WeekContainer>

      {/* <Checkbox
        checked={isSmartLightingOn}
        id='smart-lighting-id'
        labelText='Luces'
        onChange={() => isSmartLighting(!isSmartLightingOn) }
        // inputRef={register({ required: true })}
        name='isSmartLightingOn'
        overrides={{
          Label: {
              style: ({ $theme }) => ({
              color: $theme.colors.textNormal,
              }),
          },
        }}
      >
        <FormattedMessage id="smartLightingId" defaultMessage="smartLightingId" />
      </Checkbox> */}
      <ButtonsContainer>
        <Button
          onClick={handleSubmit}
          type="submit"
          // style={{ width: '100%', height: '44px', marginTop: '200px' }}
          loader={<Loader />}
          isDisabled={loading}
          isLoading={loading}
        >
          <FormattedMessage id="addTimeFrameId" defaultMessage="addTimeFrameId" />
        </Button>
        <Button
          onClick={() => closeModal()}
          style={{ marginLeft: '20px' }}
          loader={<Loader />}
          isDisabled={loading}
          isLoading={loading}
        >
          <FormattedMessage id="cancelTimeFrameId" defaultMessage="cancelTimeFrameId" />
        </Button>
      </ButtonsContainer>

      </PlantsSensorContainer>
    </Form>
  );
};

export default FormEnhancer(AddTimeSchedule);
