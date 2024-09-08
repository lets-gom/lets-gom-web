import { Badge } from '@/entities/badge';
import { BadgeRepository } from '@/repositories/badge';
import { LetsGomBackend } from '@/utils/api';

export class BadgeAPIRepository implements BadgeRepository {
  async listBadges(): Promise<Badge[]> {
    const endpoint = '/api/badges';
    const { data } = await LetsGomBackend.get(endpoint);
    return data;
  }
}
