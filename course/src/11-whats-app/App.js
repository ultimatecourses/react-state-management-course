import React, { useState } from 'react';
import { Message } from './Message';
import { useScrollToBottom } from './useScrollToBottom';
import { useFakeConvo } from './useFakeConvo';
import { Input } from './Input';

const initialMessages = [
  { id: 1, content: 'Hello there!', from: 'me' },
  { id: 2, content: 'How are you doing?', from: 'Steven' },
  { id: 3, content: 'Pretty Good', from: 'me' },
];

export const App = () => {
  let [currentMessage, setCurrentMessage] = useState();
  let [messages, setMessages] = useState(initialMessages);
  let scrollContainer = useScrollToBottom(messages);

  useFakeConvo(setMessages);

  return (
    <div style={styles.wrapper}>
      <div
        ref={(ref) => (scrollContainer.current = ref)}
        style={styles.container}
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <Input
        value={currentMessage}
        onEnter={(content) => {
          setCurrentMessage('');
          setMessages([
            ...messages,
            { id: messages.length + 1, content, from: 'me' },
          ]);
        }}
        onChange={(value) => setCurrentMessage(value)}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
    overflow: 'scroll',
    height: 'max-content',
    flexDirection: 'column',
  },
};
