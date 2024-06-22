import { Avatar } from "@/entities/avatar";

export type AvatarRepository = {
  getAvatars: () => Promise<Avatar[]>;
};
