
class AccountManage {
    
    constructor (AccountModel) {
      this._Account = AccountModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    getAll(references){
        const accounts = this._Account.query()
        
        
        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }
    getById(accountInstance,references){
        const { id } = accountInstance.params
        const accounts = this._Account.query().where({account_id : id})
        
        
        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }

    async create(accountInstance,references) {

        const {account_id} =  await this._Account.create(accountInstance.body)

        const accounts = this._Account.query().where({account_id : account_id})

        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }
    
    async deletById(accountInstance){
        const { id } = accountInstance.params
        const accounts = await this._Account.find(id)

        if(!accounts){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        accounts.delete()
        await accounts.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(accountInstance,references){
        const { id } = accountInstance.params
        let accounts = await this._Account.find(id)

        if(!accounts){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        accounts.merge(accountInstance.body)
        await accounts.save();
    
        accounts = this._Account.query().where({account_id : id})
        
        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }


}

module.exports = AccountManage