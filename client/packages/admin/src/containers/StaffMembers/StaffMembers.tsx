import React, { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { withStyle } from 'baseui';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ActionWrapper from "./ActionWrapper";

import { Plus } from '../../assets/icons/PlusMinus';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Wrapper, Header, Heading } from '../../components/WrapperStyle';

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
} from './StaffMembers.style';
import NoResult from '../../components/NoResult/NoResult';
import { Roles } from '../../settings/constants';

// query getStaffs($role: String, $searchBy: String) {
//   getStaffs(role: $role, searchBy: $searchBy) {

const GET_STAFFS = gql`
  query staffs {
    getStaffs {
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

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px)': {
    alignItems: 'center',
  },
}));


const roleSelectOptions = [
  { value: Roles.MANAGER, label: 'Manager' },
  { value: Roles.MEMBER, label: 'Member' },
  { value: Roles.DELIVERY_BOY, label: 'Delivery boy' },
  { value: Roles.CLIENT, label: 'Client' },
  { value: Roles.GROWER, label: 'Grower' },
  { value: Roles.STAFF, label: 'Staff' },
];

export default function StaffMembers() {
  const dispatch = useDrawerDispatch();
  const [offset, setOffset] = useState(0);
  const openDrawer = useCallback(
    () =>
      dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'STAFF_MEMBER_FORM' }),
    [dispatch]
  );
  const [role, setRole] = useState([]);
  const [search, setSearch] = useState('');

  const { data, error, refetch } = useQuery(GET_STAFFS);
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  function handleCategory({ value }) {
    setRole(value);
    if (value.length) {
      refetch({ role: value[0].value, searchBy: search });
    } else {
      refetch({
        role: null,
      });
    }
  }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ searchBy: value });
  }

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header
            style={{
              marginBottom: 40,
              boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
            }}
          >
            <Col md={3} xs={12}>
              <Heading>Staff Members</Heading>
            </Col>

            <Col md={9} xs={12}>
              <Row>
                <Col md={3} xs={12}>
                  <Select
                    options={roleSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Role"
                    value={role}
                    searchable={false}
                    onChange={handleCategory}
                  />
                </Col>

                <Col md={5} xs={12}>
                  <Input
                    value={search}
                    placeholder="Ex: Quick Search By Name"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={4} xs={12}>
                  <Button
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: '100%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          borderBottomRightRadius: '3px',
                        }),
                      },
                    }}
                  >
                    Add Members
                  </Button>
                </Col>
              </Row>
            </Col>
          </Header>

          <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
            <TableWrapper>
             <StyledTable $gridTemplateColumns="minmax(150px, auto) minmax(75px, auto) minmax(75px, auto) minmax(75px, auto) minmax(75px, auto) minmax(150px, auto) minmax(150px, max-content) minmax(75px, auto)">
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Role</StyledHeadCell>
                <StyledHeadCell>Is Working</StyledHeadCell>
                <StyledHeadCell>Hourly rate</StyledHeadCell>
                <StyledHeadCell>Weekly Salary</StyledHeadCell>
                <StyledHeadCell>Pending Tasks</StyledHeadCell>
                <StyledHeadCell>Working Hours</StyledHeadCell>
                <StyledHeadCell>Action</StyledHeadCell>
  
                {data ? (
                  data.getStaffs.length ? (
                    data.getStaffs
                      .map((item, index) => (
                        <React.Fragment key={index}>
                          <StyledBodyCell>{item.name || '-'}</StyledBodyCell>
                          <StyledBodyCell>{item.role || '-'}</StyledBodyCell>
                          <StyledBodyCell>{item.workInfo?.isWorking?.toString()?.toUpperCase() || '-'}</StyledBodyCell>
                          <StyledBodyCell>${item.workInfo?.ratePerHour || '0'}</StyledBodyCell>
                          <StyledBodyCell>${item.workInfo?.totalSalaryToPayWeekly || '0'}</StyledBodyCell>
                          <StyledBodyCell>{item.tasks?.filter((task) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false)).length}</StyledBodyCell>
                          <StyledBodyCell>{item.workInfo?.totalWorkingMinutesPerWeek ? `${item.workInfo?.totalWorkingMinutesPerWeek / 60 | 0}:${Number(item.workInfo?.totalWorkingMinutesPerWeek % 60 | 0) >= 9 ? item.workInfo?.totalWorkingMinutesPerWeek % 60 | 0 : '0' + item.workInfo?.totalWorkingMinutesPerWeek % 60} hs` : '0'}</StyledBodyCell>
                          <StyledBodyCell>
                            <ActionWrapper itemsOffset={offset} itemData={item}/>
                          </StyledBodyCell>
                        </React.Fragment>
                      ))
                  ) : (
                    <NoResult
                      hideButton={false}
                      style={{
                        gridColumnStart: '1',
                        gridColumnEnd: 'one',
                      }}
                    />
                  )
                ) : null}
              </StyledTable>
            </TableWrapper>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
}
