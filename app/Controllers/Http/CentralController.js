'use strict'
const Central = use('App/Models/Central')
const CentralManage = require('../../../util/CentralManage')

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
        const centralManage = new CentralManage(Central)
        const centrals = await centralManage
        .getById(request ,references)
        
        return {status : 200 ,
               error : undefined , 
               data : centrals};
    }


    async store({ request }) {

        const {references = undefined} =request.qs
        const centralManage = new CentralManage(Central)
        const centrals = await centralManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : centrals}; 
    }


    async update( {request} ) {
        
        const {references = undefined} =request.qs
        const centralManage = new VCentralManage(Central)
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
