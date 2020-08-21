import React from 'react';
import { Message } from './Message';
import { Input } from './Input';
import { useFakeConvo } from './useFakeConvo';
import { useScrollToBottom } from './useScrollToBottom';
import { useChatReducer } from './chatReducer';

export const App = () => {
  let [state, dispatch] = useChatReducer();

  useFakeConvo(dispatch);

  let scrollRef = useScrollToBottom(state.messages);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container} ref={(ref) => (scrollRef.current = ref)}>
        {state.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <Input
        value={state.currentMessage}
        onChange={(message) => dispatch({ type: 'setCurrentMessage', message })}
        onEnter={(message) => dispatch({ type: 'addMessage', message })}
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
