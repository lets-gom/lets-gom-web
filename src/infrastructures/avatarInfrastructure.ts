import { Avatar } from '@/entities/avatar';
import { AvatarRepository } from '@/repositories/avatar';
import { LetsGomBackend } from '@/utils/api';

export class AvatarAPIRepository implements AvatarRepository {
  async listAvatars(): Promise<Avatar[]> {
    const endpoint = '/api/avatars';
    const { data } = await LetsGomBackend.get(endpoint);
    return data;
  }
}
