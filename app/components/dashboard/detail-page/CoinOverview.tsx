
import { CoinTicker } from '@/types/coin'
import { convertAndRoundUpCurrency } from '@/utils/convertAndRoundUpCurrency'
import { formatDateToAgo } from '@/utils/formatDateToAgo'
import React from 'react'


interface Props {
  tickers: CoinTicker[]
}

export default function CoinOverview({tickers}: Props) {
  return (
    <div className='absolute top-0 left-0 border border-red-400 w-[320px] bg-transparent justify-start '>
            {
              tickers.length > 0 && (
                <p className='flex flex-col items-end text-lg px-8 py-4'>
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
  )
}
