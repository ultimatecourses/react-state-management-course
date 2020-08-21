import { useEffect } from 'react';

export const useFakeMessage = ({
  setMessages,
  message,
  from = 'Test',
  timeout = 5000,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { id: messages.length + 1, content: message, from },
      ]);
    }, timeout);
  }, [setMessages, message, from, timeout]);
};
