const Validator = use('Validator')


module.exports =  async function HavepostTableValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {need_university_name,
           type_room,full_cost,half_cost,
           amount_of_mate,location,faculty,
           faculty_mate,habit,habit_mate,
           routine,like_thing,dislike,other_information,
           status_post,client_id} = data
    
    const rules = {
        need_university_name :'required|max:100' ,
        type_room : 'required|max:50',
        full_cost :'required|max:7' ,
        half_cost : 'required|max:7',
        amount_of_mate :'required|max:2' ,
        location : 'required|max:50',
        faculty : 'required|max:30',
        faculty_mate : 'required|max:30',
        habit : 'required|max:250',
        habit_mate : 'required|max:250',
        like_thing : 'required|max:150',
        dislike : 'required|max:150',
        other_information : 'required|max:250',
        status_post : 'required|max:10',
        client_id : 'required'
        
    }
    
    const validation = await Validator.validateAll({
        need_university_name,
        type_room,full_cost,half_cost,
        amount_of_mate,location,faculty,
        faculty_mate,habit,habit_mate,
        routine,like_thing,dislike,other_information,
        status_post,client_id},rules)

    return {
        error : validation.messages()
    }

}