import { Task } from "@/entities/task";

export type TaskRepository = {
  getTasks: () => Promise<Task[]>;
  deleteTask: (taskId: string) => Promise<void>;
};
