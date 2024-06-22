import { Routine } from "@/entities/routine";

export type RoutineRepository = {
  listRoutines: () => Promise<Routine[]>;
  createRoutine: (routine: Routine) => Promise<void>;
  updateRoutine: (routine: Routine) => Promise<void>;
  deleteRoutine: ({ id }: Pick<Routine, "id">) => Promise<void>;
};
