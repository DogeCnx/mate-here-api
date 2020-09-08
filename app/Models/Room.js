'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {
    static get primaryKey(){
        return 'room_id'
    }
    static get createdAtColumn() {
        return null;

    }
    static get updatedAtColumn(){
        return null;
    }
    havepost(){
        return this.belongsTo('App/Models/Havepost')
    }
    needpost(){
        return this.belongsTo('App/Models/Needpost')
    }
}

module.exports = Room
