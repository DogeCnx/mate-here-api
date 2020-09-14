const Validator = use('Validator')


module.exports =  async function NeedpostTableValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {need_university_name,
           need_type,need_full_cost,need_half_cost,
           need_amount_of_mate,need_location,need_faculty,
           need_faculty_mate,need_habit,need_habit_mate,
           need_routine,need_like_thing,need_dislike,
           need_other_information,
           status_post,client_id,parking,lift,
           keycard,security,
           pool,gym,luandry,air_conditioner,number_of_toilet,
           number_of_bedroom,pets,smoking,
           internet_wifi,furniture,water_heater} = data
    
    const rules = {

      
        need_university_name :'required|max:100' ,
        need_type : 'required|max:50',
        need_full_cost :'required|max:7' ,
        need_half_cost : 'required|max:7',
        need_amount_of_mate :'required|max:2' ,
        need_location : 'required|max:50',
        need_faculty : 'required|max:30',
        need_faculty_mate : 'required|max:30',
        need_habit : 'required|max:250',
        need_habit_mate : 'required|max:250',
        need_routine:'required|max:250',
        need_like_thing : 'required|max:150',
        need_dislike : 'required|max:150',
        need_other_information : 'required|max:250',
        status_post : 'required|max:10',
        client_id : 'required',
        parking : 'required|max:5',
        lift : 'required|max:5',
        keycard : 'required|max:5',
        security : 'required|max:5',
        pool : 'required|max:5',
        gym : 'required|max:5',
        luandry : 'required|max:5',
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
        need_university_name,
        need_type,need_full_cost,need_half_cost,
        need_amount_of_mate,need_location,need_faculty,
        need_faculty_mate,need_habit,need_habit_mate,
        need_routine,need_like_thing,need_dislike,
        need_other_information,
        status_post,client_id,parking,lift,
        keycard,security,
        pool,gym,luandry,air_conditioner,number_of_toilet,
        number_of_bedroom,pets,smoking,
        internet_wifi,furniture,water_heater},rules)

    return {
        error : validation.messages()
    }

}