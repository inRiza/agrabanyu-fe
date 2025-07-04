

const Hero = () => {
  return (
    <div className="guide-main h-screen flex flex-col items-center justify-center">
        <p className="title uppercase text-center px-50 shiny-text">
            invest on land or water with ease and secure
        </p>
        <div className="flex gap-6">
            <button className="mt-10 button-main hover-bg-glow uppercase px-6 py-4">Get Started</button>
            <button className="mt-10 button-submain uppercase px-6 py-4 font-base">Learn More</button>
        </div>
    </div>
  )
}

export default Hero