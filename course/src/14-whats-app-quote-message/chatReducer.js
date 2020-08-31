import { useReducer } from 'react';

const initialMessages = [
  { id: 1, content: 'Hello there!', from: 'me' },
  { id: 2, content: 'How are you doing?', from: 'Steven' },
  { id: 3, content: 'Pretty Good', from: 'me' },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'setMessages':
      return { ...state, messages: action.messages };
    case 'addMessage':
      return {
        ...state,
        highlightedMessageId: '',
        currentMessage: action.from === 'me' ? '' : state.currentMessage,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            content: action.message,
            from: action.from,
          },
        ],
      };
    case 'setCurrentMessage':
      return { ...state, currentMessage: action.message };
    case 'quoteMessage':
      let quotedMessage = state.messages.find(
        (message) => message.id === action.id,
      );

      return {
        ...state,
        currentMessage: `"${quotedMessage.content}" `,
        highlightedMessageId: action.id,
      };
    default:
      return state;
  }
};

export const useChatReducer = () =>
  useReducer(reducer, { messages: initialMessages });
