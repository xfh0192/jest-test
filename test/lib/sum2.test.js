const sum2 = require('../../src/lib/sum2')

test('add 1 + 2 + 3 to equal 6', () => {
  expect(sum2(1, 2, 3)).toBe(6)
})