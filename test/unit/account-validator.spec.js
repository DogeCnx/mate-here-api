'use strict'

const { test } = use('Test/Suite')('Login Validator')
const loginValidator = require('../../service/LoginValidator')

test('should receive object as first parameter', 
async ({ assert }) => {
  
  const validatedData = await loginValidator({
    username: " ",
    password: "asdfrtfw"
  })
  assert.isArray(validatedData.error)
})

test('should return error when pass incorrect data', 
async ({ assert }) => {
  
  const validatedData = await loginValidator({
    username: " ",
    password: " "
  })
  assert.isArray(validatedData.error)
})

test('should return only one error if single incorrect data is passed', async ({ assert }) => {
  const validatedData = await loginValidator({
    username: "Johnlazy",
    password: "Doe"
  })
  assert.equal(validatedData.error.length, 1)
})

test('should return undefined when pass correct data', async ({ assert }) => {
  const validatedData = await loginValidator({
    username: "asddasdadd",
    password: "467854545"
  })

  assert.equal(validatedData.error, undefined)
})
