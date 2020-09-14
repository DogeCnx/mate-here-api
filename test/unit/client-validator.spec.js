'use strict'

const { test } = use('Test/Suite')('Client Validator')
const clientValidator = require('../../service/RegisterValidator')

test('should receive object as first parameter', 
async ({ assert }) => {
  
  const validatedData = await loginValidator({
    username: "12345678 ",
    password: "asdfrtfw"
  })
  assert.isNotOk(validatedData.error)
})