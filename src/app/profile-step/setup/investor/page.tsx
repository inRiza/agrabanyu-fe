"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { profileSteps } from "@/constants/profile-steps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { normalize } from "path";

export default function ProfileSetupInvestor() {
  const router = useRouter();

  const pathname = usePathname();
  // const searchParams = useSearchParams();

  const currentStepId = pathname.split("/").pop();
  // const role = searchParams.get("role");
  // const wallet = searchParams.get("wallet");

  let normalizedStepId = currentStepId;
  if (currentStepId === "investor") normalizedStepId = "setup";

  const steps = profileSteps.map(( step, idx ) => ({
    ...step,
    isCompleted: profileSteps.findIndex(s => s.id === normalizedStepId) > idx,
    isActive: step.id === normalizedStepId,
  }));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError(""); // clear error

    // Validasi field kosong
    if (!name || !phone || !email || !location) {
      setError("Please complete all fields.");
      return;
    }

    // Validasi phone: hanya digit & minimal 10 karakter
    if (!/^\d+$/.test(phone)) {
      setError("Phone number must contain only digits.");
      return;
    }

    if (phone.length < 10) {
      setError("Phone number must be at least 10 digits.");
      return;
    }

    // Validasi email sederhana
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/profile/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          wallet,
          name,
          phone,
          email,
          location,
        }),
      });

      if (!res.ok) throw new Error("Failed to save profile.");

      router.push("/dashboard"); // ganti sesuai kebutuhan
    } catch {
      setError("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // ✅ Hanya izinkan angka di input phone
  const handlePhoneChange = (value: string) => {
    const onlyDigits = value.replace(/\D/g, ""); // hapus semua non-digit
    setPhone(onlyDigits);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 px-4">
      <ProgressSteps steps={steps} className="mb-10" />
      
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center shiny-text">Investor Profile</h2>

        {error && (
          <div className="p-3 text-sm bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Name */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            placeholder="e.g. 081234567890"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="e.g. your@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="w-full mt-6 group/btn relative block h-12 rounded-md bg-gradient-to-br from-green-main to-green-700 font-medium text-white shadow-md disabled:opacity-40"
        >
          {saving ? "Saving..." : "Save & Continue"}
          <BottomGradient />
        </button>
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
