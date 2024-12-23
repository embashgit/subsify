// components/AuthLayout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Sidebar from '../SideBar';
import Footer from '../Footer';
interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title = 'SubsTrack' }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Subscription tracking dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
