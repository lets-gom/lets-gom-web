import { Reaction } from "./reaction";

export type Post = {
  content: string;
  image: unknown;
  createdTimeStamp: string;
  reactions: Reaction[];
};
