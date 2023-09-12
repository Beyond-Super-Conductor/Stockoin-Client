import React from 'react'
import EmblaCarousel from './carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import RealtimePriceBoard from './RealtimePriceBoard'
import Chat from './widgets/Chat'
import MainSection from './MainSection'

const OPTIONS: EmblaOptionsType = { axis: 'y',loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array.from({length: SLIDE_COUNT}).keys())

// 종목 전체 조회
// https://api.upbit.com/v1/market/all
// {
//   "market": "KRW-XRP",
//   "korean_name": "리플",
//   "english_name": "Ripple"
// },
// 요청 헤더(Request Header)에 Accept-Encoding: gzip 을 추가하시면 트래픽 비용을 줄일 수 있습니다.
// 종목별 가격 조회
// 'https://api.upbit.com/v1/ticker?markets=KRW-BTC'

function Home() {
  
  return (
    <>
    
    <main className="flex flex-col items-center justify-between">
      <section className='sandbox__carousel mt-4 w-full'>
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
    
    </>
    
  )
}

export default Home