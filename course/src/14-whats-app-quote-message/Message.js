import React from 'react';
import { useChat } from './useChat';

export const Message = ({ message }) => {
  let { state, dispatch } = useChat();
  return (
    <div style={message.from === 'me' ? styles.sent : styles.received}>
      <div
        style={
          message.id === state.highlightedMessageId
            ? { color: 'red' }
            : undefined
        }
      >
        {message.content}
      </div>
      <div onClick={() => dispatch({ type: 'quoteMessage', id: message.id })}>
        Quote
      </div>
    </div>
  );
};

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  borderRadius: 8,
  padding: 12,
  marginBottom: 6,
  marginTop: 6,
  marginRight: 12,
  marginLeft: 12,
  color: '#FFF',
  width: '80%',
};

const styles = {
  sent: {
    ...container,
    alignSelf: 'flex-end',
  },
  received: {
    ...container,
  },
};
