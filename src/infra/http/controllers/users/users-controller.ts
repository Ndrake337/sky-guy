import { CreateUser } from '@application/use-cases/user/create-user';
import { createUserBody } from '@infra/http/dtos/create-user-body';
import { UserViewModel } from '@infra/http/view-models/user-view-model';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Post()
  async create(@Body() body: createUserBody) {
    const { userName, password, name, role, status, about } = body;

    const { user } = await this.createUser.execute({
      userName,
      password,
      name,
      role,
      status,
      about,
    });

    return {
      user: UserViewModel.toHTTP(user),
    };
  }
}
