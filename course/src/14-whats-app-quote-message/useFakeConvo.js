import { useFakeMessage } from './useFakeMessage';

export const useFakeConvo = () => {
  useFakeMessage({ message: 'That is cool!', timeout: 1000 });
  useFakeMessage({
    message: 'I know right?',
    from: 'me',
    timeout: 3000,
  });

  useFakeMessage({
    message: 'So what should we do now....',
  });
  useFakeMessage({
    message: 'So what should we do now....',
  });

  useFakeMessage({
    message: 'So what should we do now....',
  });

  useFakeMessage({
    message: 'So what should we do now....',
  });

  useFakeMessage({
    message: 'I guess we should test scroll positioning',
    from: 'me',
    timeout: 9000,
  });
};
