"use client";
import React, { useState, useEffect, useRef } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar/sidebar";
import {
    IconBrandTabler,
    IconSettings,
    IconArrowLeft,
    IconAbacus,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { feature } from "topojson-client"

// Dynamically import Globe component to avoid SSR issues in Next.js
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// data for analytics
const mockCommodityData = {
  Indonesia: [
    {
      name: "Palm Oil",
      image: "/images/palm-oil.jpg",
      fluctuation: 5.2,
    },
    {
      name: "Coffee",
      image: "/images/coffee.jpg",
      fluctuation: -2.7,
    },
  ],
  Japan: [
    {
      name: "Rice",
      image: "/images/rice.jpg",
      fluctuation: 3.1,
    },
  ],
};

const mockInvestorData = {
  Indonesia: [
    { name: "AgroFund Asia", logo: "/images/investor1.png" },
    { name: "Green Earth Capital", logo: "/images/investor2.png" },
  ],
  Japan: [{ name: "Nippon Agro", logo: "/images/investor3.png" }],
};


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

  // map components
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [globeSize, setGlobeSize] = useState({ width: 800, height: 600 });
  const [countries, setCountries] = useState([]);
  const [hoverD, setHoverD] = useState<any>();
  const [clickedCountry, setClickedCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://unpkg.com/world-atlas@2.0.2/countries-110m.json")
      .then((res) => res.json())
      .then((data) => {
        const countries = feature(data, data.objects.countries).features;
        setCountries(countries);
      });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setGlobeSize({ width, height });
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    if (globeEl) {
      globeEl.current.width(globeSize.width);
      globeEl.current.height(globeSize.height);
    }
  }, [globeSize]);


  // for analytics and list of investors
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);


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
                    className="h-7 w-7 shrink-0 rounded-full ml-4 mb-10"
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
      <main className="flex-1 p-4">
        <div className="flex w-full h-screen transition-all duration-500">
          
          {/* Globe Container */}
          <div
            className={`transition-all duration-500 relative h-full ${
              selectedCountry ? "w-1/2" : "w-full"
            }`} ref={containerRef}
          >
              <Globe
                ref={globeEl}
                width={globeSize.width}
                height={globeSize.height}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="rgba(0,0,0,0)"
                polygonsData={countries}
                polygonAltitude={0.06}
                polygonCapColor={(feat: any) =>
                  clickedCountry === feat.properties.name
                    ? "gold"
                    : hoverD === feat
                    ? "orange"
                    : "rgba(255, 255, 255, 0.3)"
                }
                polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
                polygonStrokeColor={() => "#111"}
                onPolygonHover={setHoverD}
                onPolygonClick={(feat: any) => {
                  setClickedCountry(feat.properties.name);
                  setSelectedCountry(feat.properties.name);
                }}
                polygonsTransitionDuration={300}
              />
          </div>

          {/* Right Panel */}
          <div
            className={`transition-all duration-500 overflow-y-auto bg-white rounded-lg shadow-md p-4 ${
              selectedCountry ? "w-1/2 opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-full"
            }`}
          >
            {selectedCountry && (
              <>
                <h2 className="text-xl font-semibold mb-2">{selectedCountry} Overview</h2>

                {/* Commodity Analytics */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">📈 Commodity Analytics</h3>
                  <div className="space-y-4">
                    {(mockCommodityData[selectedCountry as keyof typeof mockCommodityData] || []).map((commodity, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <img src={commodity.image} alt={commodity.name} className="w-12 h-12 rounded object-cover" />
                        <div>
                          <p className="font-medium">{commodity.name}</p>
                          <p className={commodity.fluctuation >= 0 ? "text-green-600" : "text-red-500"}>
                            {commodity.fluctuation >= 0 ? "+" : ""}
                            {commodity.fluctuation}% (last 2 months)
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investors */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">💼 Investors</h3>
                  <div className="space-y-3">
                    {(mockInvestorData[selectedCountry as keyof typeof mockInvestorData] || []).map((investor, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <img src={investor.logo} alt={investor.name} className="w-10 h-10 rounded-full object-cover" />
                        <p className="font-medium">{investor.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

    </div>
  );
}