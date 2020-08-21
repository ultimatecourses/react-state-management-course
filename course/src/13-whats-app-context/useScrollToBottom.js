import { useRef, useEffect } from 'react';
import { useChat } from './useChat';

export const useScrollToBottom = (messages) => {
  let scrollContainer = useRef();
  let { state } = useChat();

  useEffect(() => {
    if (!scrollContainer?.current) return;

    scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
  }, [state.messages]);

  return scrollContainer;
};
