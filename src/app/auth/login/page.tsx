'use client'
import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("Form Submitted", email,);
  };
  

  return (
    <div className="flex justify-between items-center h-screen">
        <div className="w-1/2 h-full">
            <p className="title">Welcome to Agrabanyu</p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <Input id="username" placeholder="Your name..." type="text"/>
                </div>
            </form>
        </div>
        <div className="w-1/2 h-full">

        </div>
    </div>
  )
}