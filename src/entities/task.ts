export type Task = {
  state: TaskState;
  date: string;
};

type TaskState = "NOT_STARTED" | "SUCCEEDED" | "FAILED";
