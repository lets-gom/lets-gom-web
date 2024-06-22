import { Post } from "@/entities/post";

export type PostRepository = {
  listPosts: () => Promise<Post[]>;
  postReaction: (postId: string) => Promise<void>;
};
