import Hero from "@/landing-page/hero"
import { Navbar } from "@/components/navbar/navbar"
import Introduce from '@/landing-page/introduce'
import Trusted from "@/landing-page/trusted"

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
      <section id="trusted">
        <Trusted/>
      </section>
    </div>
  )
}

export default Main