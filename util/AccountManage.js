
class AccountManage {
    constructor(AccountModel) {
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
    getById(account_id,references){
        const accounts = this._Account.query().where('account_id',account_id)
        
        
        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }

    async create(accountInstance,references) {
        const {account_id} = this._Account.create(accountInstance)
        const accounts = this._Account.query().where('account_id',account_id)

        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }
    
    async deletById(account_id){
        const accounts = await this._Account.find(account_id)
        accounts.delete()
        await accounts.save();


        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }

    async updateById(account_id,accountInstance,references){
        const accounts = await this._Account.find(account_id)
        accounts.merge(accountInstance)
        await accounts.save();
    
        const accounts = this._Account.query().where('account_id',account_id)
        
        return this._withReferences(accounts,references).fetch().then(response => response.first())
    }


}