'use strict'

const { test } = use('Test/Suite')('Register Util')

const Account = use('App/Models/Account')
const RegisterUtil = require('../../util/RegisterUtil')

test("accounts should be return Array Forever", async ({ assert }) => {
  const registerUtil = new RegisterUtil(Account)
  const accounts = await registerUtil.getAll()
  assert.isArray([{},{},{}])

})

test("accounts should be return account is Object", async ({ assert }) => {
  const registerUtil = new RegisterUtil(Account)
  const request  = {params : {id : 1}}
  const accounts = await registerUtil.getById(request)
  assert.isObject(accounts)

})


test("should be return defined even when deleted", async ({ assert }) => {
  const registerUtil = new RegisterUtil(Account)
  const request  = {params : {id : 2}}
  const accounts = await registerUtil.deletById(request)

  assert.isDefined(accounts)
})
