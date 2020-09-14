'use strict'

const { test } = use('Test/Suite')('Client Validator')
const clientValidator = require('../../service/RegisterValidator')

test('should receive object as first parameter', 
async ({ assert }) => {
  
  const validatedData = await clientValidator({
    first_name: " ",
    last_name: "Kornsanka",
    email: "assa@mail.com",
    telephone_number: "1234567890",
    line_id: "asdada12",
    facebook_name: "Narisza Kornsanka",
    date_of_birth: "2001-03-15",
    gender: "asdsad",
    profile_picture: "112d1212sdfsdf54sdf5sa",
    account_id: "1"

  })
  assert.isOk(validatedData.error)
})

test('should show error when pass incorrect data', 
async ({ assert }) => {
  
  const validatedData = await clientValidator({
    first_name: "Narisza",
    last_name: "Kornsanka",
    email: "assa@mail.com",
    telephone_number: "1234567890",
    line_id: "asdada12",
    facebook_name: "Narisza Kornsanka",
    date_of_birth: "2001-03-15",
    gender: "asdsad",
    profile_picture: "112d1212sdfsdf54sdf5sa",
    account_id: "1"

  })
  assert.isNotOk(validatedData.error)
})

test('should return only one error if single incorrect data is passed', 
async ({ assert }) => {
  
  const validatedData = await clientValidator({
    first_name: "Narisza",
    last_name: "Kornsanka",
    email: "wrong email",
    telephone_number: "1234567890",
    line_id: "asdada12",
    facebook_name: "Narisza Kornsanka",
    date_of_birth: "2001-03-15",
    gender: "asdsad",
    profile_picture: "112d1212sdfsdf54sdf5sa",
    account_id: "1"

  })
  assert.equal(validatedData.error.length, 1)
})

test('should return more than one error if multiple incorrect data is passed', 
async ({ assert }) => {
  
  const validatedData = await clientValidator({
    first_name: "Narisza",
    last_name: "Kornsanka",
    email: "wrong email",
    telephone_number: "1234567890",
    line_id: "asdada12",
    facebook_name: "Narisza Kornsanka",
    date_of_birth: "wrong date",
    gender: "asdsad",
    profile_picture: "112d1212sdfsdf54sdf5sa",
    account_id: "1"

  })
  assert.isAbove(validatedData.error.length, 1)
})

test('should return undefined when pass correct data', 
async ({ assert }) => {
  
  const validatedData = await clientValidator({
    first_name: "Narisza",
    last_name: "Kornsanka",
    email: "asdads@mail.com",
    telephone_number: "1234567890",
    line_id: "asdada12",
    facebook_name: "Narisza Kornsanka",
    date_of_birth: "2001-03-15",
    gender: "asdsad",
    profile_picture: "112d1212sdfsdf54sdf5sa",
    account_id: "1"

  })
  assert.equal(validatedData.error, undefined)
})




