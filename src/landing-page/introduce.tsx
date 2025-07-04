import ScrollFloat from "@/components/ScrollFloat/ScrollFloat"

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
                >
                Found your best Investation
            </ScrollFloat>
        </div>
    </div>
  )
}

export default Introduce