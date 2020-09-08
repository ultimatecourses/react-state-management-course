import React from 'react';
import { RecoilRoot } from 'recoil';
import { usePageState } from './usePageState';

const pages = ['Home', 'About'];
const Navbar = () => {
  let [page, setPage] = usePageState();
  return (
    <ul>
      {pages.map((name) => (
        <li
          key={name}
          onClick={() => setPage(name)}
          style={{ color: page === name ? 'red' : 'black' }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

const BlogPost = () => {
  console.log('rendering blog post');
  return <div>Here's a blog post</div>;
};

const Footer = () => {
  let [page] = usePageState();
  return <div>This is the footer for {page}</div>;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <Footer />
    </div>
  );
};

export const AppContainer = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};
