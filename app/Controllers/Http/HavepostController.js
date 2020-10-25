'use strict'
const Havepost = use('App/Models/Havepost')
const HavepostManage = require('../../../util/HavepostManage')
const havepostValidator = require('../../../service/HavepostTableValidator')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')

class HavepostController {
    async index( {request }) {
        const {references = undefined,page,per_page} =request.qs
        const havepostManage = new HavepostManage(Havepost,page,per_page)
        const haveposts = await havepostManage
        .getAll(references)

        return {status : 200 ,
            error : undefined ,
            data : haveposts || {}};
    }


    async show({ request }) {
        const {references = undefined} =request.qs

        const validatedValue = numberTypeParamValidator(references)

        if(validatedValue.error)
        return { status: 500,
                 error: validatedValue.error,
                 data: undefined}

        const havepostManage = new HavepostManage(Havepost)
        const haveposts = await havepostManage
        .getById(request ,references)

        return {status : 200 ,
            error : undefined ,
            data : haveposts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const {client_id} = request.body

        const validation = await havepostValidator(request.body)

        if(validation.error){
          return {status: 422,
            error: validation.error,
            data: undefined}
        }

        const havepostManage = new HavepostManage(Havepost)

        const haveposts = await havepostManage
        .create(request,references)
         const validatedValue = numberTypeParamValidator(client_id)

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

        const validation = await havepostValidator(request.body)

        if(validation.error){
          return {status: 422,
                  error: validation.error,
                  data: undefined}
        }


        const havepostManage = new HavepostManage(Havepost)

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
