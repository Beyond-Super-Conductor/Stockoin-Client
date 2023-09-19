'use client'

import useWebsocket, { CoinTicker } from '@/hooks/useWebsocket';
import { findCategoryState } from '@/store/findCoin';
import { selectCoinstate } from '@/store/selectCoin';
import { coinCategory } from '@/utils/constants';
import { convertAndRoundUpCurrency } from '@/utils/convertAndRoundUpCurrency';
import { formatDateToAgo } from '@/utils/formatDateToAgo';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function page() {
  const [selectCoin,setselectCoin] = useRecoilState(selectCoinstate);
  const [findCategory,setFindCategory] = useRecoilState(findCategoryState)
  const {slug, tokenDetail} = useParams();
  const { ticker } = useWebsocket({marketList:`KRW-${tokenDetail}`,marketQuery:`KRW-${tokenDetail}`})
  const [tickers,setTickers] = useState<CoinTicker[]>([]);
  
  useEffect(() => {  
    const selectedCategory = coinCategory.find((item) => item.enName === slug);
    if(!selectedCategory) return;
    setFindCategory(selectedCategory);
    const selectedToken = selectedCategory.coins
    .find((item) => item.enName === tokenDetail);
    if(!selectedToken) return;
    setselectCoin(selectedToken);
  },[slug, tokenDetail]);

  useEffect(() => {
    if(!ticker || !ticker[`KRW-${tokenDetail}`]) return;
    tickers.length < 20
    ? setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev])
    : setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev.slice(0,19)]);
  },[ticker]);
  

  return (
    <div className='w-full'>

      <div className='w-full h-[400px] bg-slate-400 flex items-center justify-center'>
          <div className='flex-[0.7]'>차트</div>
          <div className='flex-[0.3] border border-red-400 h-full bg-white'>
            {
              tickers.length > 0 && (
                <p className='flex flex-col items-end justify-center font-bold w-full px-8 py-4'>
                  <span className='flex justify-between w-full'>
                    <span>시가총액:</span><span> {convertAndRoundUpCurrency(+tickers[tickers.length - 1].atp)}</span>
                  </span>
                  <span className='flex justify-between w-full'>
                  <span>52주 최고가 달성일:</span><span> {formatDateToAgo(tickers[tickers.length - 1].h52wdt)}</span>
                  </span>
                  <span className='flex justify-between w-full'>
                  <span>52주 최고가:</span><span> {convertAndRoundUpCurrency(tickers[tickers.length - 1].h52wp)}</span>
                  </span>
                  <span className='flex justify-between w-full'>
                  <span>52주 최저가 달성일:</span><span> {formatDateToAgo(tickers[tickers.length - 1].l52wdt)}</span>
                  </span>
                  <span className='flex justify-between w-full'>
                  <span>52주 최저가:</span><span>{convertAndRoundUpCurrency(tickers[tickers.length - 1].l52wp)}</span>
                  </span>
                  <span className='flex justify-between w-full'>
                  <span>24시간 누적 거래대금:</span><span> {convertAndRoundUpCurrency(tickers[tickers.length - 1].atp24h)}</span>
                  </span>
                  <span className='flex justify-between w-full'>
                  <span>24시간 누적 거래량:</span><span> {Math.round(tickers[tickers.length - 1].atv24h).toLocaleString()}개</span>
                  </span>
                </p>
              )
            }
          </div>
      </div>

      <div className=''>
      <div className={`sticky top-0 bg-white py-10 w-full flex items-start justify-around`}>
        <span className='block w-14 h-10'></span>
        <span className='flex-1 text-2xl font-bold text-center'>마켓</span>
        <span className={`flex-1 text-2xl font-bold text-center`}>가격</span>
        <span className='flex-1 text-2xl font-bold text-center'> 전일대비 등락율</span>
        <span className='flex-1 text-2xl font-bold text-center'> 체결량</span>
      </div>
      {
        tickers.length > 0 && (

            tickers.map((item,index) => 
                <div key={index} className='flex items-center justify-center gap-4'>
              <span className='block w-14 h-10'>{item.ab && item.ab === 'BID' ? '매수' : '매도'}</span>
              <span className='flex-1 text-2xl font-bold text-center'>{item.cd.replace('KRW-','')}</span>
              <p className={`relative flex-1 text-2xl font-bold flex items-center justify-center ${item.isRising ? 'text-red-500' : 'text-blue-400'}`}>
                <span> {(item.tp).toLocaleString()} 원</span>
                <span className={`absolute top-0 left-0`}>
                  {item.isRising ? '▲' : '▼'}
                </span>
                
              </p>
              <span className={`flex-1  text-center ${item.scr > 0 ? 'text-red-500' : 'text-blue-400'}`}> {(item.scr * 100).toFixed(3)}%</span>
              <span className='flex-1 text-2xl text-center'>
                <span className='block mr-2'>{(Math.round(item.tp * item.tv / 100) * 100).toLocaleString()}원</span>
                <span className='text-lg'>
                  (
                  {
                    item.tv > 10
                    ? (item.tv).toFixed(0)
                    : (item.tv).toFixed(3)}개
                  </span>
                  )
              </span>
             
            </div>
            )
          )}
      </div>
    </div>
  )
}