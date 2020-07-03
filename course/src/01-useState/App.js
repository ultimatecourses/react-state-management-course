import React, { useState } from 'react';
import { StatusField } from './StatusField';

export const App = () => {
  let [messages, setMessages] = useState([]);
  console.log(messages);
  return (
    <div>
      <StatusField onEnter={(value) => setMessages([value, ...messages])} />

      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};
