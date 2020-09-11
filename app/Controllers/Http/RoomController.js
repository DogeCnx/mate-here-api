'use strict'
const Room  = use('App/Models/Room')
const RoomManage = require('../../../util/Room')


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
        const roomManage = new RoomManage(Room)
        const rooms = await roomManage
        .getById(request ,references)
        
        return {status : 200 ,
            error : undefined , 
            data : rooms};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const roomManage = new RoomManage(Room)
        const rooms = await roomManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : rooms};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
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
