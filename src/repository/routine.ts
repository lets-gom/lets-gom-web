import { Routine } from "@/entities/routine";

export type RoutineRepository = {
  getRoutines: () => Promise<Routine[]>;
  postRoutine: (routine: Routine) => Promise<void>;
  updateRoutine: (routine: Routine) => Promise<void>;
  deleteRoutine: (routineId: string) => Promise<void>;
};
