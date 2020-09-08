'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NeedpostSchema extends Schema {
  up () {
    this.create('needposts', (table) => {
      table.increments('needpost_id')
      table.string('need_university_name',100).notNullable()
      table.string('need_type',50).notNullable()
      table.integer('need_full_cost',7).notNullable()
      table.integer('need_half_cost',7).notNullable()
      table.integer('need_amount_of_mate',2).notNullable()
      table.string('need_location',50).notNullable()
      table.string('need_faculty',30).notNullable()
      table.string('need_faculty_mate',30).notNullable()
      table.string('need_habit',250).notNullable()
      table.string('need_habit_mate',250).notNullable()
      table.string('need_routine',250).notNullable()
      table.string('need_like_thing',150).notNullable()
      table.string('need_dislike',150).notNullable()
      table.string('need_other_information',250).notNullable()
      table.integer('client_id').notNullable().unsigned()
      table.timestamps()

      table
      .foreign('client_id')
      .references('clients.client_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 
    })
  }

  down () {
    this.drop('needposts')
  }
}

module.exports = NeedpostSchema
