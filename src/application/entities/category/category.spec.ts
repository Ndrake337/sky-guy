import { Category } from './category';

describe('Category', () => {
  it('should be able to create a category', () => {
    const category = new Category({
      name: 'Slice of Life',
      tag: 'slice-of-life',
    });

    expect(category).toBeTruthy();
  });
});
