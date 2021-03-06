const Validator = use('Validator')


module.exports =  async function RegisterValidator(data) {

    if (typeof data !== 'object') throw new Error()

    const {first_name,last_name,email,telephone_number,
          line_id,facebook_name,gender,
        profile_picture,account_id} = data

    const rules = {
        first_name :'required|min:3|max:50' ,
        last_name : 'required|min:3|max:50',
        email :'required|email|unique:clients,email|max:50' ,
        telephone_number : 'required|max:10',
        line_id :'required|max:50' ,
        facebook_name : 'required|max:100',
        gender : 'required|max:10',
        profile_picture : 'required',
        account_id : 'required|max:7'


    }

    const validation = await Validator.validateAll({
        first_name,last_name,email,telephone_number,
        line_id,facebook_name,gender,
        profile_picture,account_id
    },rules)

    return {
        error : validation.messages()
    }

}
