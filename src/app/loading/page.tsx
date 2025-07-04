'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const LoadingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirectTo = searchParams.get('redirect') || '/auth/login';
    
    const timer = setTimeout(() => {
      router.push(redirectTo);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return (
    <div className="guide-main h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="subtitle shiny-text">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export default LoadingPage;