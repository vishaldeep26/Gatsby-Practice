import * as React from 'react';
import type { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-full m-auto w-full">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
