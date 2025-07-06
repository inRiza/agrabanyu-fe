"use client";
import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { useRouter, usePathname } from 'next/navigation';
import { ProgressSteps } from '@/components/ui/progress-steps';
import { profileSteps } from '@/constants/profile-steps';

export default function ChooseRolePage() {
  const router = useRouter();
  const handleClick = (role: string) => {
    router.push(`/profile-step/wallet?role=${role}`);
  }

  const pathname = usePathname();
  const currentStepId = pathname.split("/").pop();
  const steps = profileSteps.map(( step, idx ) => ({
    ...step,
    isCompleted: profileSteps.findIndex(s => s.id === currentStepId) > idx,
    isActive: step.id === currentStepId,
  }));

  return (
    <div className="flex flex-col items-center justify-center mt-8">
        <ProgressSteps steps={steps} className="mb-10"/>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-110">
            <CardSpotlight onClick={() => handleClick("investor")} className="row-span-2 flex flex-col gap-4 w-120 bg-transparent cursor-pointer" backgroundImage="/role/investor.jpg">
                <p className="text-6xl font-bold relative z-10 shiny-text">Investor</p>
                <div className="flex flex-col gap-6 relative z-10">
                    <p className="text-md font-light">
                        Invest by buying or selling shares of assets and monitor the best RWA you can find based on farm or fishery
                    </p>
                    <div className="flex">
                        <button className="border-1 border-grey-main font-light group/btn rounded-lg py-2 px-6 relative cursor-pointer">
                            Learn More
                            <BottomGradient />
                        </button>
                    </div>
                </div>
            </CardSpotlight>
            <CardSpotlight onClick={() => handleClick("farmer")} className="flex flex-col gap-4 w-120 bg-transparent" backgroundImage="/role/farmer.jpg">
                <p className="text-4xl font-bold relative z-10 shiny-text">Farmer</p>
                <div className="flex flex-col gap-6 relative z-10">
                    <p className="text-sm font-light">
                        Sell your assets as farmer with our trusted agent and secure your assets
                    </p>
                    <div className="flex">
                        <button className="border-1 border-grey-main text-sm font-light group/btn rounded-lg py-1 px-4 relative cursor-pointer">
                            Learn More
                            <BottomGradient />
                        </button>
                    </div>
                </div>
            </CardSpotlight>
            <CardSpotlight onClick={() => handleClick("fisher")} className="col-start-2 flex flex-col gap-4 w-120 bg-transparent" backgroundImage="/role/fisher.jpg">
                <p className="text-4xl font-bold relative z-10 shiny-text">Fisher</p>
                <div className="flex flex-col gap-6 relative z-10">
                    <p className="text-sm font-light">
                        Sell your assets as fisher with our trusted agent and secure your assets
                    </p>
                    <div className="flex">
                        <button className="border-1 border-grey-main text-sm font-light group/btn rounded-lg py-1 px-4 relative cursor-pointer">
                            Learn More
                            <BottomGradient />
                        </button>
                    </div>
                </div>
            </CardSpotlight>
        </div>
    </div>
  )
}

const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#75c25a] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
};

