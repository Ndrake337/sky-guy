import { Post } from './post';
import { User } from '../user/user';

describe('Post', () => {
  it('should be able to create a post', () => {
    const user = new User({
      userName: 'teste',
      name: 'Usuário Teste',
      password: '123',
      role: 'regular',
      status: 'active',
    });

    const post = new Post({
      publicId: 1,
      title: 'First Post',
      summary: 'This is the summary of the first post.',
      author: user,
      content: 'This is the content of the first post.',
      isPublished: true,
    });

    expect(post).toBeTruthy();
  });
});
