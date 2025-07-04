'use client';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/loading?redirect=/auth/login');
  };

  return (
    <div className="flex items-center justify-center relative z-50">
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 px-10 py-2 bg-transparent backdrop-blur-2xl border-1 border-grey-main rounded-full">
            <div className="flex gap-2 items-center text-sm text-grey-secondary">
                <a href="" className="hover:bg-black hover:rounded-lg hover:text-white px-4 py-2">Home</a>
                <a href="" className="hover:bg-black hover:rounded-lg hover:text-white px-4 py-2">About</a>
                <a href="" className="hover:bg-black hover:rounded-lg hover:text-white px-4 py-2">Contact</a>
                <button onClick={handleLogin} className="button-main px-4 py-2 font-light hover-bg-glow cursor-pointer">Login</button>
            </div>
         </div>
    </div>
  )
}
