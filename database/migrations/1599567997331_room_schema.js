'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments('room_id')

      table.integer('havepost_id').unsigned()
      table.integer('needpost_id').unsigned()

      table.string('air_conditioner',5).notNullable()
      table.string('number_of_toilet',5).notNullable()
      table.string('number_of_bedroom',5).notNullable()
      table.string('pets',5).notNullable()
      table.string('smoking',5).notNullable()
      table.string('internet_wifi',5).notNullable()
      table.string('furniture',5).notNullable()
      table.string('water_heater',5).notNullable()
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
    this.drop('rooms')
  }
}

module.exports = RoomSchema
