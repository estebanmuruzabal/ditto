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
        soilHumidity1
        soilHumidity2
        light
        airHumidity
        tempeture
        isRelayOneOn
        isRelayTwoOn
        isRelayThirdOn
        isRelayFourthOn
        soilHumiditySettings1 {
            name
            sendWhatsappWarnings
            minWarning
            maxWarning
            mode
            relayOneAutomatedStartedTime
            relayOneAutomatedTimeToRun
            relayTwoAutomatedStartedTime
            relayTwoAutomatedTimeToRun
            relayOneIdRelated
            relayOneWorking
            relayTwoIdRelated
            relayTwoWorking
            logs {
              timestamp
              humidity
              startedWatering
              finishedWatering
            }
            scheduledOnTimes {
              daysToRepeat
              startTime
              endTime
              enabled
              smartLight
            } 
        }
        soilHumiditySettings2 {
            name
            sendWhatsappWarnings
            minWarning
            maxWarning
            mode
            relayOneAutomatedStartedTime
            relayOneAutomatedTimeToRun
            relayTwoAutomatedStartedTime
            relayTwoAutomatedTimeToRun
            relayOneIdRelated
            relayOneWorking
            relayTwoIdRelated
            relayTwoWorking
            logs {
              timestamp
              humidity
              startedWatering
              finishedWatering
            }
            scheduledOnTimes {
              daysToRepeat
              startTime
              endTime
              enabled
              smartLight
            }
        }
        lightSettings {
          name
          sendWhatsappWarnings
          minWarning
          maxWarning
          mode
          relayOneAutomatedStartedTime
          relayOneAutomatedTimeToRun
          relayTwoAutomatedStartedTime
          relayTwoAutomatedTimeToRun
          relayOneIdRelated
          relayOneWorking
          relayTwoIdRelated
          relayTwoWorking
          logs {
            logDescription
            timestamp
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
      logDescription
      timestamp
    }
  }
}
`;

