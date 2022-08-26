import React, { ReactChild } from 'react';
import Header from '../Header';

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
