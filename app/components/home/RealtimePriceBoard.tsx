'use client'

import useWebsocket from '@/hooks/useWebsocket'
import React, { useState } from 'react'
import HighLowUnderline from './widgets/HighLowUnderline';
import { format } from 'date-fns';

interface Props {
  isExpanded: boolean;
  onShrink: () => void;
  onExpand: () => void;
}

export default function RealtimePriceBoard({ isExpanded, onShrink, onExpand }: Props) {
  const { ticker } = useWebsocket();
  
  return (
  <div
    onMouseOver={onExpand}
    onMouseLeave={onShrink}
    className={`
    bg-white 
    ${isExpanded ? 'flex-1 w-full' : 'flex-[0.65]'}
    overflow-x-hidden overflow-y-scroll
    h-[580px]
    flex flex-col items-center justify-start gap-4
    px-8
    rounded-md ring ring-slate-200
    shadow-lg shadow-gray-300
    transition-all duration-700 ease-in-out
      `}>
    <div className={`sticky top-0 bg-white pt-10 w-full flex items-start justify-around`}>
    <span className='block w-10 h-10 mr-4'></span>
    <span className='flex-1 text-xl text-center'>마켓</span>
    <span className={`flex-[1.2] text-xl text-center`}>가격</span>
    <span className='flex-1 text-xl text-center'> 전일대비 등락율</span>
    <span className='flex-1 text-xl text-center'> 체결량</span>
    {
      isExpanded && <>
        <span className='text-xl text-center'>매수/매도</span>
        <span className='flex-1 text-xl text-center'>전일 대비</span>
        <span className='flex-1 text-xl text-center'>시간</span>
      </>
    }
    </div>
    {
      ticker && Object.keys(ticker).map((key) => {
        return (
          <div key={key} className={` w-full flex items-center justify-around border-b border-b-slate-400/60`}>
              <img src={`/assets/coins/${key.replace('KRW-','').toLowerCase()}.webp`} alt="logo" className='w-10 h-10' />
              <span className='flex-1  text-center'>{key.replace('KRW-','')}</span>
              <p className={`relative flex-[1.2]  flex items-center justify-center ${ticker[key].isRising ? 'text-red-500' : 'text-blue-400'}`}>
                <span> {(ticker[key].tp).toLocaleString()} 원</span>
                <span className={`absolute top-0 left-0`}>
                  {ticker[key].isRising ? '▲' : '▼'}
                </span>
                <HighLowUnderline isRising={ticker[key].isRising} />
              </p>
              <span className={`flex-1  text-center ${ticker[key].scr > 0 ? 'text-red-500' : 'text-blue-400'}`}> {(ticker[key].scr * 100).toFixed(3)}%</span>
              <span className='flex-1 text-2xl text-center'>
                <span className='block mr-2'>{(Math.round(ticker[key].tp * ticker[key].tv / 100) * 100).toLocaleString()}원</span>
                <span className='text-lg'>
                  (
                  {
                    ticker[key].tv > 10
                    ? (ticker[key].tv).toFixed(0)
                    : (ticker[key].tv).toFixed(3)}개
                  </span>
                  )
              </span>
              {
                isExpanded && <>
                  <span className=' text-lg min-w-[30px] text-center'>
                    {
                    ticker[key].ab === 'BID'
                    ? <span className='text-sky-500'>매수</span>
                    : <span className='text-rose-500'>매도</span>
                    }
                  </span>
                  <span className=' text-lg flex-1  text-center'>{ticker[key].c}</span>
                  <span className=' text-lg flex-1  text-center'>{format(ticker[key].tms ?? 1, 'MM월 dd일 HH:mm:ss')}</span>
                </>
              }
          </div>
        )
      }
      )
    }
  </div>
)
}
