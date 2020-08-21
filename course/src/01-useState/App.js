import React, { useState } from 'react';
import { Status } from './Status';

export const App = () => {
  let [messages, setMessages] = useState(['test', 'test2']);

  return (
    <div>
      <Status onEnter={(value) => setMessages([value, ...messages])} />
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
};
