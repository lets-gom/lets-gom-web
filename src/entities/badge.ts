export type Badge = {
  id: number;
  type: BadgeType;
  name: string;
  source: string;
};

/** @todo 추후 구체적으로 설정 */
type BadgeType = "HEALTH" | "MONEY" | "STUDY";
