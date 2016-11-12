'use strict'
const Pusher = require('pusher')
const Chat = use('App/Model/Chat')


class ChatsController {

  * index(request, response) {
    var chats = yield Chat.query().orderBy('id','desc')
    yield response.sendView('chats', {
      chats: chats
    })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {

    var message = request.input('message')

    var pusher = new Pusher({
      appId: '269492',
      key: '862cd8dd1e4168d6ec7b',
      secret: '2d5d010b315df9453c97',
      encrypted: true
    })

    // pusher.trigger('test_channel', 'my_event', {
    pusher.trigger('chat_app', 'new_chat', {
      message: message
    })
    response.json(true)
    // save the message to your Chat model here...
    var chat = new Chat()
       chat.message = message
       yield chat.save()

  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = ChatsController
