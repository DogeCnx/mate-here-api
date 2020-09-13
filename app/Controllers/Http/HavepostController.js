'use strict'
const Havepost = use('App/Models/Havepost')
const HavepostManage = require('../../../util/Havepost')
const Validator = use('Validator')
const havepostValidator = require('../../../service/HavepostTableValidator')

class HavepostController {
    async index( {request }) {
        const {references = undefined} =request.qs
        const havepostManage = new HavepostManage(Havepost)
        const haveposts = await havepostManage
        .getAll(references)
        
        
        return {status : 200 ,
            error : undefined , 
            data : haveposts};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const havepostManage = new HavepostManage(Havepost)
        const haveposts = await havepostManage
        .getById(request ,references)

        const validatedValue = numberTypeParamValidator(id)

        if(validatedValue.error) 
        return { status: 500, 
                 error: validatedValue.error, 
                 data: undefined}
                 
        return {status : 200 ,
            error : undefined , 
            data : haveposts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const havepostManage = new HavepostManage(Havepost)
        
        const validation = await havepostValidator(request.body)
      
        if(validation.error){
          return {status: 422, 
            error: validation.error,
            data: undefined}
        }
  
        const haveposts = await havepostManage
        .create(request,references)
         const validatedValue = numberTypeParamValidator(id)

       if(validatedValue.error) 
       return { status: 500, 
        error: validatedValue.error, 
        data: undefined}
        return {status : 200 ,
            error : undefined , 
            data : haveposts};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const havepostManage = new HavepostManage(Havepost)
        
        const validation = await havepostValidator(request.body)
      
        if(validation.error){
          return {status: 422, 
                  error: validation.error,
                  data: undefined}
        }


        const haveposts = await havepostManage
        .updateById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : haveposts};

    }

  
    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const havepostManage = new HavepostManage(Havepost)
        const haveposts = await havepostManage
        .deletById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : haveposts};

    }
}

module.exports = HavepostController
