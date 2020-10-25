// 'use strict'

// const { test } = use('Test/Suite')('Havepost Util')

// const Havepost = use('App/Models/Havepost')
// const HavepostManage = require('../../util/HavepostManage')

// test("haveposts should be return Array Forever", async ({ assert }) => {
//   const havepostManage = new HavepostManage(Havepost)
//   const haveposts = await havepostManage.getAll()
//   assert.isArray([{},{},{}])

// })

// test("haveposts should be return account is Object", async ({ assert }) => {
//   const havepostManage = new HavepostManage(Havepost)
//   const request  = {params : {id : 1}}
//   const haveposts = await havepostManage.getById(request)
//   assert.isObject(haveposts)

// })


// test("should be return defined even when deleted", async ({ assert }) => {
//   const havepostManage = new HavepostManage(Havepost)
//   const request  = {params : {id : 2}}
//   const haveposts = await havepostManage.deletById(request)

//   assert.isDefined(haveposts)
// })
