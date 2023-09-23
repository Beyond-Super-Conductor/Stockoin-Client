'use client'
import useWebsocket from '@/hooks/useWebsocket';
import { CoinTicker } from '@/types/coin';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'



export default function TradeHistoryPanel() {
  const { tokenDetail } = useParams();
  const [tickers,setTickers] = useState<CoinTicker[]>([]);
  const { ticker } = useWebsocket({marketList:`KRW-${tokenDetail}`,marketQuery:`KRW-${tokenDetail}`})
  
  useEffect(() => {
    if(!ticker || !ticker[`KRW-${tokenDetail}`]) return;
    tickers.length < 20
    ? setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev])
    : setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev.slice(0,19)]);
  },[ticker]);

  return (
    <div className='flex-[0.4]'>
      <div className={`sticky top-0 bg-white py-10 w-full flex items-start justify-around`}>
        <span className='flex-[0.3] w-14 h-10'></span>
        <span className='flex-[0.6] text-center'>마켓</span>
        <span className={`flex-[0.7] text-center`}>가격</span>
        <span className='flex-[0.6] text-center'> 전일대비</span>
        <span className='flex-[0.6] text-center'> 체결량</span>
      </div>
      {
        tickers.length > 0 && (
            tickers.map((item,index) => 
                <div key={index} className='flex items-center justify-center gap-4'>
              <span className='flex-[0.3] w-14 h-10'>{item.ab && item.ab === 'BID' ? '매수' : '매도'}</span>
              <span className='flex-[0.6] text-center'>{item.cd.replace('KRW-','')}</span>
              <p className={`relative flex-[0.7] flex items-center justify-center ${item.isRising ? 'text-red-500' : 'text-blue-400'}`}>
                <span> {(item.tp).toLocaleString()} 원</span>
                <span className={`absolute top-0 left-0`}>
                  {item.isRising ? '▲' : '▼'}
                </span>
              </p>
              <span className={`flex-[0.6]  text-center ${item.scr > 0 ? 'text-red-500' : 'text-blue-400'}`}> {(item.scr * 100).toFixed(3)}%</span>
              <span className='flex-[0.6] text-2xl text-center'>
                <span className='block mr-2'>{(Math.round(item.tp * item.tv / 100) * 100).toLocaleString()}원</span>

                <span className='text-lg'>
                  ({
                    item.tv > 10
                    ? (item.tv).toFixed(0)
                    : (item.tv).toFixed(3)
                    }ea)
                </span>

              </span>
            </div>))}
        </div>
  )
}
