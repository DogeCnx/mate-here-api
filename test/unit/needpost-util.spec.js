// 'use strict'

// const { test } = use('Test/Suite')('Needpost Util')

// const Needpost = use('App/Models/Needpost')
// const NeedpostManage = require('../../util/NeedpostManage')

// test("needposts should be return Array Forever", async ({ assert }) => {
//   const needpostManage = new NeedpostManage(Needpost)
//   const needposts = await needpostManage.getAll()
//   assert.isArray([{},{},{}])

// })

// test("needposts should be return account is Object", async ({ assert }) => {
//   const needpostManage = new NeedpostManage(Needpost)
//   const request  = {params : {id : 1}}
//   const needposts = await needpostManage.getById(request)
//   assert.isObject(needposts)

// })


// test("should be return defined even when deleted", async ({ assert }) => {
//   const needpostManage = new NeedpostManage(Needpost)
//   const request  = {params : {id : 2}}
//   const needposts = await needpostManage.deletById(request)

//   assert.isDefined(needposts)
// })
