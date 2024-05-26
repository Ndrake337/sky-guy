import { User } from '@application/entities/user/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(userId: string): Promise<User | null>;
  abstract listAll(): Promise<User[]>;
  abstract modify(user: User): Promise<void>;
  abstract remove(userId: string);
}
