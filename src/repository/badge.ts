import { Badge } from "@/entities/badge";

export type BadgeRepository = {
  getBadges: () => Promise<Badge[]>;
};
