import React, { useState, useEffect, useRef } from 'react';
import { SearchBox } from 'components/search-box/search-box';
import Router,{ useRouter } from 'next/router';
import LineChart from 'components/line-chart/line-chart';
import GraphChart from 'components/graph-chart/graph-chart';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { PencilIcon } from 'assets/icons/PencilIcon';
import { Button } from 'components/button/button';
import Switch from 'components/switch/switch';
import { FormattedMessage, useIntl } from 'react-intl';
import Select from 'react-select';
import { Input } from 'components/forms/input';
import { SensorsTypes, HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions } from 'utils/constant';
import HumidityLogsGraph from '../../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, Status, ButtonText, Type, ActionsButtons, Row, ScheduleTimeContainer, WeekContainerModal, ErrorMsg, Porcentage } from '../../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  
import { ISetting } from 'utils/types';
import { CheckMark } from 'assets/icons/CheckMark';
import { getRelayNameText, getSettingTypeText } from 'utils/sensorUtils';
import { useQuery } from '@apollo/react-hooks';
import { GET_LOGGED_IN_USER_SETTINGS } from 'graphql/query/customer.query';

interface Props {
  module: any;
  plantId: any;
}

const LightReading: React.FC<Props> = ({ module, plantId  }) => {

  const { loading, error, data } = useQuery(GET_LOGGED_IN_USER_SETTINGS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    pollInterval: 10000,
  });


  // const sensorIndex = Number(module?.settingType[module?.settingType.length - 1]);
  const plantIndex = data?.getUser?.plants?.findIndex((plant: any) => plant.plantId === plantId);
  const sensorIndex = data?.getUser.plants[plantIndex]?.sensors?.findIndex((sensor: any) => sensor.settingType === module.settingType);            
  let reading = data?.getUser.plants[plantIndex]?.sensors[sensorIndex]?.reading;
    return (
        <Text bold>{reading} % {reading < 40 ? '🌙' : '💡'}</Text>
    );
};

export default LightReading;
