import ScrollFloat from "@/components/ScrollFloat/ScrollFloat"
import Carousel from "@/components/Carousel/Carousel"

const Introduce = () => {
  return (
    <div>
        {/* Introducing text */}
        <div className='flex justify-center mt-10'>
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                textClassName="text-[100 px] font-bold"
                >
                Find your best Investation
            </ScrollFloat>
        </div>

        <div className='mt-10 flex justify-center'>
            <Carousel
                baseWidth={1000}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
            />
        </div>
    </div>
  )
}

export default Introduce