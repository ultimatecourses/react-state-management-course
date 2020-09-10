import { useMachine } from '@xstate/react';
import { Machine, assign } from 'xstate';

const todosMachine = Machine({
  id: 'todos',
  context: {
    todo: '',
    todos: ['first item'],
  },
  initial: 'initializing',
  states: {
    initializing: {
      actions: {
        todos: (ctx) => ctx.todos,
      },
    },
  },
  on: {
    'TODO.TYPING': {
      actions: assign({ todo: (ctx, target) => target.value }),
    },
    'TODOS.ADD': {
      actions: assign({
        todo: '',
        todos: (ctx, target) => [...ctx.todos, target.value],
      }),
      cond: (ctx, target) => target.value.trim().length,
    },
  },
});

export const useTodos = () => useMachine(todosMachine);
