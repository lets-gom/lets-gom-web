export type Accessory = {
  type: AccessoryType;
  source: string;
};

/** @todo 추후 구체적으로 설정 */
type AccessoryType = 'GLASSES' | 'DUMBBELL' | 'BOOK';
