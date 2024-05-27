import { User } from '@application/entities/user/user';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      status: user.status,
      role: user.role,
    };
  }
}
