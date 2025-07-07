import Hero from "@/landing-page/hero"
import Introduce from '@/landing-page/introduce'
import { Navbar } from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import Trusted from "@/landing-page/trusted"

const Main = () => {
  return (
    <>
      <div className="guide-main min-h-screen bg-background">
        <Navbar />
        <Hero />
      </div>

      <Introduce />

      <div className="guide-main min-h-screen bg-background">
        <Trusted />
        <Footer />
      </div>
    </>
  );
};


export default Main