import React, { useState, useEffect, useRef } from 'react';
import { SearchBox } from 'components/search-box/search-box';
import Router,{ useRouter } from 'next/router';
import {SearchWrapper, SearchResultWrap} from './humidity-logs-graph.style';
import { ILogs } from 'utils/types';
import LineChart from 'components/line-chart/line-chart';
import GraphChart from 'components/graph-chart/graph-chart';

interface Props {
  data?: ILogs;
}

const HumidityLogsGraph: React.FC<Props> = ({ data, ...props  }) => {
  JSON.stringify(data)
  let humidities = [];
  let times = [];
  Object.keys(data).forEach(function (key, index) {
    if (data[key].reading >= 0 || data[key].reading <= 100) {
      humidities.push(data[key].reading);
      times.push(data[key].timestamp);
    }
    // let trimed = data[key]?.timestamp?.substring(0, data[key].timestamp.length - 6);

    
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
