import React from 'react';
import { Footer } from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
