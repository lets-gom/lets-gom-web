import { Routine } from '@/entities/routine';
import { RoutineRepository } from '@/repositories/routine';
import { LetsGomBackend } from '@/utils/api';

export class RoutineInfrastructure implements RoutineRepository {
  async listRoutines(): Promise<Routine[]> {
    const endpoint = '/api/routines';
    const { data } = await LetsGomBackend.get<Routine[]>(endpoint);
    return data;
  }

  async createRoutine(routine: Omit<Routine, 'id'>): Promise<void> {
    const endpoint = '/api/routines';
    await LetsGomBackend.post(endpoint, routine);
  }

  async updateRoutine(routine: Routine): Promise<void> {
    const endpoint = `/api/routines/${routine.id}`;
    await LetsGomBackend.put(endpoint, routine);
  }

  async deleteRoutine({ id }: Pick<Routine, 'id'>): Promise<void> {
    const endpoint = `/api/routines/${id}`;
    await LetsGomBackend.delete(endpoint);
  }
}
