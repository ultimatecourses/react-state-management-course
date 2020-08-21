import { useFakeMessage } from './useFakeMessage';

export const useFakeConvo = (dispatch) => {
  useFakeMessage({ dispatch, message: 'That is cool!', timeout: 1000 });
  useFakeMessage({
    dispatch,
    message: 'I know right?',
    from: 'me',
    timeout: 3000,
  });

  useFakeMessage({
    dispatch,
    message: 'So what should we do now....',
  });
  useFakeMessage({
    dispatch,
    message: 'So what should we do now....',
  });

  useFakeMessage({
    dispatch,
    message: 'So what should we do now....',
  });

  useFakeMessage({
    dispatch,
    message: 'So what should we do now....',
  });

  useFakeMessage({
    dispatch,
    message: 'I guess we should test scroll positioning',
    from: 'me',
    timeout: 9000,
  });
};
