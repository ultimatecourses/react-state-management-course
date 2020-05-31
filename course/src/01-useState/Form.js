import React, { useState } from 'react';

export const Form = () => {
  let [currentMessage, setCurrentMessage] = useState('');
  let [messages, setMessages] = useState([]);

  return (
    <div>
      <div>
        Hello! This is my amazing social network that I hope you love :){' '}
      </div>

      <input
        type="text"
        name="status"
        placeholder="Status"
        value={currentMessage}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setCurrentMessage('');
            setMessages([currentMessage, ...messages]);
          }
        }}
        onChange={(event) => setCurrentMessage(event.target.value)}
      />

      <h3>From around the world...</h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};
