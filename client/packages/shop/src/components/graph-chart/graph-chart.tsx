import { Box } from 'components/box';
import { BoxTitleWrapper, BoxTitle, BoxContent } from 'components/box/Box';
import Chart from 'components/charts/chart';
import moment from 'moment';
import React from 'react';

const GrpahChart = ({
  widgetTitle,
  series,
  icon,
  labels,
  prefix,
  colors,
}: any) => {
  const options = {
    options: {
      chart: {
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'solid',
      },
      stroke: {
        show: false,
        curve: 'smooth',
      },
      legend: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: labels,
        labels: {
          show: true,
          offsetX: -25,
          style: {
            colors: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif",
          },
          // format: 'dd-MM HH:mm'
          formatter: function(value, timestamp, index) {
            return moment(new Date(timestamp)).format("DD/MM hh:mm")
          }
          // datetimeFormatter: {
          //   // month: 'MMM \'yy',
          //   // day: 'dd MMM',
          //   hour: 'HH:mm'
          // }
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
          width: 1,
          tickWidth: 0,
          position: 'back',
          opacity: 1,
          stroke: {
            color: 'transparent',
            width: 0,
            dashArray: 0,
          },
          fill: {
            type: 'solid',
            color: '#F2F3FC',
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        // min: 0,
        // max: 100,
        labels: {
          show: true,
          style: {
            color: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif",
          },
        },
      },
      grid: {
        borderColor: '#F7F7F7',
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        size: 0,
        opacity: 1,
        colors: colors,
        strokeColor: '#fff',
        strokeWidth: 4,
        hover: {
          size: 8,
        },
      },
    },
    series: [
      {
        name: '',
        data: series,
      },
    ],
  };

  return (
    <Box>
      <BoxTitleWrapper>
        <BoxTitle title={widgetTitle} />
      </BoxTitleWrapper>

      <BoxContent style={{ display: 'block', width: '100%' }}>
        <Chart
          options={options.options}
          series={options.series}
          width='100%'
          type='area'
        />
      </BoxContent>
    </Box>
  );
};

export default GrpahChart;
