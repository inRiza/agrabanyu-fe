'use client';
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel/Carousel";

const Introduce = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/landing-page/bg-intro.png')"
      }}
    >
      <motion.p 
        className="subtitle text-5xl md:text-7xl font-bold text-center capitalize mb-16 shiny-text text-white"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        find your best investment
      </motion.p>

      <motion.div 
        className="flex justify-center w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <Carousel
          baseWidth={1000}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </motion.div>
    </section>
  );
};

export default Introduce;
