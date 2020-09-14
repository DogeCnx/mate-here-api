'use strict'
const Account = use('App/Models/Account')
const AccountManage = require('../../../util/AccountManage')
const loginValidator = require('../../../service/LoginValidator')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')

class AccountController {
    async index( {request }) {
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.getAll(references)
        
        
        return {status : 200 ,error : undefined , data : accounts};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const validatedValue = numberTypeParamValidator(references)

        if(validatedValue.error) 
        return { status: 500, 
         error: validatedValue.error, 
         data: undefined}
 
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage
        .getById(request ,references)
        
        
        return {status : 200 ,
            error : undefined , 
            data : accounts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const validation = await loginValidator(request.body)
      
      if(validation.error){
        return {status: 422, 
          error: validation.error,
          data: undefined}
      }
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : accounts};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const validation = await loginValidator(request.body)
      
      if(validation.error){
        return {status: 422, 
          error: validation.error,
          data: undefined}
      }
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage
        .updateById(request,references)
        
        return {status : 200 ,error : undefined , data : accounts};

    }

  
    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.deletById(request,references)
        
        return {status : 200 ,error : undefined , data : accounts};

    }

    async login ({ request }){
      const {username,password} = request.boody
      const user = await auth.attemp(username,password)

      return {status : 200 , error : undefined , data : user}

    }
}

module.exports = AccountController
