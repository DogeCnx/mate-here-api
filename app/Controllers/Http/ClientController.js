'use strict'
const Client = use('App/Models/Client')
const ClientManage = require('../../../util/ClientManage')

class ClientController {
    async index( {request }) {
        const {references = undefined} =request.qs
        const clientManage = new ClientManage(Client)
        const clients = await clientManage
        .getAll(references)
        
        
        return {status : 200 ,
            error : undefined , 
            data : clients};
    }
      

    async show({ request }) {
        const {references = undefined} =request.qs
        const clientManage = new ClientManage(Client)
        const clients = await clientManage
        .getById(request ,references)
        
        return {status : 200 ,
            error : undefined , 
            data : clients};
    }


    async store({ request }) {
        const {references = undefined} =request.qs
        const clientManage = new ClientManage(Client)
        const clients = await clientManage
        .create(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : clients};
    }


    async update( {request} ) {
        const {references = undefined} =request.qs
        const clientManage = new ClientManage(Client)
        const clients = await clientManage
        .updateById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : clients};

    }

  
    async destroy  ({ request }){
        const {references = undefined} =request.qs
        const clientManage = new ClientManage(Client)
        const clients = await clientManage
        .deletById(request,references)
        
        return {status : 200 ,
            error : undefined , 
            data : clients};

    }
      

}

module.exports = ClientController

