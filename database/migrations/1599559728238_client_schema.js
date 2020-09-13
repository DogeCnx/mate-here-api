'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments('client_id')
      table.string('first_name',50).notNullable()
      table.string('last_name',50).notNullable()
      table.string('email',50).notNullable()
      table.string('telephone_number',50).notNullable()
      table.string('line_id',50).notNullable()
      table.string('facebook_name',50).notNullable()
      table.string('date_of_birth',50).notNullable()
      table.string('gender',10).notNullable()
      table.string('profile_picture',250).notNullable()
      table.integer('account_id').unsigned()
      table.timestamps()

      table
      .foreign('account_id')
      .references('accounts.account_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
