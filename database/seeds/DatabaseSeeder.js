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
    .makeMany(10)

    let counter = 0;
    for (const account of accounts) {
      await account.client().save(clients[counter]);

      counter++;
    }

    const haveposts =  await Factory
    .model('App/Models/Havepost')
    .makeMany(10)

    const needposts =  await Factory
    .model('App/Models/Needpost')
    .makeMany(10)

    const centrals =  await Factory
    .model('App/Models/Central')
    .makeMany(10)

    const rooms =  await Factory
    .model('App/Models/Room')
    .makeMany(10)
  }
}

module.exports = DatabaseSeeder
