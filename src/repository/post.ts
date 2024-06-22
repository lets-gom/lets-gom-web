import { Post } from "@/entities/post";

export type PostRepository = {
  getPosts: () => Promise<Post[]>;
  postPost: (post: Post) => Promise<void>;
};
