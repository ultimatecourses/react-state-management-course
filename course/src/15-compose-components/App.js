//make Message and ChatMessage components in the file, so that message is generic
// do the same thing for the input component
import React from 'react';
import { ChatMessage } from './Message';
import { ChatInput } from './Input';
import { useFakeConvo } from './useFakeConvo';
import { useScrollToBottom } from './useScrollToBottom';
import { ChatProvider, useChat } from './useChat';

export const App = () => {
  let { state } = useChat();

  useFakeConvo();

  let scrollRef = useScrollToBottom();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container} ref={(ref) => (scrollRef.current = ref)}>
        {state.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export const AppContainer = () => {
  return (
    <ChatProvider>
      <App />
    </ChatProvider>
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
