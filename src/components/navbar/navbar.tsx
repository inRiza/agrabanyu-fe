'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // 40px = top-10
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    router.push('/loading?redirect=/auth/login');
  };

  return (
    <div className="flex items-center justify-center relative z-50">
      <div
        className={
          `fixed left-0 right-0 mx-auto px-10 py-2 rounded-full transition-all duration-300
          ${scrolled
            ? 'top-4 max-w-xl bg-black/60 border-1 border-grey-main text-white shadow-lg backdrop-blur-lg flex justify-center'
            : 'top-4 w-full bg-transparent border-0 text-white flex justify-between backdrop-blur-0'
          }`
        }
        style={{ maxWidth: scrolled ? '40rem' : '100vw' }}
      >
        <div className={`flex gap-2 items-center text-sm w-full ${scrolled ? 'justify-center text-grey-secondary' : 'justify-between text-white'}`}>
          <div className="flex gap-2">
            <a href="" className="hover:bg-black hover:rounded-lg hover:text-white px-4 py-2">Home</a>
            <a href="" className="hover:bg-black hover:rounded-lg hover:text-white px-4 py-2">About</a>
            <a href="" className="hover:bg-black hover:rounded-lg hover:text-white px-4 py-2">Contact</a>
          </div>
          <button
            onClick={handleLogin}
            className="capitalize px-4 py-2 group/btn relative block rounded-lg bg-transparent border-1 border-grey-main font-medium text-white hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
