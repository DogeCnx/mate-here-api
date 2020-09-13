'use strict'
const Needpost = use('App/Models/Needpost')
const NeedpostManage = require('../../../util/Needpost')
const needpostValidator = require('../../../service/NeedpostTableValidator')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')


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
        const validatedValue = numberTypeParamValidator(id)

       if(validatedValue.error) 
       return { status: 500, 
        error: validatedValue.error, 
        data: undefined}

        const needpostManage = new NeedpostManage(Needpost)
        const needposts = await needpostManage
        .getById(request ,references)
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const validation = await needpostValidator(request.body)
      
      if(validation.error){
        return {status: 422, 
          error: validation.error,
          data: undefined}
      }

        const needpostManage = new NeedpostManage(Needpost)
        
        
        const needposts = await needpostManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : needposts};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const validation = await needpostValidator(request.body)
      
        if(validation.error){
          return {status: 422, 
            error: validation.error,
            data: undefined}
        }
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
