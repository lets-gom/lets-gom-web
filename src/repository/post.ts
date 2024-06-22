import { Post } from "@/entities/post";

export type PostRepository = {
  getPosts: () => Promise<Post[]>;
  postReaction: (postId: string) => Promise<void>;
};
