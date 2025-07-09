import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const End = () => {
  return (
    <div className="mt-20 py-10 guide-main flex gap-12 items-center justify-center">
      <p className="text-6xl font-black capitalize">
        start your journey now
      </p>
      <LabelInputContainer className="mb-6">
        <Label htmlFor="email" className="opacity-20 font-light mb-2 text-lg">Any future plans?</Label>
        <Input id="msg" name="message" placeholder="Send us an email" type="text" className="hover:opacity-100 opacity-20"/>
      </LabelInputContainer>
    </div>
  )
}

export default End

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