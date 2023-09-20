import { CoinTicker } from '@/types/coin';
import React from 'react'


interface Props {
  tickers: CoinTicker[];
}

export default function TradeHistoryPanel({tickers}: Props) {
  return (
    <div className='flex-[0.4]'>
          <div className={`sticky top-0 bg-white py-10 w-full flex items-start justify-around`}>
            <span className='flex-[0.3] w-14 h-10'></span>
            <span className='flex-[0.6] text-center'>마켓</span>
            <span className={`flex-[0.7] text-center`}>가격</span>
            <span className='flex-1 text-center'> 전일대비</span>
            <span className='flex-1 text-center'> 체결량</span>
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
                  <span className={`flex-1  text-center ${item.scr > 0 ? 'text-red-500' : 'text-blue-400'}`}> {(item.scr * 100).toFixed(3)}%</span>
                  <span className='flex-1 text-2xl text-center'>
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
