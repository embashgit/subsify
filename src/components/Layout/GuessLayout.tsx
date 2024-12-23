// components/GuestLayout.tsx
import React, { ReactNode } from 'react';
import Header from '../Header';

interface GuestLayoutProps {
  children: ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Header/>
      <main className="flex flex-1 justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default GuestLayout;
