export type Event = {
  id: number;
  type: EventType;
  createdTimeStamp: string;
};

type EventType =
  | 'ROUTINE_STARTED'
  | 'ROUTINE_SUCCEEDED'
  | 'ROUTINE_FAILED'
  | 'TASK_SUCCEEDED'
  | 'TASK_FAILED';
