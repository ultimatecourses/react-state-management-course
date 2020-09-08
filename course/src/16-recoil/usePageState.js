import { atom, useRecoilState } from 'recoil';

const pageState = atom({
  key: 'pageState',
  default: 'Home',
});

export const usePageState = () => useRecoilState(pageState);
