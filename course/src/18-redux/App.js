import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

export const App = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todos);

  return (
    <div>
      <input
        type="text"
        value={todoState.todo}
        onChange={(e) =>
          dispatch({ type: 'TODO_TYPING', todo: e.target.value })
        }
        onKeyUp={(e) =>
          e.keyCode === 13
            ? dispatch({ type: 'ADD_TODO', todo: e.target.value })
            : null
        }
      />
      <ul>
        {todoState.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
