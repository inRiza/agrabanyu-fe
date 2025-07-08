import React from 'react';
import { GlowingEffect } from "@/components/effect/glowing-effect";
import Image from 'next/image';

interface GoalProps {
    area: string;
    image?: string;
    title: string;
    description: string;
}

const GoalCard = ({ area, image, title, description} : GoalProps) => {
    return (
        <li className={`min-h-2 list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    {image && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out">
                            <Image
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    )}
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="space-y-3">
                        <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                            {title}
                        </h3>
                        <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                            {description}
                        </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

const Goals = () => {
  return (
    <div className="guide-main mt-10 mb-20 flex flex-col gap-2">
        <div className="flex justify-between gap-62">
            <div className="flex flex-col gap-2 text-left">
                <p className="uppercase shiny-text text-lg font-semibold">
                    our
                </p>
                <p className="capitalize font-bold text-7xl">
                    values
                </p>
            </div>
            <p className="text-grey-secondary text-xl mt-5">
                Agrabanyu is a platform that provide a solution to lead investors to their 
                best agriculture and marine assets destination with a planful journey and trusted service
            </p>
        </div>
        <ul className="mt-10 grid grid-cols-3 grid-rows-5 gap-4">
            <GoalCard
                area="col-span-2 row-span-3 hover:-translate-y-1 transition-transform duration-500"
                title="Lorem Ipsum De Sit Amet"
                description="Lorom"
            />
            <GoalCard
                area="col-start-3 row-span-3 hover:-translate-y-1 transition-transform duration-500"
                title="Lorem Ipsum De Sit Amet"
                description="Lorom"
            />
            <GoalCard
                area="row-start-4 row-span-2 hover:translate-y-1 transition-transform duration-500"
                title="Lorem Ipsum De Sit Amet"
                description="Lorom"
            />
            <GoalCard
                area="row-span-2 col-span-2 hover:translate-y-1 transition-transform duration-500"
                title="Lorem Ipsum De Sit Amet"
                description="Lorom"
            />
        </ul>
    </div>
  )
}

export default Goals