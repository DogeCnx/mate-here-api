'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthStupid {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,auth,response }, next) {
    try{
      console.log("Stupid")
      await auth.check()
    }
    catch(e){
      return response.send({status : 400 ,error : "Login Stupid"})
    }
    await next()
  }
}

module.exports = AuthStupid
