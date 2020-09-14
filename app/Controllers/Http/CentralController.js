'use strict'
const Central = use('App/Models/Central')
const CentralManage = require('../../../util/CentralManage')
const centralValidator = require('../../../service/CentralValidator')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')

class CentralController {
    async index( {request }) {

        const {references = undefined} =request.qs
        const centralManage = new CentralManage(Central)
        const centrals = await centralManage.getAll(references)
        
        
        return {status : 200 ,
               error : undefined , 
               data : centrals};
       
    }
      

    async show({ request }) {
    
        const {references = undefined} =request.qs
        const validatedValue = numberTypeParamValidator(references)

       if(validatedValue.error) 
       return { status: 500, 
        error: validatedValue.error, 
        data: undefined}

        const centralManage = new CentralManage(Central)
        const centrals = await centralManage
        .getById(request ,references)
        
        
        return {status : 200 ,
               error : undefined , 
               data : centrals};
    }


    async store({ request }) {

        const {references = undefined} =request.qs
        const validation = await centralValidator(request.body)
      
      if(validation.error){
        return {status: 422, 
          error: validation.error,
          data: undefined}
      }
        const centralManage = new CentralManage(Central)

        
        const centrals = await centralManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : centrals}; 
    }


    async update( {request} ) {
        
        const {references = undefined} =request.qs
        const validation = await centralValidator(request.body)    
        if(validation.error){
          return {status: 422, 
            error: validation.error,
            data: undefined}
        }
        const centralManage = new CentralManage(Central)
        const centrals = await centralManage
        .updateById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : centrals};

    }

  
    async destroy  ({ request }){

        const {references = undefined} =request.qs
        const centralManage = new CentralManage(Central)
        const centrals = await centralManage
        .deletById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : centrals};

    }
}

module.exports = CentralController
