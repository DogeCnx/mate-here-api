'use strict'
const Room  = use('App/Models/Room')
const RoomManage = require('../../../util/Room')
const roomValidator = require('../../../service/RoomValidator')
const numberTypeParamValidator = require('../../../service/numberTypeParamValidator')

class RoomController {

    async index( {request }) {
        const {references = undefined} =request.qs
        const roomManage = new RoomManage(Room)
        const rooms = await roomManage
        .getAll(references)
        
        
        return {status : 200 ,
            error : undefined , 
            data : rooms};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const validatedValue = numberTypeParamValidator(references)

        if(validatedValue.error) 
        return { status: 500, 
         error: validatedValue.error, 
         data: undefined}
        const roomManage = new RoomManage(Room)
        const rooms = await roomManage
        .getById(request ,references)

       

        return {status : 200 ,
            error : undefined , 
            data : rooms};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const validation = await roomValidator(request.body)
      
        if(validation.error){
          return {status: 422, 
            error: validation.error,
            data: undefined}
        }
  
        const roomManage = new RoomManage(Room)
      
        const rooms = await roomManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : rooms};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const validation = await roomValidator(request.body)
      
      if(validation.error){
        return {status: 422, 
          error: validation.error,
          data: undefined}
      }

        const roomManage = new RoomManage(Room)
        
        const rooms = await roomManage
        .updateById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : rooms};

    }

  
    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const roomManage = new RoomManage(Room)
        const rooms = await roomManage
        .deletById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : rooms};

    }
}

module.exports = RoomController
