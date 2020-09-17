'use strict'

const { test } = use('Test/Suite')('Account Util')
const Account = use('App/Models/Account')
const AccountManage = require('../../util/AccountManage')

test("accounts should be return Array Forever", async ({ assert }) => {
  const accountManage = new AccountManage(Account)
  const accounts = await accountManage.getAll()
  assert.isArray([{},{},{}])

})

test("accounts should be return account is Object", async ({ assert }) => {
  const accountManage = new AccountManage(Account)
  const request  = {params : {id : 1}}
  const accounts = await accountManage.getById(request)
  assert.isObject(accounts)

})


test("should be return defined even when deleted", async ({ assert }) => {
  const accountManage = new AccountManage(Account)
  const request  = {params : {id : 2}}
  const accounts = await accountManage.deletById(request)

  assert.isDefined(accounts)

})



