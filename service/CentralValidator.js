const Validator = use('Validator')


module.exports =  async function loginValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {parking,lift,
           keycard,security,
           pool,gym,luandry} = data
    
    const rules = {

        parking : 'required|max:5',
        lift : 'required|max:5',
        keycard : 'required|max:5',
        security : 'required|max:5',
        pool : 'required|max:5',
        gym : 'required|max:5',
        luandry : 'required|max:5',        
    }
    
    const validation = await Validator.validateAll({
        parking,lift,
        keycard,security,
        pool,gym,luandry},rules)

    return {
        error : validation.messages()
    }

}