import Hero from "@/landing-page/hero"
import Introduce from '@/landing-page/introduce'
import { Navbar } from "@/components/navbar/navbar"

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
    </div>
  )
}

export default Main