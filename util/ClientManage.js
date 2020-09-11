
class ClientManage {
    
    constructor (ClientModel) {
      this._Client = ClientModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    getAll(references){
        const clients = this._Client.query()
        
        
        return this._withReferences(clients,references).fetch().then(response => response.first())
    }
    getById(clientInstance,references){
        const { id } = clientInstance.params
        const clients = this._Client.query().where({client_id : id})
        
        
        return this._withReferences(clients,references).fetch().then(response => response.first())
    }

    async create(clientInstance,references) {

        const {client_id} =  await this._Client.create(clientInstance.body)

        const clients = this._Client.query().where({client_id : client_id})

        return this._withReferences(clients,references).fetch().then(response => response.first())
    }
    
    async deletById(clientInstance){
        const { id } = clientInstance.params
        const clients = await this._Client.find(id)

        if(!clients){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        clients.delete()
        await clients.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(clientInstance,references){
        const { id } = clientInstance.params
        let clients = await this._Client.find(id)

        if(!clients){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        clients.merge(clientInstance.body)
        await clients.save();
    
        clients = this._Client.query().where({client_id : id})
        
        return this._withReferences(clients,references).fetch().then(response => response.first())
    }


}

module.exports = ClientManage