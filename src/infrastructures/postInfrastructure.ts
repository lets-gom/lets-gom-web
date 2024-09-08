import { Post } from '@/entities/post';
import { PostRepository } from '@/repositories/post';
import { LetsGomBackend } from '@/utils/api';

export class PostInfrastructure implements PostRepository {
  async listPosts(): Promise<Post[]> {
    const endpoint = '/api/posts';
    const { data } = await LetsGomBackend.get<Post[]>(endpoint);
    return data;
  }

  async createReaction(post: Omit<Post, 'id'>): Promise<void> {
    const endpoint = '/api/posts/reactions';
    await LetsGomBackend.post(endpoint, post);
  }
}
