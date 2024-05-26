import { Post } from '@application/entities/post/post';

export abstract class PostsRepository {
  abstract create(post: Post): Promise<void>;

  // abstract findById(Id: string; type: "Post" | "Category" | "Author"):
  abstract findById(postId: string): Promise<Post | null>;
  abstract findByAuthor(authorId: string): Promise<Post | Post[] | null>;
  abstract findByCategory(categoryId: string): Promise<Post | Post[] | null>;

  abstract listAll(): Promise<Post[]>;
  abstract modify(Post: Post): Promise<void>;
  abstract delete(postId): Promise<void>;
}
