'use strict'
const User = use('App/Models/User');

class AuthController {

  async login ({ request, auth }) {

    try {
        const {username ,password ,type} = request.body
        const user =await User.findBy({username})
        const token = await auth.attempt(username,password)
        return { status: '200', data: token , user_id : user.id}
    }
    catch (error) {
        return {status: '400',error: error.toString()}
    }

 }
 async logout({auth}){
  await auth.logout()
  return {status : 200 ,data : "complate"}
 }
}

module.exports = AuthController
