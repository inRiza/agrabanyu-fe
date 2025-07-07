import AnimatedText from "@/components/ui/AnimatedText";

const Trusted = () => {
  return (
    <div className="flex flex-col items-center mt-32 text-center">
      <h1 className="text-5xl md:text-6xl font-bold">
        <AnimatedText />
      </h1>
      <h2 className="mt-4 text-xl md:text-2xl text-white">
        with Agra<span className="text-green-main italic">Banyu</span>
      </h2>
    </div>
  );
};

export default Trusted;
