'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const accounts =  await Factory
    .model('App/Models/Account')
    .createMany(10)

    const clients =  await Factory
    .model('App/Models/Client')
    .createMany(10)

    const haveposts =  await Factory
    .model('App/Models/Havepost')
    .createMany(10)

    const needposts =  await Factory
    .model('App/Models/Needpost')
    .createMany(10)
  }
}

module.exports = DatabaseSeeder
