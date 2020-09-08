'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CentralSchema extends Schema {
  up () {
    this.create('centrals', (table) => {
      table.increments('central_id')

      table.integer('havepost_id').notNullable().unsigned()
      table.integer('needpost_id').notNullable().unsigned()

      table.string('parking',5).notNullable()
      table.string('lift',5).notNullable()
      table.string('keycard',5).notNullable()
      table.string('security',5).notNullable()
      table.string('pool',5).notNullable()
      table.string('gym',5).notNullable()
      table.string('luandry',5).notNullable()
      table.timestamps()

      table
      .foreign('havepost_id')
      .references('haveposts.havepost_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 

      table
      .foreign('needpost_id')
      .references('needposts.needpost_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 
    })
  }

  down () {
    this.drop('centrals')
  }
}

module.exports = CentralSchema
