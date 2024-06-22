import { Accessory } from '@/entities/accessory';

export type Avatar = {
  type: AvatarType;
  emotion: AvatarEmotion;
  accessories: Accessory[];
};

/** @todo 추후 구체적으로 설정 */
type AvatarType = 'BEAR';

type AvatarEmotion =
  | 'HAPPY'
  | 'SAD'
  | 'ANGRY'
  | 'SURPRISED'
  | 'CONFUSED'
  | 'EXCITED'
  | 'NEUTRAL';
