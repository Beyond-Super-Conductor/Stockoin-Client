import CoinOverview from './CoinOverview';
import CoinChart from './CoinChart';
import RankingBoard from './RankingBoard';
import TradeHistoryPanel from './TradeHistoryPanel';
import CoinBoard from './CoinBoard';
import Chat from '../../chat/Chat';
import { CoinPost } from '@/types/coinBoardActions';
interface Props {
  posts: CoinPost[] | undefined
}

export default function DetailPage({posts}: Props) {

  return (
    <>
    <div className='w-full h-[400px] bg-slate-100 flex items-center justify-center relative'>
      <CoinOverview />
      <CoinChart />
      <RankingBoard />
      <Chat />
    </div>
    <div className='flex'>
      <TradeHistoryPanel />
        <CoinBoard posts={posts} />
    </div>
    </>
  )
}
