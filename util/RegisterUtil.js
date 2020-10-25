const Client = use('App/Models/Client');

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

    async getAll(references,page = 1, per_page = 10){

        return this._withReferences(this._Register.query(),references).with('client').paginate(page,per_page)
      }
    async getById(registerInstance,references){
        const {id} = registerInstance.params

        return this._withReferences(this._Register.query(),references).where('account_id',id).with('client').fetch().then(response => response.first())

    }
    async create(registerInstance,references, auth) {

        const {username,password,first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture,cover_img_url} = registerInstance.body
        const register = await this._Register.create( {username,password})
        await register.save();
        const account_id = register.id

        const users = await Client.create({first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture,account_id})
        await users.save()

        // return this._withReferences(this._Register.query(),references).where(id).with('client').fetch().then(response => response.first())
        return {status : "register complate", data : register}
    }

    async deletById(registerInstance,auth){
        const { id } = registerInstance.params
        const registers= await this._Register.find(id)

        if(!registers){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }

        await registers.client().where('account_id',id).delete()
        registers.delete()
        await registers.save();

        return { status : "Register complate" }
    }

    async updateById(registerInstance,references,auth){
        const { id } = registerInstance.params
        const {username,password,first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture,cover_img_url} = registerInstance.body

        const register = await this._Register.find(id)
        if(!register){
            return {status : 500 ,error : `Not Found ${id}` , data : undefined};
        }
        await register.client().where('account_id',id).update({first_name ,last_name,email ,telephone_number,line_id,facebook_name,date_of_birth,gender,profile_picture})
        register.merge({username,password})
        await register.save()

        return this._withReferences(this._Register.query(),references).where('username',username).with('client').fetch().then(response => response.first())
    }

}
module.exports = Register
