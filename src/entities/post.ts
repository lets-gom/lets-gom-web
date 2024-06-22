import { Reaction } from "@/entities/reaction";

export type Post = {
  content: string;
  image: unknown;
  createdTimeStamp: string;
  reactions: Reaction[];
};
