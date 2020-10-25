'use strict'
const Account = use('App/Models/User')

const RegisterUtil = require('../../../util/RegisterUtil')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')

class RegisterController {
    async index( {request,auth }) {


        const {references = undefined,page,per_page} =request.qs
        const registerUtil = new RegisterUtil(Account)
        const registers = await registerUtil.getAll(references,page,per_page)


        return {status : 200 ,error : undefined , data : registers  || {}};
    }


    async show({ request }) {
        const {references = undefined} =request.qs
        const registerUtil = new RegisterUtil(Account)
        const registers = await registerUtil.getById(request,references,)

        return {status : 200 ,error : undefined , data : registers};
    }


    async store({ request ,auth}) {

        const {references = undefined} =request.qs
        const registerUtil = new RegisterUtil(Account)
        const registers = await registerUtil.create(request,references,auth)

        return {status : 200 ,error : undefined , data : registers};

    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const registerUtil= new RegisterUtil(Account)
        const registers= await registerUtil.updateById(request,references,auth)

        return {status : 200 ,error : undefined , data :registers};

    }

    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const  registerUtil  = new  RegisterUtil (Account)
        const  registers = await  registerUtil.deletById(request,references,auth)

        return {status : 200 ,error : undefined , data : registers };

    }
}

module.exports = RegisterController
