import { Badge } from '@/entities/badge';
import { BadgeRepository } from '@/repositories/badge';
import { LetsGomBackend } from '@/utils/api';

export class BadgeInfrastructure implements BadgeRepository {
  async listBadges(): Promise<Badge[]> {
    const endpoint = '/api/badges';
    const { data } = await LetsGomBackend.get<Badge[]>(endpoint);
    return data;
  }
}
