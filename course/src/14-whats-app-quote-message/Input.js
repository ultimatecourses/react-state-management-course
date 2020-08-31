import React from 'react';
import { useChat } from './useChat';

export const Input = () => {
  let { state, dispatch } = useChat();
  return (
    <textarea
      style={{ padding: 12 }}
      value={state.currentMessage}
      onChange={(e) =>
        dispatch({ type: 'setCurrentMessage', message: e.target.value })
      }
      onKeyUp={(e) =>
        e.keyCode === 13
          ? dispatch({ type: 'addMessage', message: e.target.value })
          : null
      }
    />
  );
};
