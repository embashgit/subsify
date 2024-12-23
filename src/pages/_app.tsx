// pages/_app.tsx
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import AuthLayout from '@/components/Layout/AuthLayout'
import GuestLayout from '@/components/Layout/GuessLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Simulating authentication status (You can replace this logic with real authentication)
  const [isAuth, setIsAuth] = useState(false); // Replace with actual auth logic
  
  useEffect(() => {
    // Simulating authentication check (replace this with actual API call or auth check logic)
    const authenticated = localStorage.getItem('isAuthenticated'); // example logic
    setIsAuth(authenticated !== 'true');
  }, []);

  return (
    <>
      {isAuth ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <GuestLayout>
          <Component {...pageProps} />
        </GuestLayout>
      )}
    </>
  );
}

export default MyApp;
