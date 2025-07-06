"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ProgressSteps {
    id: string;
    title: string;
    isCompleted: boolean;
    isActive: boolean;
}

interface ProgressStepsProps {
    steps: ProgressSteps[];
    className?: string;
}

export const ProgressSteps = ({ steps, className } : ProgressStepsProps) => {
    return (
        <div className={cn("flex items-center justify-center w-full", className)}>
            <div className="flex items-center gap-4">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center">
                            <div
                                className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                                    {
                                        "bg-green-main text-white": step.isCompleted,
                                        "border-green-main": step.isActive && !step.isCompleted,
                                        "bg-transparent border-grey-main text-grey-main": !step.isCompleted && !step.isActive,
                                        "ring-4 ring-green-200": step.isActive,
                                    }
                                )}
                            >
                                {step.isCompleted ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                    </svg>
                                ) : (
                                    <span className={cn("text-lg font-semibold", {
                                        "text-green-main": step.isActive && !step.isCompleted,
                                        "text-grey-main": !step.isActive && !step.isCompleted,
                                    })}>
                                        {index + 1}
                                    </span>
                                )}
                            </div>

                            <div className="mt-2 text-center">
                                <p className={cn("text-sm font-medium transition-colors duration-500", {
                                    "text-green-main": step.isCompleted || step.isActive,
                                    "text-grey-main": !step.isCompleted && !step.isActive,
                                })}>
                                    {step.title}
                                </p>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={cn(
                                "w-16 h-0.5 mb-5 rounded transition-all duration-500",
                                {
                                    "bg-green-main": step.isCompleted,
                                    "bg-grey-main": !step.isCompleted,
                                }
                            )}/>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
