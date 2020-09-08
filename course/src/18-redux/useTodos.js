import { useDispatch } from 'react-redux';

export const useAddTodo = () => {
  const dispatch = useDispatch();

  return (todo) => dispatch({ type: 'ADD_TODO', todo });
};
