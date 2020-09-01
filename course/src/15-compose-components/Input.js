import React from 'react';
import { useChat } from './useChat';

export const ChatInput = () => {
  let { state, dispatch } = useChat();

  return (
    <Input
      value={state.currentMessage}
      onChange={(e) =>
        dispatch({ type: 'setCurrentMessage', message: e.target.value })
      }
      onEnter={(e) => dispatch({ type: 'addMessage', message: e.target.value })}
    />
  );
};

export const Input = ({ value, onChange, onEnter }) => {
  return (
    <textarea
      style={{ padding: 12 }}
      value={value}
      onChange={onChange}
      onKeyUp={(e) => (e.keyCode === 13 ? onEnter(e) : null)}
    />
  );
};
