'use client'

import useWebsocket from '@/hooks/useWebsocket'
import React from 'react'
import HighLowUnderline from './widgets/HighLowUnderline';
import { format } from 'date-fns';

import { extractMiddleCategoryFromCoinCategory } from '@/utils/extractMiddleCategoryFromCoinCategory';

interface Props {
  children: React.ReactNode;
  isExpanded: boolean;
  onShrink: () => void;
  onExpand: () => void;
}

export default function RealtimePriceBoard({children, isExpanded, onShrink, onExpand }: Props) {
  const { ticker } = useWebsocket();

  const onClickMoveToCoinDetailPage = (key: string) => {
    const middleCategory = extractMiddleCategoryFromCoinCategory(key);
    window.location.href = `/dashboard/${middleCategory}/${key}`;
  }
  
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
    rounded-lg 
    shadow-lg shadow-gray-300
    transition-all duration-700 ease-in-out
      `}>
    <div className={`sticky top-0 bg-white pt-10 w-full flex items-start justify-around`}>
      {children}
      {isExpanded && (
        <>
          <span className='flex-1 text-xl text-center pb-2 border-b'>체결 종류</span>
          <span className='flex-1 text-xl text-center pb-2 border-b'>전일 대비</span>
          <span className='flex-[1.2] text-xl text-center pb-2 border-b'>시간</span>
        </>
      )}
    </div>
    {
      ticker && Object.keys(ticker).map((key) => {
        return (
          <div key={key} className={` w-full flex items-center justify-around border-b pb-2 `}>
            <div className='flex-1 flex justify-center items-center gap-4'>
              <img src={`/assets/coins/${key.replace('KRW-','').toLowerCase()}.webp`} alt="logo" className='w-6 h-6' />
              <button
                onClick={() => onClickMoveToCoinDetailPage(key.replace('KRW-',''))}
                className='text-center' >
                <span className='text-xl text-center'>
                  {key.replace('KRW-','')}
                </span>
              </button>
              </div>
            <p className={`relative flex-1 flex items-center justify-center ${ticker[key].isRising ? 'text-red-500' : 'text-blue-400'}`}>
              <span className='text-base'> {(ticker[key].tp).toLocaleString()} 원</span>
              <span className={`absolute top-0 left-0 text-base md:block hidden`}>
                {ticker[key].isRising ? '▲' : '▼'}
              </span>
              <HighLowUnderline isRising={ticker[key].isRising} />
            </p>
            <span className={`flex-1 text-base text-center ${ticker[key].scr > 0 ? 'text-red-500' : 'text-blue-400'}`}>
              {(ticker[key].scr * 100).toFixed(3)}%
            </span>
            <span className='flex-1 text-base text-center'>
              <span className='block mr-2'>{(Math.round(ticker[key].tp * ticker[key].tv / 100) * 100).toLocaleString()}원</span>
              <span className='text-base'>
                ({
                  ticker[key].tv > 10
                  ? (ticker[key].tv).toFixed(0)
                  : (ticker[key].tv).toFixed(3)}개
                </span>
                )
            </span>
            {
              isExpanded && <>
                <span className='flex-1 text-lg min-w-[30px] text-center'>
                  {
                  ticker[key].ab === 'BID'
                  ? <span className='text-base text-sky-500'>매수</span>
                  : <span className='text-base text-rose-500'>매도</span>
                  }
                </span>
                <span
                  className={`
                  text-lg flex-1 text-center
                  ${ticker[key].c === 'RISE' ? 'text-red-500' : ticker[key].c === 'FALL' ? 'text-blue-400' : 'text-gray-500'}
                  `}>
                  {ticker[key].c === 'RISE' ? '상승' : ticker[key].c === 'FALL' ? '하락' : '보합'}
                </span>
                <span className='text-lg flex-[1.2] text-center'>{format(ticker[key].tms ?? 1, 'MM월 dd일 HH:mm:ss')}</span>
              </>
            }
          </div>
        )}
      )}
  </div>
)}
