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
      table.integer('amount_of_mate',7).notNullable()
      table.string('location',250).notNullable()
      table.string('faculty',30).notNullable()
      table.string('faculty_mate',30).notNullable()
      table.string('habit',250).notNullable()
      table.string('habit_mate',250).notNullable()
      table.string('routine',250).notNullable()
      table.string('like_thing',150).notNullable()
      table.string('dislike',150).notNullable()
      table.string('other_information',250).notNullable()
      table.string('status_post',10).notNullable()
      table.integer('client_id').unsigned()
      table.string('parking',5).notNullable()
      table.string('lift',5).notNullable()
      table.string('keycard',5).notNullable()
      table.string('security',5).notNullable()
      table.string('pool',5).notNullable()
      table.string('gym',5).notNullable()
      table.string('luandry',5).notNullable()
      table.string('air_conditioner',5).notNullable()
      table.string('number_of_toilet',5).notNullable()
      table.string('number_of_bedroom',5).notNullable()
      table.string('pets',5).notNullable()
      table.string('smoking',5).notNullable()
      table.string('internet_wifi',5).notNullable()
      table.string('furniture',5).notNullable()
      table.string('water_heater',5).notNullable()
      table.string('cover_img_url', 255).notNullable(),
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
