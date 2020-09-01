import React from 'react';
import { useChat } from './useChat';

export const ChatMessage = ({ message }) => {
  let { state, dispatch } = useChat();

  return (
    <Message
      message={message}
      isHighlighted={message.id === state.highlightedMessageId}
      onQuoteClicked={() => dispatch({ type: 'quoteMessage', id: message.id })}
    />
  );
};

export const Message = ({ message, isHighlighted, onQuoteClicked }) => {
  return (
    <div style={message.from === 'me' ? styles.sent : styles.received}>
      <div style={isHighlighted ? { color: 'red' } : undefined}>
        {message.content}
      </div>
      {onQuoteClicked ? <div onClick={onQuoteClicked}>Quote</div> : null}
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
