const Validator = use('Validator')


module.exports =  async function HavepostTableValidator(data) {

    if (typeof data !== 'object') throw new Error()

    const {need_university_name,
           type_room,full_cost,half_cost,
           amount_of_mate,location,faculty,
           faculty_mate,habit,habit_mate,
           routine,like_thing,dislike,other_information,
           status_post,client_id,parking,lift,
           keycard,security,
           pool,gym,luandry,air_conditioner,number_of_toilet,
           number_of_bedroom,pets,smoking,
           internet_wifi,furniture,water_heater,cover_img_url
       } = data

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
        routine : 'required|max:250',
        like_thing : 'required|max:150',
        dislike : 'required|max:150',
        other_information : 'required|max:250',
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
        water_heater : 'required|max:5',
        cover_img_url : 'required'

    }

    const validation = await Validator.validateAll({
        need_university_name,
        type_room,full_cost,half_cost,
        amount_of_mate,location,faculty,
        faculty_mate,habit,habit_mate,
        routine,like_thing,dislike,other_information,
        status_post,client_id,parking,lift,
        keycard,security,
        pool,gym,luandry,air_conditioner,number_of_toilet,
        number_of_bedroom,pets,smoking,
        internet_wifi,furniture,water_heater,cover_img_url
    },rules)

    return {
        error : validation.messages()
    }

}
