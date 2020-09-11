'use strict'
const Havepost = use('App/Models/Havepost')
const HavepostManage = require('../../../util/Havepost')


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
        
        return {status : 200 ,
            error : undefined , 
            data : haveposts};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const havepostManage = new HavepostManage(Havepost)
        const haveposts = await havepostManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : haveposts};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
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
