import React from 'react';
import { useTodos } from './useTodos';

export const App = () => {
  let [state, send] = useTodos();
  return (
    <div>
      <input
        type="text"
        value={state.context.todo}
        onChange={(e) => send('TODO.TYPING', e.target)}
        onKeyUp={(e) => (e.keyCode === 13 ? send('TODOS.ADD', e.target) : null)}
      />
      <ul>
        {state.context.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
