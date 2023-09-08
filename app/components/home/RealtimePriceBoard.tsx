'use client'

import useWebsocket from '@/hooks/useWebsocket'
import React from 'react'

export default function RealtimePriceBoard() {
  const { ticker } = useWebsocket();

  return (
  <div className='flex-[0.65] w-full h-[580px] border border-slate-400 flex flex-col gap-10 items-center justify-start mt-6 rounded-md p-10'>
    <div className={` w-full flex items-start justify-around`}>
    <span className='block w-10 h-10 mr-4'></span>
    <span className='flex-1 text-2xl font-bold text-center'>마켓</span>
    <span className={`flex-1 text-2xl font-bold text-center`}>가격</span>
    <span className='flex-1 text-2xl font-bold text-center'> 전일대비 등락율</span>
    <span className='flex-1 text-2xl font-bold text-center'> 체결량</span>
    
    </div>
    {
      ticker && Object.keys(ticker).map((key) => {
        return (
          <div key={key} className={` w-full flex items-start justify-around border-b border-b-slate-400/60 pb-2`}>
              {/* <img src={`https://static.upbit.com/logos/${key}.png`} alt="logo" className='w-12 h-12' /> */}
              <span className='block w-10 h-10 border border-black mr-4'></span>
              <span className='flex-1 text-2xl font-bold text-center'>{key.replace('KRW-','')}</span>
              <span className={`flex-1 text-2xl font-bold text-center ${ticker[key].isRising ? 'text-red-500' : 'text-blue-400'}`}>{(ticker[key].tp).toLocaleString()} 원</span>
              <span className='flex-1 text-2xl font-bold text-center'> {(ticker[key].scr * 100).toFixed(3)}%</span>
              <span className='flex-1 text-2xl font-bold text-center'> {(ticker[key].tv).toFixed(3)}개</span>
              
              {/* <span className='text-2xl font-bold'>{ticker[key].ms}</span> */}
          </div>
        )
      }
      )
    }
  </div>
)
}
