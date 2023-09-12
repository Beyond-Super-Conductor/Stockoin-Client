'use client'
import HighLowUnderline from '@/app/components/home/widgets/HighLowUnderline';
import useWebsocket, { CoinTicker } from '@/hooks/useWebsocket';
import { findCategoryState, selectTokens } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import { tokenCategory } from '@/utils/constants';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

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
    if(tickers.length < 20){
      setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev]);
    } else {
      setTickers((prev) => [ticker[`KRW-${tokenDetail}`],...prev.slice(0,19)]);
    }
    
    
  },[ticker]);


  // cd: string; // 코인 코드 (KRW-BTC)
  // tp: number; // 현재가 
  // scr: number; // 전일대비 등락률
  // tv: number; // 가장 최근 거래량
  // ms: string; // 시장명
  // mw: string; // 시가총액
  // h52wp: number; // 52주 최고가
  // h52wdt: string; // 52주 최고가 달성일
  // l52wp: number; // 52주 최저가
  // l52wdt: string; // 52주 최저가 달성일
  // atp24h: number; // 24시간 가격
  // atv24h: number; // 24시간  거래량
  // isRising: boolean;
  console.log(tickers);
  return (
    <div className='w-full'>
      <div className='w-full h-[400px] bg-slate-400 flex items-center justify-center'>
          <div className='flex-[0.7]'>차트</div>
          <div className='flex-[0.3] border border-red-400 h-full'>
            {
              tickers.length > 0 && (
                <p className='flex flex-col items-center justify-center'>
                  <span>{tickers[tickers.length - 1].atp}</span>
                  <span>{tickers[tickers.length - 1].mn}</span>
                  <span>{tickers[tickers.length - 1].h52wdt}</span>
                  <span>{tickers[tickers.length - 1].h52wp}</span>
                  <span>{tickers[tickers.length - 1].l52wdt}</span>
                  <span>{tickers[tickers.length - 1].l52wp}</span>
                  <span>{tickers[tickers.length - 1].atp24h}</span>
                  <span>{tickers[tickers.length - 1].atv24h}</span>
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

  // <div>
          //   <p className={`relative flex-1 text-2xl font-bold flex items-center justify-center ${item[`KRW-${tokenDetail}`].isRising ? 'text-red-500' : 'text-blue-400'}`}>
          //       <span> {(ticker[`KRW-${tokenDetail}`].tp).toLocaleString()} 원</span>
          //       <span className={`absolute top-0 left-0`}>
          //         {ticker[`KRW-${tokenDetail}`].isRising ? '▲' : '▼'}
          //       </span>
          //       <HighLowUnderline isRising={ticker[`KRW-${tokenDetail}`].isRising} />
          //     </p>
          // </div>
        