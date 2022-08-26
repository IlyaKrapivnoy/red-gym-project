import * as paths from '../../paths';

test('counts of paths', () => {
  expect(Object.keys(paths)).toHaveLength(4);
});

test('validate paths', () => {
  expect(paths).toHaveProperty('HOME', '/');
  expect(paths).toHaveProperty('BLOG', '/blog');
  expect(paths).toHaveProperty('VISITORS', '/visitors');
  expect(paths).toHaveProperty('CONTACTS', '/contacts');
});
