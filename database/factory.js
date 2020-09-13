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
        telephone_number : faker.number({length:10}),
        line_id : faker.word({length:8}),
        facebook_name : faker.word(),
        date_of_birth : faker.date(),
        gender : faker.gender(),
        profile_picture : faker.avatar(),
        account_id : faker.avatar(),
    }
})

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
