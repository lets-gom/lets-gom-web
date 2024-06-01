import { Accessory } from "./accessory";

export type Avatar = {
  type: AvatarType;
  emotion: EmotionType;
  accessories: Accessory[];
};

// 추후 추가될 수 있음
type AvatarType = "BEAR";

type EmotionType =
  | "HAPPY"
  | "SAD"
  | "ANGRY"
  | "SURPRISED"
  | "CONFUSED"
  | "EXCITED"
  | "NEUTRAL";
