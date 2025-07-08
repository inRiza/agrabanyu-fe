'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Spotlight } from "@/components/effect/spotlight";

const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect ke halaman loading terlebih dahulu
    router.push("/loading?redirect=/auth/login");
  };

  return (
    <div className="guide-main h-screen flex flex-col items-center justify-center">
        <Spotlight></Spotlight>
        <p className="title uppercase text-center px-30 relative z-10">
            invest on land or water with ease and secure
        </p>
        <p className="mt-5 subtitle capitalize text-center px-50 relative z-10">
            invest easily using any cryptocurrency and helping you to secure your transaction using web3 technology
        </p>
        <div className="flex gap-6 relative z-20 mt-10">
            <button 
                onClick={handleGetStarted}
                className="capitalize px-10 py-3 group/btn relative block h-12 rounded-md bg-gradient-to-br from-green-main to-green-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
                get started
            </button>
            <button
                className="capitalize group/btn relative block h-12 px-10 py-3 rounded-md border-1 border-grey-main bg-transparent backdrop-blur-2xl font-normal text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] cursor-pointer"
              >
                learn more
                <BottomGradient />
              </button>
        </div>
        <Image 
            src="/landing-page/bg-farmer.png" 
            alt="farmer1" 
            width={1080} 
            height={1080} 
            className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom opacity-10 z-0"
            priority
            quality={100}
        />
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
    </div>
  )
}

export default Hero

const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#75c25a] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
};