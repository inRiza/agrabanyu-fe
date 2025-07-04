

const Hero = () => {
  return (
    <div className="guide-main h-screen flex flex-col items-center justify-center">
        <p className="title uppercase text-center px-50 shiny-text">
            invest on land or water with ease and secure
        </p>
        <p className="mt-5 subtitle capitalize text-center px-50">
            invest easily using any cryptocurrency and helping you to secure your transaction using web3 technology
        </p>
        <div className="flex gap-6">
            <button className="mt-10 button-main hover-bg-glow uppercase px-6 py-4 cursor-pointer hover:scale-105 transform">Get Started</button>
            <button className="mt-10 button-submain uppercase px-6 py-4 font-base cursor-pointer">Learn More</button>
        </div>
    </div>
  )
}

export default Hero