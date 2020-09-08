'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HavepostSchema extends Schema {
  up () {
    this.create('haveposts', (table) => {
      table.increments('havepost_id')
      table.string('need_university_name',100).notNullable()
      table.string('type_room',50).notNullable()
      table.integer('full_cost',7).notNullable()
      table.integer('half_cost',7).notNullable()
      table.integer('amount_of_mate',2).notNullable()
      table.string('location',50).notNullable()
      table.string('faculty',30).notNullable()
      table.string('faculty_mate',30).notNullable()
      table.string('habit',250).notNullable()
      table.string('habit_mate',250).notNullable()
      table.string('routine',250).notNullable()
      table.string('like_thing',150).notNullable()
      table.string('dislike',150).notNullable()
      table.string('other_information',250).notNullable()
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
    this.drop('haveposts')
  }
}

module.exports = HavepostSchema
