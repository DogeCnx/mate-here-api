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
        telephone_number : faker.integer({length:10}),
        line_id : faker.word({length:8}),
        facebook_name : faker.word(),
        date_of_birth : faker.date(),
        gender : faker.gender(),
        profile_picture : faker.avatar(),
        account_id : faker.avatar()
    }
})

Factory.blueprint('App/Models/Havepost' , (faker) => {
    return {
        need_university_name: faker.word(),
        type_room: faker.word(),
        full_cost: faker.integer(),
        half_cost: faker.integer(),
        amount_of_mate: faker.integer(),
        location: faker.sentence(),
        faculty: faker.word(),
        faculty_mate : faker.word(),
        habit : faker.word(),
        habit_mate : faker.word(),
        like_thing : faker.word(),
        dislike : faker.word(),
        other_information : faker.paragraph(),
        status_post : faker.word(),
        client_id : faker.integer()
    }
})

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
