import { Task } from "@/entities/task";

export type TaskRepository = {
  updateTask: (task: Omit<Task, "id">) => Promise<void>;
  deleteTask: ({ id }: Pick<Task, "id">) => Promise<void>;
};
