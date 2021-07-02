import openSocket from "socket.io-client";

class SocketIO {
  constructor() {
    this.socket = openSocket('http://localhost:3500');
  }
  init(chat, appendChat) {
    this.socket.on('chat-message', data => {
      appendChat([...chat, data.name + ": " + data.message])
    })
    this.socket.on('user-connected', name => {
      appendChat([...chat, name + ' has been connected'])
    })
  }
  sendUsername(username) {
    this.socket.emit('new-user', username)
  }
  sendMessage(message, setMessage) {
    this.socket.emit('send-chat-message', message)
    setMessage('');
  }
}

export const socketIO = new SocketIO();