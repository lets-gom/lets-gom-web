import { Post } from "@/entities/post";

export type PostRepository = {
  listPosts: () => Promise<Post[]>;
  createReaction: ({ id }: Pick<Post, "id">) => Promise<void>;
};
