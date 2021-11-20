import demo from '../app';

test('must return the received value', () => {
  expect(demo('A')).toBe('A');
});
