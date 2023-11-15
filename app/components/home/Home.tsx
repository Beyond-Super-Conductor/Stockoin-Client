import EmblaCarousel from './carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import MainSection from './MainSection'


const OPTIONS: EmblaOptionsType = { axis: 'y',loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array.from({length: SLIDE_COUNT}).keys())

function Home() {
  
  return (
    <main className="max-w-[1280px] mx-auto flex flex-col items-center justify-between mt-4 p-10">
      <section className='sandbox__carousel w-full'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <MainSection />
    </main>
  )
}

export default Home
