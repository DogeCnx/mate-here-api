const Validator = use('Validator')


module.exports =  async function loginValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {username,password} = data
    
    const rules = {
        username :'required|min:6|max:15' ,
        password : 'required|min:8|max:12'
    }
    
    const validation = await Validator.validateAll({username,password},rules)

    return {
        error : validation.messages()
    }

}