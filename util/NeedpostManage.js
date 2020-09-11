
class NeedpostManage {
    
    constructor (NeedpostModel) {
      this._Needpost = NeedpostModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    getAll(references){
        const needposts= this._Needpost.query()
        
        
        return this._withReferences(needposts,references).fetch().then(response => response.first())
    }
    getById(needpostInstance,references){
        const { id } = needpostInstance.params
        const needposts= this._Needpost.query().where({needpost_id : id})
        
        
        return this._withReferences(needposts,references).fetch().then(response => response.first())
    }

    async create(needpostInstance,references) {

        const {needpost_id} =  await this._Needpost.create(needpostInstance.body)

        const needposts= this._Needpost.query().where({needpost_id : needpost_id})

        return this._withReferences(needposts,references).fetch().then(response => response.first())
    }
    
    async deletById(needpostInstance){
        const { id } = needpostInstance.params
        const needposts= await this._Needpost.find(id)

        if(!needposts){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        needposts.delete()
        await needposts.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(needpostInstance,references){
        const { id } = needpostInstance.params
        let needposts= await this._Needpost.find(id)

        if(!needposts){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        needposts.merge(needpostInstance.body)
        await needposts.save();
    
        needposts= this._Needpost.query().where({needpost_id : id})
        
        return this._withReferences(needposts,references).fetch().then(response => response.first())
    }


}

module.exports = NeedpostManage