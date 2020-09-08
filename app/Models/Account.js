'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Account extends Model {
    static get primaryKey(){
        return 'account_id'
    }
    static get createdAtColumn() {
        return null;

    }
    static get updatedAtColumn(){
        return null;
    }

    client(){
        return this.hasMany('App/Models/Client')
    }
}

module.exports = Account
