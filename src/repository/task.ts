import { Task } from "@/entities/task";

export type TaskRepository = {
  updateTask: (taskId: string, task: Task) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
};
