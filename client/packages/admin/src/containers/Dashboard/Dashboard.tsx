import React, { useEffect, useState } from 'react';
import { withStyle, useStyletron } from 'baseui';
import { Grid, Row, Col as Column } from '../../components/FlexBox/FlexBox';
import RadialBarChart from '../../components/Widgets/RadialBarChart/RadialBarChart';
import LineChart from '../../components/Widgets/LineChart/LineChart';
import ColumnChart from '../../components/Widgets/ColumnChart/ColumnChart';
import DonutChart from '../../components/Widgets/DonutChart/DonutChart';
import GraphChart from '../../components/Widgets/GraphChart/GraphChart';
import GradiantGraphChart from '../../components/Widgets/GradiantGraphChart/GradiantGraphChart';
import MapWidget from '../../components/Widgets/MapWidget/MapWidget';
import StickerCard from '../../components/Widgets/StickerCard/StickerCard';

import { Revenue } from '../../assets/icons/Revenue';
import { Refund } from '../../assets/icons/Refund';
import { CoinIcon } from '../../assets/icons/CoinIcon';
import { CartIconBig } from '../../assets/icons/CartIconBig';
import { UserIcon } from '../../assets/icons/UserIcon';
import { DeliveryIcon } from '../../assets/icons/DeliveryIcon';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import _ from 'lodash';

const GET_CUSTOMERS = gql`
  query getUsers {
    getUsers {
      id
      name
      email
      role
      created_at
      phones{
        number
        id
        is_primary
      }
      workInfo{
        stoppedWorkTime
        startedWorkTime
        ratePerHour
        totalWorkingMinutesPerWeek
        totalSalaryToPayWeekly
        advancedSalaryPaid
        isWorking
        taskRelated
      }
      tasks{
        taskId
        startDate
        finishDate
        plannedDate
        isRepetitived
        completationTimes
        isDone
        description
        workedHours
      }
      logs{
        logDescription
        timestamp
      }
    }
  }
`;


export const GET_ORDERS = gql`
  query AllOrders {
    allOrders {
      id
      order_code
      customer_id
      contact_number
      datetime
      delivery_address
      payment_method
      payment_status
      delivery_method_id
      status
      discount_amount
      sub_total
      total
      delivery_pickup_date
      order_tracking {
        status
        ordering
        is_current
        step_competed
      }
      order_products {
        product_id
        image
        quantity
        recicledQuantity
        unit
        name
        price
      }
    }
  }
`;

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 574px)': {
    marginBottom: '30px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Dashboard = () => {
  const [css] = useStyletron();
  const date30DaysBeforeToday = moment([new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate()]);
  const date60DaysBeforeToday = moment([new Date().getFullYear(), new Date().getMonth() - 2, new Date().getDate()]);
  const [lastMonthTotalRevenue, setLastMonthTotalRevenue] = useState(0);
  const [lastMonthOrders, setLastMonthOrders] = useState(0);
  const [last2MonthTotalRevenue, setLast2MonthTotalRevenue] = useState(0);
  const [last2MonthOrders, setLast2MonthOrders] = useState(0);
    

  const mb30 = css({
    '@media only screen and (max-width: 990px)': {
      marginBottom: '16px',
    },
  });

  const { data: ordersData, error: ordersError } = useQuery(GET_ORDERS);  
  const { data: customersDate, error: customerErrors } = useQuery(GET_CUSTOMERS);

  useEffect(() => {
    setLast2MonthsOrdersRevenueAndTotalQnty();
  }, [ordersData]);


  if (ordersError || customerErrors) {
      const error = customerErrors || ordersError;
      return <div>Error! {error.message}</div>;
  }


  const getLastMonthTotalOrders = () => {
    return ordersData.orders.items.find(order => {
      const lastMonth = moment(order.datetime, 'MM/D/YYYY').day();
      
      
    })
  }

  const setLast2MonthsOrdersRevenueAndTotalQnty = (): any => {
    ordersData?.allOrders.map(order => {
      const orderDate = moment(order.datetime, 'MM/D/YYYY');
      
      const orderIsInsideLast30Days = date30DaysBeforeToday.isBefore(orderDate);
      const orderIsInsideLast60Days = date60DaysBeforeToday.isBefore(orderDate) && orderDate.isBefore(date30DaysBeforeToday);
      
      if (orderIsInsideLast30Days) {
        setLastMonthOrders((prevState) => prevState + 1)
        setLastMonthTotalRevenue((prevState) => prevState + order.total)
      } else if (orderIsInsideLast60Days) {
        setLast2MonthOrders((prevState) => prevState + 1)
        setLast2MonthTotalRevenue((prevState) => prevState + order.total)
      }
    })
  }
  
  const generateWeeklyTotalSalesAndTotalSalesSum = () => {
    let groupsByDate = {};
    let salesByDateWithTotalSelledAndTotalSumByDate = {};
    let totalSelledPerDate = 0;
    let totalSumOfSales = 0;

    ordersData?.allOrders?.forEach((order) => {
      const dayOfWeek = moment(order.datetime, 'MM/D/YYYY').day();
      const date = moment(order.datetime).format('MM/D/YYYY');
      
      // if (dayOfMonth >=1 ) {
      if (dayOfWeek !== 1) {
        totalSelledPerDate += order.total;  
        totalSumOfSales += 1;
        salesByDateWithTotalSelledAndTotalSumByDate[date] = { totalSelledPerDate: totalSelledPerDate, dailyTotalSalesByDate: totalSumOfSales };
      } else {
        groupsByDate[date] = new Array();
        salesByDateWithTotalSelledAndTotalSumByDate[date] = new Array()
        totalSumOfSales = 1;
        totalSelledPerDate = order.total;
      }
    });

    return salesByDateWithTotalSelledAndTotalSumByDate;
    }
  
  const generateDailyTotalSalesAndTotalSalesSum = () => {
    let groupsByDate = {};
    let salesByDateWithTotalSelledAndTotalSumByDate = {};
    let totalSelledPerDate = 0;
    let totalSumOfSales = 0;

    ordersData?.allOrders?.forEach((order) => {
      const date = moment(order.datetime).format('MM/D/YYYY');
      
      if (date in groupsByDate) {
        totalSelledPerDate += order.total;  
        totalSumOfSales += 1;
        salesByDateWithTotalSelledAndTotalSumByDate[date] = { totalSelledPerDate: totalSelledPerDate, dailyTotalSalesByDate: totalSumOfSales };
      } else {
        groupsByDate[date] = new Array();
        salesByDateWithTotalSelledAndTotalSumByDate[date] = new Array()
        totalSumOfSales = 1;
        totalSelledPerDate = order.total;
      }
    });

    return salesByDateWithTotalSelledAndTotalSumByDate;
    }

  const dailyTotalSalesAndTotalSalesSum = ordersData?.allOrders?.length && generateDailyTotalSalesAndTotalSalesSum();
  const weeklyTotalSalesAndTotalSalesSum = ordersData?.allOrders?.length && generateWeeklyTotalSalesAndTotalSalesSum();

// weekly aproach
  let salesDates = [];
  let salesTotalAmounts = [];
  if (weeklyTotalSalesAndTotalSalesSum) { 
    Object.keys(weeklyTotalSalesAndTotalSalesSum).forEach(function (key, index) {
        salesDates.push(key)
        salesTotalAmounts.push(weeklyTotalSalesAndTotalSalesSum[key].dailyTotalSalesByDate)
    });
    // console.log(weeklyTotalSalesAndTotalSalesSum)
  }

 // dayly aproach
  // let salesDates = [];
  // let salesTotalAmounts = [];
  // if (dailyTotalSalesAndTotalSalesSum) { 
  //   Object.keys(dailyTotalSalesAndTotalSalesSum).forEach(function (key, index) {
  //       salesDates.push(key)
  //       salesTotalAmounts.push(dailyTotalSalesAndTotalSalesSum[key].dailyTotalSalesByDate)
  //   });
  //   console.log(salesTotalAmounts.reverse())
  // }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={5} lg={4} sm={6}>
          <RadialBarChart
            widgetTitle='Target'
            series={[43, 75]}
            label={['$1,342', '$8,908']}
            colors={['#03D3B5', '#666d92']}
            helperText={['Weekly Targets', 'Monthly Targets']}
          />
        </Col>
        <Col md={7} lg={8} sm={6}>
          <LineChart
            widgetTitle='User Hit Rate'
            color={['#03D3B5']}
            categories={salesDates.sort()}
            seriesName='Unique visitors'
            series={salesTotalAmounts}
          />
        </Col>
      </Row>

      <Row>
        <Col lg={3} sm={6} xs={12} className={mb30}>
          <StickerCard
            title='Total Revenue'
            subtitle='(Last 30 Days)'
            icon={<CoinIcon />}
            price={`$${lastMonthTotalRevenue.toLocaleString()}`}
            indicator={last2MonthTotalRevenue > lastMonthTotalRevenue ? 'down' : 'up'}
            indicatorText='Revenue up'
            note='(previous 30 days)'
            link='#'
            linkText='Full Details'
          />
        </Col>
        <Col lg={3} sm={6} xs={12} className={mb30}>
          <StickerCard
            title='Total Order'
            subtitle='(Last 30 Days)'
            icon={<CartIconBig />}
            price={`${lastMonthOrders.toLocaleString()}`}
            indicator={last2MonthTotalRevenue > lastMonthTotalRevenue ? 'down' : 'up'}
            indicatorText='Order down'
            note='(previous 30 days)'
            link='#'
            linkText='Full Details'
          />
        </Col>
        <Col lg={3} sm={6} xs={12}>
          <StickerCard
            title='New Customer'
            subtitle='(Last 30 Days)'
            icon={<UserIcon />}
            price='5,678'
            indicator='up'
            indicatorText='Customer up'
            note='(previous 30 days)'
            link='#'
            linkText='Full Details'
          />
        </Col>
        <Col lg={3} sm={6} xs={12}>
          <StickerCard
            title='Total Delivery'
            subtitle='(Last 30 Days)'
            icon={<DeliveryIcon />}
            price='78,000'
            indicator='up'
            indicatorText='Delivery up'
            note='(previous 30 days)'
            link='#'
            linkText='Full Details'
          />
        </Col>
      </Row>

      <Row>
        <Col md={7} lg={8}>
          <GraphChart
            widgetTitle='Sales From Social Media'
            colors={['#03D3B5']}
            series={salesTotalAmounts}
            labels={salesDates}
          />
        </Col>

        <Col md={5} lg={4}>
          <DonutChart
            widgetTitle='Target'
            series={[30634, 6340]}
            labels={['Todays Revenue', 'Todays Refund']}
            colors={['#03D3B5', '#666d92']}
            helperText={['Weekly Targets', 'Monthly Targets']}
            icon={[<Revenue />, <Refund />]}
            prefix='$'
          />
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <ColumnChart
            widgetTitle='Sale History'
            colors={['#03D3B5']}
            prefix='$'
            totalValue='1,92,564'
            position='up'
            percentage='1.38%'
            text='More than last year'
            series={[44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65]}
            categories={[
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={4}>
          <GradiantGraphChart
            colors={['#03D3B5']}
            series={[25, 30, 14, 30, 55, 60, 48]}
            labels={[
              '2019-05-12',
              '2019-05-13',
              '2019-05-14',
              '2019-05-15',
              '2019-05-16',
              '2019-05-17',
              '2019-05-18',
            ]}
            topRowTitle='Performance'
            bottomRowData={[
              {
                label: 'Last Week Profit',
                valueText: '+29.7%',
                value: 29.7,
                color: '#03D3B5',
              },
              {
                label: 'This Week Losses',
                valueText: '-53.4%',
                value: 53.4,
                color: '#FC747A',
              },
            ]}
          />
        </Col>

        <Col md={7} lg={8}>
          <MapWidget
            data={[
              {
                name: 'Williamburgs',
                value: 69922,
                color: '#2170FF',
              },
              {
                name: 'Brooklyn',
                value: 41953,
                color: '#29CAE4',
              },
              {
                name: 'New York',
                value: 23307,
                color: '#666D92',
              },
              {
                name: 'Jersey City',
                value: 20200,
                color: '#03D3B5',
              },
            ]}
            totalText='Total Client'
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Dashboard;
