import EmblaCarousel from './carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import MainSection from './MainSection'


const OPTIONS: EmblaOptionsType = { axis: 'y',loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array.from({length: SLIDE_COUNT}).keys())

function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between mt-4">
      <section className='sandbox__carousel w-full'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <MainSection />
      <div className='px-10 w-full h-[280px] ring ring-slate-200 shadow-lg shadow-gray-300 flex items-center justify-center mt-6 rounded-md'>
        최근 본 코인
      </div>
      <div className='flex w-full gap-2'>
      <div className='flex-1 px-10 w-full h-[280px] ring ring-slate-200 shadow-lg shadow-gray-300 flex items-center justify-center mt-6 rounded-md'>
        핫코인 - 조회수

      </div>
      <div className='flex-1 px-10 w-full h-[280px] ring ring-slate-200 shadow-lg shadow-gray-300-400 flex items-center justify-center mt-6 rounded-md'>
        야수코인 - 등락 낙차 큰 코인 TOP5
      </div>
      <div className='flex-1 px-10 w-full h-[280px] ring ring-slate-200 shadow-lg shadow-gray-300 flex items-center justify-center mt-6 rounded-md'>
        풀매수코인 - 1주일 전과 자기자신을 비교해서 가장 낮은 가격 : 고도화가 필요한 부분이다...
      </div>
      </div>
      
    </main>
  )
}

export default Home
