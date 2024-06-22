import { Post } from "@/entities/post";

export type PostRepository = {
  listPosts: () => Promise<Post[]>;
  createReaction: (post: Omit<Post, "id">) => Promise<void>;
};
