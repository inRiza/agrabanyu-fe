"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar/sidebar";
import {
    IconBrandTabler,
    IconSettings,
    IconArrowLeft,
    IconAbacus,
} from "@tabler/icons-react";

export default function FarmerDashboardPage()  {
  const links = [
    {
        label: "Main",
        href: "#",
        icon: (
            <IconBrandTabler className="h-6 w-6 shrink-0 text-grey-secondary hover:text-grey-third duration-500"/>
        ),
    },
    {
        label: "Analytics",
        href: "#",
        icon: (
            <IconAbacus className="h-6 w-6 shrink-0 text-grey-secondary hover:text-grey-third duration-500"/>
        ),
    },
    {
        label: "Settings",
        href: "#",
        icon: (
            <IconSettings className="h-6 w-6 shrink-0 text-grey-secondary hover:text-grey-third duration-500"/>
        ),
    },
    {
        label: "Logout",
        href: "#",
        icon: (
            <IconArrowLeft className="h-6 w-6 shrink-0 text-grey-secondary hover:text-grey-third duration-500"/>
        ),
    },
  ];

  const [open, setOpen] = useState(false);

  const user = {
    name: undefined, 
    image: undefined,
  };

  const displayName = user.name || 'User';
  const initial = displayName.trim().charAt(0).toUpperCase();

  return (
    <div className="flex h-screen w-full">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div
            className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="mt-8 flex flex-col gap-2 ml-4">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: displayName,
                href: "#",
                icon: user.image ? (
                  <img
                    src={user.image}
                    className="h-7 w-7 shrink-0 rounded-full ml-4"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ) : (
                  <div className="h-7 w-7 shrink-0 rounded-full ml-4 bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-base">
                    {initial}
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* Main page content */}
      <main className="flex-1 p-4">{/* ... */}</main>
    </div>
  );
}