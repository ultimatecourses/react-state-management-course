import React from 'react';
import { useTodos } from './useTodos';

export const AppContainer = () => {
  let [state, send] = useTodos();

  return (
    <div>
      <input
        type="text"
        value={state.context.todo}
        onKeyUp={(e) => (e.keyCode === 13 ? send('TODOS.ADD', e.target) : null)}
        onChange={(e) => send('TODO.TYPING', e.target)}
      />
      <ul>
        {state.context.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
