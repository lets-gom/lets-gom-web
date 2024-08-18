import { Badge } from '@/entities/badge';

export type BadgeRepository = {
  listBadges: () => Promise<Badge[]>;
};
