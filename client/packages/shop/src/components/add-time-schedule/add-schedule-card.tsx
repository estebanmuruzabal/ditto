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
import { SettingsNames, WeekDays } from 'utils/constant';
import Checkbox from '../../components/checkbox/checkbox';
import { UPDATE_SETTING } from 'graphql/query/plants.query';


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
  const [updateSetting] = useMutation(UPDATE_SETTING);
  
  const intl = useIntl();

  const handleSettingsChange = (plant: any, field: string, value: string | boolean, settingName: SettingsNames) => {

    dispatch({ type: settingName, payload: { plant, value, field } });

    dispatchSettingSave(plant, field, value, settingName);
  };

  const dispatchSettingSave = (plant: any, fieldName: string, fieldValue: string | boolean, settingName: SettingsNames) => {
    updateSetting({
      variables: {
        id: item.data?.getUser?.id,
        plantId: plant.plantId,
        input: { [fieldName]: fieldValue, ...plant[settingName], settingName: settingName }
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
    // if (isValid) {
      item.plant[item.settingName].scheduledOnTimes = item.plant[item.settingName].scheduledOnTimes ? item.plant[item.settingName].scheduledOnTimes : [];
      item.plant[item.settingName].scheduledOnTimes.push(newSchedule)
      handleSettingsChange(item.plant, 'scheduledOnTimes', item.plant[item.settingName].scheduledOnTimes, item.settingName);

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

  return (
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
