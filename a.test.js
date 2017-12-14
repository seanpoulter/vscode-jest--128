const alwaysBlue = require('@/module').alwaysBlue

it('should always be blue', () => {
  expect(alwaysBlue()).toBe('blue')
})