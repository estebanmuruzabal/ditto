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
import { SensorsTypes, WeekDays } from 'utils/constant';
import Checkbox from '../../components/checkbox/checkbox';
import { UPDATE_SETTING } from 'graphql/query/plants.query';
import { ISetting } from 'utils/types';
import { getDayShortName } from 'utils/sensorUtils';


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
    item,
    values,
  } = props;
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info,
  };
  
  const settingIndex = item.plant.sensors.findIndex((module: ISetting) => module.settingType === item.settingType);
  const currentSchedule = item.plant.sensors[settingIndex].scheduledOnTimes[item?.schedulePosition];

    
  const { state, dispatch } = useContext(ProfileContext);
  const [loading, setLoading] = useState(false);
  const [isSmartLightingOn, isSmartLighting] = useState(false);
  const [startTime, startTimeChange] = useState(currentSchedule?.startTime?.length > 0 ? currentSchedule.startTime : '00:00');
  const [endTime, endTimeChange] = useState(currentSchedule?.endTime?.length > 0 ? currentSchedule.endTime : '23:59');
  const [daysSelected,setDaysSelected] = useState(currentSchedule?.daysToRepeat?.length >= 0 ? currentSchedule.daysToRepeat : [])
  const [updateSetting] = useMutation(UPDATE_SETTING);
  
  const intl = useIntl();

  const dispatchSettingSave = (plant: any, sensorSetting: any, settingType: SensorsTypes) => {
    updateSetting({
      variables: {
        id: item.id,
        plantId: plant.plantId,
        input: { ...sensorSetting, settingType: settingType }
      },
    });
  };

  const handleSubmit = async () => {
    const newSchedule = {
      daysToRepeat: daysSelected,
      startTime,
      endTime,
      enabled: true,
      smartLight: isSmartLightingOn
    };

    setLoading(true);
    // here we just check and make it an array in case its not
    const settingIndex = item.plant.sensors.findIndex((module: ISetting) => module.settingType === item.settingType);
    const setting = item.plant.sensors[settingIndex];
    // setting.scheduledOnTimes = setting?.scheduledOnTimes?.length >= 0 ? setting?.scheduledOnTimes : [];

    if (currentSchedule && item?.schedulePosition >= 0) {
      setting.scheduledOnTimes[item?.schedulePosition] = newSchedule;
    } else {
      setting.scheduledOnTimes.push(newSchedule)
    }
    
    dispatch({ type: 'UPDATE_MODULE', payload: { setting, plantId: item.plant.plantId, settingIndex } });
    dispatchSettingSave(item.plant, setting, item.settingType);

    closeModal();
    setLoading(false);
  };


  const handleDaysAddition = (day: number) => {
    const dayIndex = daysSelected.indexOf(day);
    let newDaysSelectedArray: any = daysSelected;

    dayIndex >= 0 ? newDaysSelectedArray.splice(dayIndex, 1) : newDaysSelectedArray.push(day);

    setDaysSelected(newDaysSelectedArray);
  };

  return (
    <Form>
      <PlantsSensorContainer>
        <Heading>{<Heading>{intl.formatMessage({ id: currentSchedule ? 'editTimeScheduleId' : 'addTimeScheduleId', defaultMessage: 'addTimeScheduleId' })}</Heading>}</Heading>
      
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
        {WeekDays.map((day: any) => {
            return (
              <DayContainer
                key={day + '-day-container'}
                style={{ backgroundColor: daysSelected.indexOf(day) >= 0 ? '#b99c9c' : 'transparent' }}
                onClick={() => handleDaysAddition(day)}
              >
                {getDayShortName(day)}
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
          <FormattedMessage id={ currentSchedule ? "editTimeFrameId" : "addTimeFrameId"} defaultMessage="addTimeFrameId" />
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
