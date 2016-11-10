'use strict'

const Schema = use('Schema')

class ChatsTableSchema extends Schema {

  up () {
    this.create('chats', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('chats')
  }

}

module.exports = ChatsTableSchema
