import { Post } from "@/entities/post";

export type PostRepository = {
  listPosts: () => Promise<Post[]>;
  createReaction: (postId: string) => Promise<void>;
};
