'use strict'
const Account = use('App/Models/Account')
const RegisterUtil = require('../../../util/RegisterUtil')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')

class RegisterController {
    async index( {request }) {
        const {references = undefined} =request.qs
        const registerUtil = new RegisterUtil(Account)
        const registers = await registerUtil.getAll(references)
        
        
        return {status : 200 ,error : undefined , data : registers};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const registerUtil = new RegisterUtil(Account)
        const registers = await registerUtil.getById(request,references)
        
        return {status : 200 ,error : undefined , data : registers};
    }


    async store({ request }) {

        const {references = undefined} =request.qs
        const registerUtil = new RegisterUtil(Account)
        const registers = await registerUtil.create(request,references)
        
        return {status : 200 ,error : undefined , data : registers};

    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const registerUtil= new RegisterUtil(Account)
        const registers= await registerUtil.updateById(request,references)
        
        return {status : 200 ,error : undefined , data :registers};

    }

    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const  registerUtil  = new  RegisterUtil (Account)
        const  registers = await  registerUtil.deletById(request,references)
        
        return {status : 200 ,error : undefined , data : registers };

    }
}

module.exports = RegisterController
