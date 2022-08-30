import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!, 
    $name: String!,
    $email: String!,
  ) { updateUserNameAndEmail(
      id: $id, 
      name: $name,
      email: $email,
    ) {
    status
      message
    }
  }
`;

export const UPDATE_USER_WORK_INFO = gql`
  mutation UpdateUserWorkInfo(
    $id: ID!, 
    $isWorking: Boolean,
    $startedWorkTime: String,
    $stoppedWorkTime: String,
    $ratePerHour: Int,
    $logDescription: String,
    $totalWorkingMinutesPerWeek: Int,
    $totalSalaryToPayWeekly: Int,
    $advancedSalaryPaid: Int,
    $taskRelated: String,
    $role: String
  ) { updateUserWorkInfo(
      id: $id, 
      isWorking: $isWorking,
      startedWorkTime: $startedWorkTime,
      stoppedWorkTime: $stoppedWorkTime,
      ratePerHour: $ratePerHour,
      logDescription: $logDescription,
      totalWorkingMinutesPerWeek: $totalWorkingMinutesPerWeek,
      totalSalaryToPayWeekly: $totalSalaryToPayWeekly,
      advancedSalaryPaid: $advancedSalaryPaid,
      taskRelated: $taskRelated,
      role: $role
    ) {
    status
      message
    }
  }
`;

export const UPDATE_USER_LOGS = gql`
  mutation UpdateUserLogs(
    $id: ID!, 
    $logs: any,
  ) { updateUserLogs(
      id: $id, 
      logs: $logs,
    ) {
    status
      message
    }
  }
`;

export const UPDATE_USER_TODO_TASKS = gql`
  mutation UpdateUserTasks(
    $id: ID!, 
    $taskId: String,
    $description: String,
    $startDate: String,
    $finishDate: String,
    $plannedDate: String,
    $isRepetitived: Boolean,
    $completationTimes: String,
    $workedHours: String,
    $isDone: Boolean
  ) { updateUserTasks(
      id: $id, 
      taskId: $taskId,
      description: $description,
      startDate: $startDate,
      finishDate: $finishDate,
      plannedDate: $plannedDate,
      isRepetitived: $isRepetitived,
      completationTimes: $completationTimes,
      workedHours: $workedHours,
      isDone: $isDone
    ) {
    status
      message
    }
  }
`;

