import { User } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      userName: 'teste',
      name: 'Usuário Teste',
      password: '123',
      role: 'regular',
      status: 'active',
    });

    expect(user).toBeTruthy();
  });
});
