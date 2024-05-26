import { Category } from '@application/entities/category/category';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract listAll(): Promise<Category[]>;
  abstract findById(categoryId: string): Promise<Category | null>;
  abstract modify(category: Category): Promise<void>;
  abstract delete(categoryId: string);
}
