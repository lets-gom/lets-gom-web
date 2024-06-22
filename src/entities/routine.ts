import { Task } from '@/entities/task';

export type Routine = {
  category: RoutineCategory;
  name: string;
  state: RoutineState;
  startDate: string;
  endDate?: string;
  startTime: string;
  duration?: number;
  schedule: RoutineSchedule;
  tasks: Task[];
};

type RoutineCategory = 'HEALTH' | 'MONEY' | 'STUDY';

type RoutineState = 'NOT_STARTED' | 'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED';

type RoutineSchedule = DailySchedule | WeeklySchedule | MonthlySchedule;

interface DailySchedule {
  type: 'DAILY';
  days?: never;
}

interface WeeklySchedule {
  type: 'WEEKLY';
  days: WeeklyType[];
}

interface MonthlySchedule {
  type: 'MONTHLY';
  days: MonthlyType[];
}

type WeeklyType = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

type MonthlyType = number | 'MID' | 'END';
