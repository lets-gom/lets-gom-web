export type Event = {
  type: EventType;
  createdTimeStamp: string;
};

type EventType =
  | "ROUTINE_STARTED"
  | "ROUTINE_SUCCEEDED"
  | "ROUTINE_FAILED"
  | "TASK_SUCCEEDED"
  | "TASK_FAILED";
