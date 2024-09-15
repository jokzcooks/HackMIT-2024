import React, { useState } from 'react';
import "./chat.css"

const ChatBox = () => {
  const [messages, setMessages] = useState([""]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  const handleBotResponse = () => {
    // Simulate a bot response with a delay
    setTimeout(() => {
      setMessages([...messages, { sender: 'bot', text: 'Hello there!' }]);
    }, 1000);
  };

  return (
    <div className="chat-box">
      <div className="chat-history">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;