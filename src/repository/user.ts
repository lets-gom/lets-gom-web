import { User } from "@/entities/user";

export type UserRepository = {
  getUser: () => Promise<User>;
  updateUser: (user: User) => Promise<void>;
  listFriends: () => Promise<User[]>;
  deleteFriend: ({ id }: Pick<User, "id">) => Promise<void>;
};
