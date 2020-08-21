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
        currentMessage: '',
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
    default:
      return state;
  }
};

export const useChatReducer = () =>
  useReducer(reducer, { messages: initialMessages });
