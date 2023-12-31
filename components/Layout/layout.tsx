import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
    children: ReactNode;
}
  
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main  style={{paddingTop:'4.0rem' }}>{children}</main>
      <br/>
      <Footer />
    </div>
  );
};

