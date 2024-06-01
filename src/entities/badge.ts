export type Badge = {
  type: BadgeType;
  name: string;
  source: string;
};

// 추후 구체적으로 설정
type BadgeType = "HEALTH" | "MONEY" | "STUDY";
