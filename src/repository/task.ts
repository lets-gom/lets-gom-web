import { Task } from "@/entities/task";

export type TaskRepository = {
  updateTask: (task: Task) => Promise<void>;
  deleteTask: ({ id }: Pick<Task, "id">) => Promise<void>;
};
