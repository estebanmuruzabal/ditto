import gql from 'graphql-tag';

export const GET_LOGGED_IN_USER = gql`
query GetUser{
  getUser{
    id
    name
    email
    created_at
    role
    plants {
      plantId
      name
      soil_humidity_1
      soil_humidity_2
      light
      humidity
      tempeture
      isRelayOneOn
      isRelayTwoOn
      isRelayThirdOn
      isRelayFourthOn
      timestamp
      timeZone
      alarm
      alarm_timestamp
      offline_notification
      sensors {
        reading
        name
        whatsappWarningsOn
        minWarning
        maxWarning
        reading
        mode
        relayOneAutomatedStartedTime
        relayOneAutomatedTimeToRun
        relayTwoAutomatedStartedTime
        relayTwoAutomatedTimeToRun
        relayOneIdRelated
        relayOneWorking
        relayTwoIdRelated
        relayTwoWorking
        settingType
        logs {
          timestamp
          reading
          started
          finished
        }
        scheduledOnTimes {
          daysToRepeat
          startTime
          endTime
          enabled
          smartLight
        }
      }
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
      timestamp
    }
  }
}
`;

export const GET_LOGGED_IN_USER_SETTINGS = gql`
query GetUser{
  getUser{
    id
    name
    plants {
      plantId
      timestamp
      timeZone
      sensors {
        reading
        settingType
      }
    }
  }
}
`;

