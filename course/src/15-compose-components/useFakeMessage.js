import { useEffect } from 'react';
import { useChat } from './useChat';

export const useFakeMessage = ({ message, from = 'Test', timeout = 5000 }) => {
  let { dispatch } = useChat();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'addMessage', message, from });
    }, timeout);
  }, [dispatch, message, from, timeout]);
};
