
class CentralManage {
    
    constructor (CentralModel) {
      this._Central = CentralModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    getAll(references){
        const centrals = this._Central.query()
        
        
        return this._withReferences(centrals,references).fetch().then(response => response.first())
    }
    getById(centralInstance,references){
        const { id } = centralInstance.params
        const centrals = this._Central.query().where({central_id : id})
        
        
        return this._withReferences(centrals,references).fetch().then(response => response.first())
    }

    async create(centralInstance,references) {

        const {central_id} =  await this._Central.create(centralInstance.body)

        const centrals = this._Central.query().where({central_id : central_id})

        return this._withReferences(centrals,references).fetch().then(response => response.first())
    }
    
    async deletById(centralInstance){
        const { id } = centralInstance.params
        const centrals = await this._Central.find(id)

        if(!centrals){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        centrals.delete()
        await centrals.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(centralInstance,references){
        const { id } = centralInstance.params
        let centrals = await this._Central.find(id)

        if(!centrals){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        centrals.merge(centralInstance.body)
        await centrals.save();
    
        centrals = this._Central.query().where({central_id : id})
        
        return this._withReferences(centrals,references).fetch().then(response => response.first())
    }


}

module.exports = CentralManage