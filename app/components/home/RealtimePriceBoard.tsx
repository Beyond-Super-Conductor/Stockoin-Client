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
    ${isExpanded ? 'flex-1 w-full -translate-y-1/5' : 'flex-[0.65] translate-y-0'}
    overflow-x-hidden overflow-y-scroll
    h-[580px]
    flex flex-col items-center justify-start gap-4
    mt-6 px-8
    rounded-md ring ring-slate-200
    shadow-lg shadow-gray-300
    transition-all duration-700 ease-in-out
      `}>
    <div className={`sticky top-0 bg-white pt-10 w-full flex items-start justify-around`}>
    <span className='block w-10 h-10 mr-4'></span>
    <span className='flex-1 text-2xl font-bold text-center'>마켓</span>
    <span className={`flex-1 text-2xl font-bold text-center`}>가격</span>
    <span className='flex-1 text-2xl font-bold text-center'> 전일대비 등락율</span>
    <span className='flex-1 text-2xl font-bold text-center'> 체결량</span>
    {
      isExpanded && <>
        <span className='flex-1 text-2xl font-bold text-center'>매수/매도</span>
        <span className='flex-1 text-2xl font-bold text-center'>전일 대비</span>
        <span className='flex-1 text-2xl font-bold text-center'>시간</span>
      </>
    }
    </div>
    {
      ticker && Object.keys(ticker).map((key) => {
        return (
          <div key={key} className={` w-full flex items-start justify-around border-b border-b-slate-400/60 pb-1`}>
              <img src={`/assets/coins/${key.replace('KRW-','').toLowerCase()}.webp`} alt="logo" className='w-10 h-10' />
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
              
              {
                isExpanded && <>
                  <span className='flex-1 text-2xl font-bold text-center'>{ticker[key].ab}</span>
                  <span className='flex-1 text-2xl font-bold text-center'>{ticker[key].c}</span>
                  <span className='flex-1 text-2xl font-bold text-center'>{format(ticker[key].tms ?? 1, 'MM월 dd일 HH:mm:ss')}</span>
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
