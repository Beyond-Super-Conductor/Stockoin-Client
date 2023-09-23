'use client'
import useWebsocket from '@/hooks/useWebsocket'
import { CoinTicker } from '@/types/coin'
import { convertAndRoundUpCurrency } from '@/utils/convertAndRoundUpCurrency'
import { formatDateToAgo } from '@/utils/formatDateToAgo'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import OverviewItem from './OverviewItem'


export default function CoinOverview() {
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
    <div className='absolute top-0 left-0 border border-red-400 w-[320px] bg-transparent justify-start '>
            {
              tickers.length > 0 && (
                <p className='flex flex-col items-end text-lg px-8 py-4'>
                  <OverviewItem title="시가총액: " content={convertAndRoundUpCurrency(+tickers[tickers.length - 1].atp)} />
                  <OverviewItem title="52주 최고가 달성일: " content={formatDateToAgo(tickers[tickers.length - 1].h52wdt)}/>
                  <OverviewItem title="52주 최고가:" content={convertAndRoundUpCurrency(tickers[tickers.length - 1].h52wp)}/>
                  <OverviewItem title="52주 최저가 달성일:" content={formatDateToAgo(tickers[tickers.length - 1].l52wdt)}/>
                  <OverviewItem title="52주 최저가:" content={convertAndRoundUpCurrency(tickers[tickers.length - 1].l52wp)} />
                  <OverviewItem title="24시간 누적 거래대금:" content={convertAndRoundUpCurrency(tickers[tickers.length - 1].atp24h)}/>
                  <OverviewItem title="24시간 누적 거래량:" content={`${Math.round(tickers[tickers.length - 1].atv24h).toLocaleString()}개`} />
                </p>
              )
            }
          </div>
  )
}
