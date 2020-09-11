const Validator = use('Validator')


module.exports =  async function RoomValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {
           air_conditioner,number_of_toilet,
           number_of_bedroom,pets,smoking,
           internet_wifi,furniture,water_heater
        } = data
    
    const rules = {

        air_conditioner : 'required|max:5',        
        number_of_toilet : 'required|max:5',        
        number_of_bedroom : 'required|max:5',        
        pets : 'required|max:5',        
        smoking : 'required|max:5',        
        internet_wifi : 'required|max:5',        
        furniture : 'required|max:5',        
        water_heater : 'required|max:5'     

        
    }
    
    const validation = await Validator.validateAll({
               air_conditioner,number_of_toilet,
        number_of_bedroom,pets,smoking,
        internet_wifi,furniture,water_heater
    },rules)

    return {
        error : validation.messages()
    }

}