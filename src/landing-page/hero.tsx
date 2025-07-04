'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Spotlight } from "@/components/ui/spotlight-new";

const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect ke halaman loading terlebih dahulu
    router.push("/loading?redirect=/auth/login");
  };

  return (
    <div className="guide-main h-screen flex flex-col items-center justify-center">
        <Spotlight></Spotlight>
        <p className="title uppercase text-center px-50 shiny-text">
            invest on land or water with ease and secure
        </p>
        <p className="mt-5 subtitle capitalize text-center px-50 shiny-text">
            invest easily using any cryptocurrency and helping you to secure your transaction using web3 technology
        </p>
        <div className="flex gap-6">
            <button 
                onClick={handleGetStarted}
                className="mt-10 button-main hover-bg-glow uppercase px-10 py-3 cursor-pointer hover:scale-105 transform"
            >
                Get Started
            </button>
            <button className="mt-10 button-submain uppercase px-10 py-3 font-base cursor-pointer">Learn More</button>
        </div>
        <Image 
            src="/landing-page/bg-farmer.png" 
            alt="farmer1" 
            width={1080} 
            height={1080} 
            className="absolute bottom-0 w-full -z-10 object-cover object-bottom opacity-5 blur-[0.5px]"
            priority
            quality={100}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent -z-5"></div>
    </div>
  )
}

export default Hero