import { Avatar } from '@/entities/avatar';
import { AvatarRepository } from '@/repositories/avatar';
import { LetsGomBackend } from '@/utils/api';

export class AvatarInfrastructure implements AvatarRepository {
  async listAvatars(): Promise<Avatar[]> {
    const endpoint = '/api/avatars';
    const { data } = await LetsGomBackend.get<Avatar[]>(endpoint);
    return data;
  }
}
