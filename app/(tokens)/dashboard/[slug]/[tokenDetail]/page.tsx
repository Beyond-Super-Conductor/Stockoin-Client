'use client'
import HighLowUnderline from '@/app/components/home/widgets/HighLowUnderline';
import useWebsocket, { CoinTicker } from '@/hooks/useWebsocket';
import { findCategoryState } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import { tokenCategory } from '@/utils/constants';
import { convertAndRoundUpCurrency } from '@/utils/convertAndRoundUpCurrency';
import { formatDateToAgo } from '@/utils/formatDateToAgo';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function page() {
  const [selectToken,setSelectToken] = useRecoilState(selectTokenState);
  const [findCategory,setFindCategory] = useRecoilState(findCategoryState)
  const {slug, tokenDetail} = useParams();
  const { ticker } = useWebsocket({marketList:`KRW-${tokenDetail}`,marketQuery:`KRW-${tokenDetail}`})
  const [tickers,setTickers] = useState<CoinTicker[]>([]);
  
  useEffect(() => {  
    const selectedCategory = tokenCategory.find((item) => item.enName === slug);
    if(!selectedCategory) return;
    setFindCategory(selectedCategory);
    const selectedToken = selectedCategory.tokens
    .find((item) => item.enName === tokenDetail);
    if(!selectedToken) return;
    setSelectToken(selectedToken);
  },[slug, tokenDetail]);

  useEffect(() => {
    if(!ticker || !ticker[`KRW-${tokenDetail}`]) return;
    tickers.length < 20
    ? setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev])
    : setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev.slice(0,19)]);
  },[ticker]);
  



// export interface CoinTicker {
//   cd: string; // 코인 코드 (KRW-BTC)
//   ab?: "BID" | "ASK"; // 매수/매도
//   tp: number; // 현재가 
//   scr: number; // 전일대비 등락률
//   tv: number; // 가장 최근 거래량
//   ms: string; // 스테이터스
//   atp: string; // 시가총액
//   atv: number; // 총거래량
//   mn: string; // 마켓명
//   h52wp: number; // 52주 최고가
//   h52wdt: string; // 52주 최고가 달성일
//   l52wp: number; // 52주 최저가
//   l52wdt: string; // 52주 최저가 달성일
//   atp24h: number; // 24시간 가격
//   atv24h: number; // 24시간  거래량
//   isRising: boolean;
//   aav?: number // 누적 매도량 - ask
//   abv?: number // 누적 매수량 - bid
//   c?: 'RISE' | 'EVEN' | 'FALL' // 전일 대비
//   cp?: number // 부호 없는 전일 대비 값
//   cr?: number // 부호 없는 전일 대비 등락률
//   dd?: null // 상장폐지일
//   hp?: number // 고가
//   its?: false // 거래 정지 여부
//   lp?: number // 저가
//   mw?: "NONE" | "CAUTION" //유의 종목 지정 여부 
//   op?: number // 시가
//   pcp?: number // 전일 종가
//   scp?: number // 부호 있는 전일 대비 값
//   st?: "REALTIME" | "SNAPSHOT" // 스트림 타입
//   tdt?: string // 최근 거래 일자
//   tms?: number // 타임스탬프
//   ttm?: string // 최근 거래 시각 HHmmss
//   ttms?: number // 거래 체결 타임스탬프
// }
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
                <HighLowUnderline isRising={item.isRising} />
              </p>
              <span className={`flex-1 text-2xl font-bold text-center ${item.scr > 0 ? 'text-red-500' : 'text-blue-400'}`}> {(item.scr * 100).toFixed(3)}%</span>
              <span className='flex-1 text-2xl font-bold text-center'> {(item.tv).toFixed(3)}개</span>
            </div>
            )
          )}
      </div>
    </div>
  )
}