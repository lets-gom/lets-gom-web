import { User } from "@/entities/user";

export type Reaction = {
  type: ReactionType;
  users?: User[];
};

/** @todo 추후 구체적으로 설정 */
type ReactionType = "like";
