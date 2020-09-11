const Validator = use('Validator')


module.exports =  async function NeedpostTableValidator(data) {

    if (typeof data !== 'object') throw new Error()
    
    const {need_university_name,
           need_type,need_full_cost,need_half_cost,
           need_amount_of_mate,need_location,need_faculty,
           need_faculty_mate,need_habit,need_habit_mate,
           need_routine,need_like_thing,need_dislike,
           need_other_information,
           status_post,client_id} = data
    
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
        need_like_thing : 'required|max:150',
        need_dislike : 'required|max:150',
        need_other_information : 'required|max:250',
        status_post : 'required|max:10',
        client_id : 'required'
    }
    
    const validation = await Validator.validateAll({
        need_university_name,
        need_type,need_full_cost,need_half_cost,
        need_amount_of_mate,need_location,need_faculty,
        need_faculty_mate,need_habit,need_habit_mate,
        need_routine,need_like_thing,need_dislike,
        need_other_information,
        status_post,client_id},rules)

    return {
        error : validation.messages()
    }

}