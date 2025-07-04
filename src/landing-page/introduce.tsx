'use client';
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel/Carousel";

const Introduce = () => {
  return (
    <div className="guide-main h-screen flex flex-col items-center justify-center mt-40">
        <motion.p 
            className="subtitle text-4xl text-center capitalize mb-16 shiny-text"
            initial={{ 
                opacity: 0, 
                scale: 0.8, 
                y: 50 
            }}
            animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0 
            }}
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
            className='flex justify-center'
            initial={{ 
                opacity: 0, 
                y: 30 
            }}
            animate={{ 
                opacity: 1, 
                y: 0 
            }}
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
    </div>
  )
}

export default Introduce