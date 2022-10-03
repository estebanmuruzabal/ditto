import gql from 'graphql-tag';

export const GET_LOGGED_IN_USER = gql`
query GetUser{
  getUser{
    id
    name
    email
    created_at
    role
    plants{
      id
      name
    }
    delivery_address{
      id
      title
      address
      location
      instructions
      is_primary
    }
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

