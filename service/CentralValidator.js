const Validator = use('Validator')


module.exports =  async function CentralValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {username,parking,lift,
           keycard,security,
           pool,gym,luandry} = data
    
    const rules = {

        username :'required|min:6|max:15' ,
        parking : 'required|max:5',
        lift : 'required|max:5',
        keycard : 'required|max:5',
        security : 'required|max:5',
        pool : 'required|max:5',
        gym : 'required|max:5',
        luandry : 'required|max:5',        
    }
    
    const validation = await Validator.validateAll({
        username,parking,lift,
        keycard,security,
        pool,gym,luandry},rules)

    return {
        error : validation.messages()
    }

}