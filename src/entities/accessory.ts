export type Accessory = {
  id: number;
  type: AccessoryType;
  source: string;
};

/** @todo 추후 구체적으로 설정 */
type AccessoryType = "GLASSES" | "DUMBBELL" | "BOOK";
