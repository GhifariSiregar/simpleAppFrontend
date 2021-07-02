import React, { useState } from 'react';
import { Container, Alert, Input, FormGroup, Button, Label } from "reactstrap";
import { socketIO } from "./socket";

function ChatApp() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [chat, appendChat] = useState([]);
  socketIO.init(chat, appendChat);

  return (
    <div>
      <Container>
        {chat.map((chatContent, index) => {
          return (
            <Alert key={index}>{chatContent}</Alert>
          )
        })}
      </Container>
      <FormGroup>
        <Label>Username: </Label>
        <Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button type='button' onClick={() => socketIO.sendUsername(username)}>Set Username</Button>
        <Input type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button type='button' onClick={() => {socketIO.sendMessage(message, setMessage)}}>Send</Button>
      </FormGroup>
    </div>
  )
}

export default ChatApp;