import { User } from "@/entities/user";

export type UserRepository = {
  getUser: () => Promise<User>;
  updateUser: (userId: string) => Promise<void>;
  getFriends: () => Promise<User[]>;
  deleteFriend: (friendId: string) => Promise<void>;
};
