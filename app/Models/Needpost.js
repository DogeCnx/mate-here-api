'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Needpost extends Model {
    static get primaryKey(){
        return 'needpost_id'
    }
    static get createdAtColumn() {
        return null;

    }
    static get updatedAtColumn(){
        return null;
    }
    client(){
        return this.belongsTo('App/Models/Client')
    }
    central(){
        return this.hasMany('App/Models/Central')
    }
    room(){
        return this.hasMany('App/Models/Room')
    }
}

module.exports = Needpost
