import { useEffect } from 'react';

export const useFakeMessage = ({
  setMessages,
  message,
  from = 'Test',
  timeout,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { id: messages.length + 1, content: message, from },
      ]);
    }, timeout || 5000);
  }, [message, from, setMessages, timeout]);
};
