
import React from 'react'
import EmblaCarousel from './carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'



const OPTIONS: EmblaOptionsType = { axis: 'y',loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array.from({length: SLIDE_COUNT}).keys())

function Home() {
  
  return (
    <>
    
    <main className="flex flex-col items-center justify-between">
      <section className='sandbox__carousel mt-4 w-full'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <div className='flex w-full gap-2'>
      <div className='flex-[0.65] w-full h-[580px] border border-slate-400 flex items-center justify-center mt-6 rounded-md'>
        실시간 차트 - 호버 2초 후 풀페이지로 전환됨.
      </div>
      
      <div className='flex-[0.35] w-full h-[580px] border border-slate-400 flex items-center justify-center mt-6 rounded-md'>
        실시간 전체 채팅
      </div>  
      </div>
      <div className='px-10 w-full h-[280px] border border-slate-400 flex items-center justify-center mt-6 rounded-md'>
        최근 본 코인
      </div>
      <div className='flex w-full gap-2'>
      <div className='flex-1 px-10 w-full h-[280px] border border-slate-400 flex items-center justify-center mt-6 rounded-md'>
        핫코인 - 조회수

      </div>
      <div className='flex-1 px-10 w-full h-[280px] border border-slate-400 flex items-center justify-center mt-6 rounded-md'>
        야수코인 - 등락 낙차 큰 코인 TOP5
      </div>
      <div className='flex-1 px-10 w-full h-[280px] border border-slate-400 flex items-center justify-center mt-6 rounded-md'>
        풀매수코인 - 1주일 전과 자기자신을 비교해서 가장 낮은 가격 : 고도화가 필요한 부분이다...

      </div>
      </div>
      
    </main>
    
    </>
    
  )
}

export default Home