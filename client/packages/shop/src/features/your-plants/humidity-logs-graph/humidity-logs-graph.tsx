import React, { useState, useEffect, useRef } from 'react';
import { SearchBox } from 'components/search-box/search-box';
import Router,{ useRouter } from 'next/router';
import {SearchWrapper, SearchResultWrap} from './humidity-logs-graph.style';
import { IHumidityLogs } from 'utils/types';
import LineChart from 'components/line-chart/line-chart';
import GraphChart from 'components/graph-chart/graph-chart';

interface Props {
  data?: IHumidityLogs;
}

const HumidityLogsGraph: React.FC<Props> = ({ data, ...props  }) => {
  console.log(data)
  JSON.stringify(data)
  let humidities = [];
  let times = [];
  Object.keys(data).forEach(function (key, index) {
    humidities.push(data[key].humidity);
    let trimed = data[key].timestamp.substring(0, data[key].timestamp.length - 6);
    console.log(trimed)
    times.push(data[key].timestamp);
    
});
  return (
    <SearchWrapper>
      <GraphChart
        // widgetTitle='Humidity history'
        colors={['#6571f0']}
        series={humidities}
        labels={times}
      />
    </SearchWrapper>
  );
};

export default HumidityLogsGraph;
