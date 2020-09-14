'use strict'

const { test } = use('Test/Suite')('Example')
const loginValidator = require('../../service/LoginValidator')

test('should receive object as first parameter', async ({ assert }) => {
  const validatedData = await loginValidator({
    username: "John",
    password: "12345687"
  })
  assert.isOk(validatedData)

  const validatedData2 = await loginValidator("John", "pass")
  assert.isNotOk(validatedData2)

})


