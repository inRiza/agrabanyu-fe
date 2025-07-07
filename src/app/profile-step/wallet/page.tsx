"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { profileSteps } from "@/constants/profile-steps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Type definitions for ICP
declare global {
    interface Window {
        ic?: {
            plug?: {
                requestConnect: () => Promise<boolean>;
                principalId: Promise<string>;
                isConnected: () => Promise<boolean>;
                disconnect: () => Promise<void>;
            };
        };
    }
}

export default function WalletPage() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isConnecting, setIsConnecting] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState("");

    // Ambil id step dari pathname
    const currentStepId = pathname.split("/").pop();
    const role = searchParams.get("role");

    const steps = profileSteps.map((step, idx) => ({
        ...step,
        isCompleted: profileSteps.findIndex(s => s.id === currentStepId) > idx,
        isActive: step.id === currentStepId,
    }));

    // Cek Internet Identity
    const checkInternetIdentity = () => {
        return typeof window !== "undefined" && window.ic?.plug;
    };

    const connectICPWallet = async () => {
        setIsConnecting(true);
        setError("");
        try {
            if (checkInternetIdentity()) {
                const connected = await window.ic!.plug!.requestConnect();
                if (connected) {
                    const principal = await window.ic!.plug!.principalId;
                    setWalletAddress(principal);
                    setIsConnected(true);
                }
            } else {
                setError("Please install Internet Identity extension or enter wallet address manually");
            }
        } catch (e) {
            console.error("Failed to connect to ICP wallet:", e);
            setError("Failed to connect to ICP wallet. Please try again.");
        } finally {
            setIsConnecting(false);
        }
    };

    const handleWalletAddressChange = (address: string) => {
        setWalletAddress(address);
        setIsConnected(address.length > 0);
        setError("");
    };

    const saveWalletToDatabase = async () => {
        setIsSaving(true);
        try {
            const response = await fetch("/api/wallet/connect", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    walletAddress,
                    walletType: "ICP",
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to save wallet information");
            }

            return true;
        } catch (e) {
            console.error("Failed to save wallet:", e);
            setError("Failed to save wallet information. Please try again.");
            return false;
        } finally {
            setIsSaving(false);
        }
    };

    const handleSubmit = async () => {
        if (isConnected && walletAddress) {
            const saved = await saveWalletToDatabase();
            if (saved) {
                router.push(`/profile-step/setup?role=${role}&wallet=${walletAddress}`);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <ProgressSteps steps={steps} className="mb-10"/>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col text-center min-w-md gap-2">
                    <h2 className="text-2xl font-bold shiny-text">Connect Your Wallet</h2>
                    <p className="shiny-text">Choose your preferred wallet to continue</p>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-red-400 text-sm text-center">{error}</p>
                    </div>
                )}

                {/* ICP Wallet Connection */}
                <div className="space-y-4">
                    <button
                        onClick={connectICPWallet}
                        disabled={isConnecting}
                        className="w-full group/btn relative block h-12 rounded-md bg-gradient-to-br from-green-main to-green-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] cursor-pointer disabled:opacity-50"
                    >
                        {isConnecting ? "Connecting..." : "Connect ICP Wallet"}
                        <BottomGradient />
                    </button>
                    <div className="flex flex-col gap-2 mt-10">
                        <Label htmlFor="walletAddress">Or enter wallet address manually</Label>
                        <Input
                            id="walletAddress"
                            placeholder="Enter your wallet address"
                            value={walletAddress}
                            onChange={(e) => handleWalletAddressChange(e.target.value)}
                        />
                    </div>
                    {/* Continue Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={!isConnected || isSaving}
                        className="mt-6 disabled:opacity-20 disabled:cursor-not-allowed group/btn group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
                    >
                        {isSaving ? "Saving..." : "Continue"}
                        <BottomGradient />
                    </button>
                    {isConnected && (
                        <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <p className="text-green-400 text-xs text-center">
                                Wallet Connected
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#75c25a] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};