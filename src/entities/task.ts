export type Task = {
  id: number;
  state: TaskState;
  date: string;
};

type TaskState = "NOT_STARTED" | "SUCCEEDED" | "FAILED";