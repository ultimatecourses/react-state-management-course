import React from 'react';

export const Message = ({ message }) => {
  return (
    <div style={message.from === 'me' ? styles.sent : styles.received}>
      <div>{message.content}</div>
    </div>
  );
};

const container = {
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
