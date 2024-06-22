import { User } from "@/entities/user";

export type UserRepository = {
  getUser: () => Promise<User>;
  updateUser: (userId: string) => Promise<void>;
  listFriends: () => Promise<User[]>;
  deleteFriend: (friendId: string) => Promise<void>;
};
