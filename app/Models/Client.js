'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    static get primaryKey(){
        return 'client_id'
    }
    static get createdAtColumn() {
        return null;

    }
    static get updatedAtColumn(){
        return null;
    }
    user(){
        return this.belongsTo('App/Models/User')
    }
    havepost(){
        return this.hasMany('App/Models/Havepost')
    }
    needpost(){
        return this.hasMany('App/Models/Needpost')
    }
}

module.exports = Client
