import { Reaction } from "@/entities/reaction";

export type Post = {
  id: number;
  content: string;
  image: unknown;
  createdTimeStamp: string;
  reactions: Reaction[];
};
