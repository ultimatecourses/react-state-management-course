import React, { useState } from 'react';

export const Status = ({ onEnter }) => {
  let [message, setMessage] = useState('');

  return (
    <input
      type="text"
      value={message}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          onEnter(message);
          setMessage('');
        }
      }}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
};
