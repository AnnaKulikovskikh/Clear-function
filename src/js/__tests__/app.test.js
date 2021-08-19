import healthMagic from '../app';

test.each([
  [51, 'healthy'],
  [50, 'wounded'],
  [15, 'critical'],
])('health-status', (points, expected) => {
  const hero = { name: 'magic', health: points };
  expect(healthMagic(hero)).toBe(expected);
});
