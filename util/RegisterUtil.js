class Register {
    
    constructor (RegisterModel) {
      this._Register = RegisterModel
    }
  
    _withReferences(instance, references) {
      if (references) {
        const extractedReferences = references.split(",")
        instance.with(extractedReferences)
      }
  
      return instance;
    }

    async getAll(references){
        const registers = await this._Register.query().with('client').fetch()
        registers.toJSON()
        
        // return this._withReferences(registers,references).fetch().then(response => response.first())
        return registers
    }
    async getById(registerInstance,references){
        const {id} = registerInstance.params
        const registers = await this._Register.query().where('account_id',id).with('client').fetch()

        registers.toJSON()

        //return this._withReferences(registers,references).fetch().then(response => response.first())
        return registers
    }
    async create(registerInstance,references) {

        const {username,password,first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture} = registerInstance.body
        const register = await this._Register.create( {username,password})
        await register.client().create({first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture} )

        const registers = await this._Register.query().where('username',username).with('client').fetch()
        registers.toJSON()
        //return this._withReferences(registers,references).fetch().then(response => response.first())
        return registers
    }
    
    async deletById(registerInstance){
        const { id } = registerInstance.params
        const registers= await this._Register.find(id)

        if(!registers){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        await registers.client().where('account_id',id).delete()
        registers.delete()
        await registers.save();

        return {status : 200 ,error : undefined , data : 'complete'};
    }

    async updateById(registerInstance,references){
        const { id } = registerInstance.params
        const {username,password,first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture} = registerInstance.body

        const register = await this._Register.find(id)
        if(!register){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        await register.client().where('account_id',id).update({first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture})
        register.merge({username,password})
        await register.save()
        
        const registers = await this._Register.query().where('username',username).with('client').fetch()
        registers.toJSON()

        return registers
        //return this._withReferences(register,references).fetch().then(response => response.first())
    }


}

module.exports = Register