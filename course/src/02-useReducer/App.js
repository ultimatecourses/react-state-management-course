import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'buttonClick':
      return { ...state, count: state.count + 1 };
    case 'setUsername':
      return { ...state, username: action.username };
    default:
      return state;
  }
};

export const App = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0, username: '' });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'buttonClick' })}>
        Click me
      </button>
      current count is {state.count}
      <input
        type="text"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: 'setUsername', username: e.target.value })
        }
      />
      Your current username is {state.username}
    </div>
  );
};
