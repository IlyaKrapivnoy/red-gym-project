import React, { ReactChild } from 'react';
import Header from '../Header';

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Header onLoginClick={() => console.log('submit')} />
      {children}
    </>
  );
};

export default Layout;
