'use strict'
const Needpost = use('App/Models/Needpost')
const NeedpostManage = require('../../../util/Needpost')


class NeedpostController {

    async index( {request }) {
        const {references = undefined} =request.qs
        const needpostManage = new NeedpostManage(Needpost)
        const needposts = await needpostManage
        .getAll(references)
        
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const needpostManage = new NeedpostManage(Needpost)
        const needposts = await needpostManage
        .getById(request ,references)
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const needpostManage = new NeedpostManage(Needpost)
        const needposts = await needpostManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const needpostManage = new NeedpostManage(Needpost)
        const needposts = await needpostManage
        .updateById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};

    }

  
    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const needpostManage = new NeedpostManage(Needpost)
        const needposts = await needpostManage
        .deletById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};

    }
}

module.exports = NeedpostController
