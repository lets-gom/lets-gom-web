import { Task } from '@/entities/task';
import { TaskRepository } from '@/repositories/task';
import { LetsGomBackend } from '@/utils/api';

export class TaskInfrastructure implements TaskRepository {
  async updateTask(task: Task): Promise<void> {
    const endpoint = `/api/tasks/${task.id}`;
    await LetsGomBackend.put(endpoint, task);
  }

  async deleteTask({ id }: Pick<Task, 'id'>): Promise<void> {
    const endpoint = `/api/tasks/${id}`;
    await LetsGomBackend.delete(endpoint);
  }
}
