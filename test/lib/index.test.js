const get = require('../../src/lib/index')

const setupServer = require('../server')

beforeAll(() => {
  return setupServer()
})

test('get', async () => {
  let res = await get()
  expect(res.data).toBe('hi')
})