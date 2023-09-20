'use client'

import useWebsocket from '@/hooks/useWebsocket';
import { findCategoryState } from '@/store/findCoin';
import { selectCoinstate } from '@/store/selectCoin';
import { coinCategory } from '@/utils/constants';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import CoinOverview from './CoinOverview';
import CoinChart from './CoinChart';
import RankingBoard from './RankingBoard';
import ChatIconButton from '../../common/ChatIconButton';
import Chat from '../../chat/Chat';
import TradeHistoryPanel from './TradeHistoryPanel';
import CoinBoard from './CoinBoard';
import { CoinTicker } from '@/types/coin';
import { CoinPost } from '@/types/coinBoardActions';


interface Props {
  posts: CoinPost[] | undefined;
}

export default function DetailPage({posts}:Props) {
  const {slug, tokenDetail} = useParams();
  const { ticker } = useWebsocket({marketList:`KRW-${tokenDetail}`,marketQuery:`KRW-${tokenDetail}`})
  const [selectCoin,setselectCoin] = useRecoilState(selectCoinstate);
  const [_,setFindCategory] = useRecoilState(findCategoryState)
  const [tickers,setTickers] = useState<CoinTicker[]>([]);
  const [chatSwitch,setChatSwitch] = useState(false);

  const onClickChatSwitch = () => {
    setChatSwitch((prev) => !prev);
  }
  
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
    <>
    <div className='w-full h-[400px] bg-slate-100 flex items-center justify-center relative'>
          <CoinOverview tickers={tickers} />
          <CoinChart />
          <RankingBoard />
            {
              chatSwitch
              ? <ChatIconButton onClick={onClickChatSwitch} />
              : <Chat onClickChatSwitch={onClickChatSwitch} selectCoin={selectCoin} /> 
            }
      </div>
      <div className='flex'>
        <TradeHistoryPanel tickers={tickers} />
        <CoinBoard posts={posts} />
      </div>
    </>
  )
}
