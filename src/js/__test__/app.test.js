import chechApp from '../app';

test('must return the received value', () => {
  expect(chechApp('A')).toBe('A');
});
