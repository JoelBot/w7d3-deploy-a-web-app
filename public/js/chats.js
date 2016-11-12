// find input field to variable
var messages = document.getElementById('messageInput')
// event listener on input field
messages.addEventListener('keypress', enter)
// even listener calls this function and looks for enter key press
function enter(e) {
  if (e.key === 'Enter') {
    postChatMessage() // fires off post message function
  }
}
// fetch to end point with post of messages field value.
function postChatMessage() {
  var messageHolder = messages.value // grab input value and reset accordingly
  messages.value = ''

  fetch('/chats', { // Update this
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({message: messageHolder})
  })
  .then(response => console.log(response))
}

// Pusher Setup
var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})

var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
})

function addChatMessage(inboundMessage) {

  // console.log(inboundMessage)
  var li = document.createElement('li')
  li.innerHTML = inboundMessage.message
  li.classList.add("list-group-item")
  document.querySelector('#messages').prepend(li)

}
