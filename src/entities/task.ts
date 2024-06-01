export type Task = {
  state: StateType;
  date: string;
};

export type StateType = "NOT_STARTED" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
