"use client";
import { usePathname } from "next/navigation";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { profileSteps } from "@/constants/profile-steps";

export default function WalletPage() {
    const pathname = usePathname();

    // Ambil id step dari pathname
    const currentStepId = pathname.split("/").pop();
    const steps = profileSteps.map((step, idx) => ({
        ...step,
        isCompleted: profileSteps.findIndex(s => s.id === currentStepId) > idx,
        isActive: step.id === currentStepId,
    }));

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <ProgressSteps steps={steps}/>
            
        </div>
    )
}