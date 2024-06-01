import { Task } from "./task";
import { StateType } from "./task";

export type Routine = {
  category: CategoryType;
  name: string;
  state: StateType;
  startDate: string;
  endDate?: string;
  startTime: string;
  duration?: number;
  schedule: ScheduleType;
  tasks: Task[];
};

type CategoryType = "HEALTH" | "MONEY" | "STUDY";

type ScheduleType = "DAILY" | WeeklyType | MonthlyType;

type WeeklyType = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

type MonthlyType = number | "MID" | "END";
