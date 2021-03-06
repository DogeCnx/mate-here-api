'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Account' , (faker) => {
    return {
        username : faker.word({length : 10}) ,
        password : faker.word({length : 10})
    }
})

Factory.blueprint('App/Models/Client' , (faker) => {
    return {
        first_name : faker.first() ,
        last_name : faker.last(),
        email : faker.email(),
        telephone_number : faker.phone({ formatted: false }),
        line_id : faker.word({length:8}),
        facebook_name : faker.word(),
        date_of_birth : faker.date(),
        gender : faker.gender(),
        profile_picture : faker.avatar(),

    }
})

Factory.blueprint('App/Models/Havepost' , (faker) => {
    return {
        need_university_name: faker.word(),
        type_room: faker.word(),
        full_cost: faker.integer({ min: 0, max: 1000000 }),
        half_cost: faker.integer({ min: 0, max: 1000000 }),
        amount_of_mate: faker.integer({ min: 0, max: 10 }),
        location: faker.sentence({word:2}),
        faculty: faker.word(),
        faculty_mate : faker.word(),
        habit : faker.word(),
        habit_mate : faker.word(),
        routine :faker.word(),
        like_thing : faker.word(),
        dislike : faker.word(),
        other_information : faker.sentence({word:2}),
        status_post : faker.word(),

    }

    
})

Factory.blueprint('App/Models/Needpost' , (faker) => {
    return {
        need_university_name: faker.word(),
        need_type: faker.word(),
        need_full_cost: faker.integer({ min: 0, max: 1000000 }),
        need_half_cost: faker.integer({ min: 0, max: 1000000 }),
        need_amount_of_mate: faker.integer({ min: 0, max: 10 }),
        need_location: faker.sentence({word:2}),
        need_faculty: faker.word(),
        need_faculty_mate : faker.word(),
        need_habit : faker.word(),
        need_habit_mate : faker.word(),
        need_routine :faker.word(),
        need_like_thing : faker.word(),
        need_dislike : faker.word(),
        need_other_information : faker.sentence({word:2}),
        status_post : faker.word(),

    }
})

Factory.blueprint('App/Models/Central' , (faker) => {
    return {
        parking : faker.word({length:2}),
        lift : faker.word({length:2}),
        keycard : faker.word({length:2}),
        security : faker.word({length:2}),
        pool : faker.word({length:2}),
        gym : faker.word({length:2}),
        luandry : faker.word({length:2})
    }
})

Factory.blueprint('App/Models/Room' , (faker) => {
    return {
        air_conditioner : faker.word({length:2}),        
        number_of_toilet : faker.word({length:2}),        
        number_of_bedroom : faker.word({length:2}),        
        pets : faker.word({length:2}),        
        smoking : faker.word({length:2}),        
        internet_wifi : faker.word({length:2}),        
        furniture : faker.word({length:2}),        
        water_heater : faker.word({length:2})  
        
    }
})

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
