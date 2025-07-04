'use client'
import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/"); // Pemilihan role
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    router.push("/auth/signup");
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md flex flex-col items-center">
            <p className="subtitle text-4xl shiny-text text-center">Welcome to Agrabanyu</p>
            <p className="text-center text-sm shiny-text mt-2 mb-10">Please enter your details to login</p>

            {error && (
              <div className="w-full mb-4 p-3 bg-red-500/10 border border-red/500/20 rounded-lg">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}
            
            <form className="w-full" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-6">
                <Label htmlFor="email">Your Full Name</Label>
                <Input id="email" placeholder="John Doe" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-6">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="agrabanyu@gmail.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-6">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" />
              </LabelInputContainer>
              <button
                disabled={isLoading}
                className="mb-6 group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
                type="submit"
              >
                {isLoading ? "Logging in..." : "Login"} &rarr;
                <BottomGradient />
              </button>
              <div className="separator"/>
              <p onClick={handleSignUp} className="text-grey-main mb-4 hover:underline hover:text-white transition-all duration-500 capitalize text-center cursor-pointer">still doesn&apos;t have an account?</p>
            </form>
        </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};