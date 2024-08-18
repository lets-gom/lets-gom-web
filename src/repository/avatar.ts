import { Avatar } from '@/entities/avatar';

export type AvatarRepository = {
  listAvatars: () => Promise<Avatar[]>;
};
