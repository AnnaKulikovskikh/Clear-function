import healthMagic from '../app';

test('health', () => {
  //const hero = {name: 'magic', health: 51};
  expect(healthMagic({ name: 'magic', health: 51 })).toBe('healthy');
  expect(healthMagic({ name: 'magic', health: 50 })).toBe('wounded');
  expect(healthMagic({ name: 'magic', health: 15 })).toBe('critical');
});

//почему-то не работет. Пишет Cannot read property 'length' of undefined. Почему не поняла.
// test.each([
//     [51, 'healthy' ],
//     [50, 'wounded'],
//     [15, 'critical'],
// ])('health-status'),(points, expected) => {
//     const hero = {name: 'magic', health: points};
//     excpect(healthMagic(hero)).toBe(excpected);
// }
