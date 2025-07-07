"use client";
import { useState } from "react";
import Image from "next/image";

const isi = [
  {
    id: "ICP",
    company: "ICP",
    quote:
      "The interchain stack served us well in rapidly iterating on the Celestia vision.",
    logo: "/landing-page/icp.png",
    link: "#",
  },
  {
    id: "Blockchain",
    company: "Blockchain",
    quote:
      "dYdX took advantage of the modular stack to increase scalability and performance.",
    logo: "/logos/dydx.svg",
    link: "#",
  },
];

const Trusted = () => {
  const [active, setActive] = useState("ICP");
  const activeData = isi.find((t) => t.id === active)!;

  return (
    <section className="mt-20">
      <div className="flex flex-col gap-2 items-center">

        <div className="flex justify-center gap-4 mb-10">
          {isi.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-6 py-2 rounded-full font-semibold border transition-all
                ${
                  active === t.id
                    ? "bg-white text-black border-white"
                    : "bg-[#1a1a1a] text-white border-transparent"
                }`}
            >
              {t.company}
            </button>
          ))}
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl px-10 py-12 max-w-4xl mx-auto text-white">
  <div className="flex items-center gap-8">
    {/* Logo Besar */}
    <div className="flex-shrink-0">
      <Image
        src={activeData.logo}
        alt={activeData.company}
        width={200} 
        height={100}
        className="object-contain"
      />
    </div>
        <div>
            <p className="text-xl font-semibold leading-relaxed mb-2">
                “{activeData.quote}”
            </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;