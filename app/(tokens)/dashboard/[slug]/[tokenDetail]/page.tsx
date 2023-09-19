'use client'

import Chat from '@/app/components/chat/Chat';
import ChatIconButton from '@/app/components/common/ChatIconButton';
import useWebsocket, { CoinTicker } from '@/hooks/useWebsocket';
import { findCategoryState } from '@/store/findCoin';
import { selectCoinstate } from '@/store/selectCoin';
import { coinCategory } from '@/utils/constants';
import { convertAndRoundUpCurrency } from '@/utils/convertAndRoundUpCurrency';
import { formatDateToAgo } from '@/utils/formatDateToAgo';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function page() {
  const {slug, tokenDetail} = useParams();

  const [selectCoin,setselectCoin] = useRecoilState(selectCoinstate);
  const [findCategory,setFindCategory] = useRecoilState(findCategoryState)
  const [tickers,setTickers] = useState<CoinTicker[]>([]);
  
  const [chatSwitch,setChatSwitch] = useState(false);

  const onClickChatSwitch = () => {
    setChatSwitch((prev) => !prev);
  }
  
  const { ticker } = useWebsocket({marketList:`KRW-${tokenDetail}`,marketQuery:`KRW-${tokenDetail}`})
  
  
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
    <div className='w-full flex flex-col'>

      <div className='w-full h-[400px] bg-slate-100 flex items-center justify-center relative'>
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
          <div className='flex-[0.8] border-r border-r-red-400 h-full '>
              차트
          </div>
          <div className='flex-[0.2] h-full flex flex-col justify-start items-start'>
              <p>이번주 야수코인 4위</p>
              <p>이번주 풀매수코인 3위</p>
              <p>금일 핫코인 1위</p>
          </div>
            {
              chatSwitch
              ? <ChatIconButton onClick={onClickChatSwitch} />
              : <Chat onClickChatSwitch={onClickChatSwitch} selectCoin={selectCoin} />
              
            }
      </div>

      
      
      <div className='flex '>

        <div className='flex-[0.3]'>
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
            <article className='flex-[0.7]'>
              <header className='relative flex justify-center items-center w-full h-[40px] shadow-sm border-b border-b-slate-200'>
                <p className='font-[500] text-3xl'>{selectCoin?.koName} 게시판</p>
                <Link
                href={`/dashboard/${slug}/${tokenDetail}/write`}
                className='absolute top-0 right-0 z-0 bg-indigo-400 px-4 py-2 text-white rounded-md shadow-md shadow-gray-200 ring-2 ring-indigo-600/60 font-bold'
                >
                  
                  글쓰기
                </Link>  
              </header>
              <div className='flex flex-col items-center justify-center'>
                <p>아필패는 과학이다</p>
                <p>아크 안간 흑우 손들어라</p>
                <p>여기는 게시판자리다 알겠냐?</p>
                <p>신한 444-777-101033 형님들 의리가 살아있음을 보여주십쇼</p>
                <p>아크를 대하는 자세</p>
              </div>
            </article>            
            
          </div>
    </div>
  )
}