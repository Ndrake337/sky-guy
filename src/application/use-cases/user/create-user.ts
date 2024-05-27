import { User } from '@application/entities/user/user';
import { UsersRepository } from '@application/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { UserAlreadyExists } from '../errors/user-already-exists';

interface CreateUserRequest {
  userName: string;
  name: string;
  password: string;
  role: 'admin' | 'editor' | 'author' | 'regular';
  status: 'active' | 'inactive';
  about?: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { userName, name, password, role, status, about } = request;

    const userFetched = await this.userRepository.findByUsername(userName);

    if (userFetched) {
      throw new UserAlreadyExists();
    }

    const user = new User({
      userName,
      name,
      password,
      role,
      status,
      about,
    });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
