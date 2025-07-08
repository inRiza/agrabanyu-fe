'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/animated-tooltip/tooltip";
// import Carousel from "@/components/ui/carousel";

const Introduce = () => {
  const profiles = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      },
    ]
  return (
    <div className="guide-main h-screen flex flex-col gap-22 mt-30 relative">
        <Image
            src="/landing-page/farmer.png"
            alt="farmer"
            width={400}
            height={400}
            className="mb-10 absolute right-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-40 rounded-lg z-0"
        />
        <div className="flex gap-34 relative z-10">
            <div className="flex flex-col gap-4">
                <p className="text-6xl font-black text-left capitalize min-w-[700px]">
                    over 50 millions of future assets
                </p>
                <div className="mt-4 flex gap-10 font-bold">
                    <div className="flex flex-col">
                        <p className="text-xl uppercase text-grey-secondary text-left">
                            nearly zero fees
                        </p>
                        <p className="text-4xl text-left shiny-text">
                            0,001%
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl uppercase text-grey-secondary text-left">
                            transaction as low as
                        </p>
                        <p className="text-4xl text-left shiny-text">
                            500ms
                        </p>
                    </div>
                </div>
                <p className="mt-5 mb-8 text-xl text-grey-secondary">
                        Discover high-quality farm land and fishery assets that have been carefully selected and verified 
                        for their reliability and safety. With the support of our trusted agents, every asset is transparently 
                        managed, ensuring a secure and trustworthy investment experience for you.
                </p>
                <p className="text-xl text-grey-secondary font-normal text-left">
                    With over 100+ trusted agents
                </p>
                <div className="flex flex-row">
                    <AnimatedTooltip items={profiles}/>
                </div>
                {/* <button className="mt-4 border-1 border-grey-main bg-white text-black text-lg font-semibold group/btn rounded-lg p-4 relative hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                    Learn More
                    <BottomGradient />
                </button> */}
            </div>
            <div className="flex flex-col text-right w-full">
                {/*Tempat image farmer*/}
            </div>
        </div>
    </div>
  )
}

export default Introduce

const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#75c25a] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
};