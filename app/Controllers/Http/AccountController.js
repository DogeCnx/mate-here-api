'use strict'
const Account = use('App/Models/Account')
const AccountManage = require('../../../util/AccountManage')


class AccountController {
    async index( {request }) {
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.getAll(references)
        
        
        return {status : 200 ,error : undefined , data : accounts};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.getById(request ,references)
        
        return {status : 200 ,error : undefined , data : accounts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.create(request,references)
        
        return {status : 200 ,error : undefined , data : accounts};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.updateById(request,references)
        
        return {status : 200 ,error : undefined , data : accounts};

    }

  
    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const accountManage = new AccountManage(Account)
        const accounts = await accountManage.deletById(request,references)
        
        return {status : 200 ,error : undefined , data : accounts};

    }
}

module.exports = AccountController
