'use strict'

const { test } = use('Test/Suite')('Login Validator')
const loginValidator = require('../../service/LoginValidator')

test('should return error when pass incorrect data', 
async ({ assert }) => {
  
  const validatedData = await loginValidator({
    username: "JohnDoe123",
    password: "asdfrtfw"
  })
  assert.isOk(validatedData)

  const validatedData2 = await loginValidator(
    "JohnDoe123", 
    "1234"
    )
  assert.isNotOk(validatedData2)
})

