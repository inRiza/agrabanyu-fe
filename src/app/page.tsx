import { Navbar } from "@/components/navbar/navbar";
import Hero from "@/landing-page/hero";
import Introduce from "@/landing-page/introduce";
import Goals from "@/landing-page/goals";
import Process from "@/landing-page/features";
import End from "@/landing-page/end";
import Footer from "@/components/footer/footer";
import Trusted from "@/landing-page/trusted";

const Main = () => {
  return (
    <div className="guide-main min-h-screen bg-background">
      <Navbar/>
      <section id="hero">
        <Hero/>
      </section>
      <section id="introduce">
        <Introduce/>
      </section>
      <section id="goals">
        <Goals/>
      </section>
      <section id="process">
        <Process/>
      </section>
      <section id="end">
        <End/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
      {/* <section id="trusted">
        <Trusted/>
      </section> */}
    </div>
  )
}

export default Main