import { User } from '@/entities/user';
import { UserRepository } from '@/repositories/user';
import { LetsGomBackend } from '@/utils/api';

export class UserAPIRepository implements UserRepository {
  async getUser(): Promise<User> {
    const endpoint = '/api/users/me';
    const { data } = await LetsGomBackend.get(endpoint);
    return data;
  }

  async updateUser(user: User): Promise<void> {
    const endpoint = '/api/users/me';
    await LetsGomBackend.put(endpoint, user);
  }

  async listFriends(): Promise<User[]> {
    const endpoint = '/api/users/me/friends';
    const { data } = await LetsGomBackend.get(endpoint);
    return data;
  }

  async deleteFriend({ id }: Pick<User, 'id'>): Promise<void> {
    const endpoint = `/api/users/me/friends/${id}`;
    await LetsGomBackend.delete(endpoint);
  }
}
