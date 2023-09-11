'use client'

import useWebsocket from '@/hooks/useWebsocket'
import React from 'react'
import HighLowUnderline from './widgets/HighLowUnderline';

export default function RealtimePriceBoard() {
  const { ticker } = useWebsocket();

  return (
  <div
    className='flex-[0.65] overflow-y-scroll w-full h-[580px]  flex flex-col gap-10 items-center justify-start mt-6 rounded-md px-10 ring ring-slate-200 shadow-lg shadow-gray-300 '>
    <div className={`sticky top-0 bg-white py-10 w-full flex items-start justify-around`}>
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
              <p className={`relative flex-1 text-2xl font-bold flex items-center justify-center ${ticker[key].isRising ? 'text-red-500' : 'text-blue-400'}`}>
                <span> {(ticker[key].tp).toLocaleString()} 원</span>
                <span className={`absolute top-0 left-0`}>
                  {ticker[key].isRising ? '▲' : '▼'}
                </span>
                <HighLowUnderline isRising={ticker[key].isRising} />
              </p>
              <span className={`flex-1 text-2xl font-bold text-center ${ticker[key].scr > 0 ? 'text-red-500' : 'text-blue-400'}`}> {(ticker[key].scr * 100).toFixed(3)}%</span>
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
