import CoinOverview from './CoinOverview';
import CoinChart from './CoinChart';
import RankingBoard from './RankingBoard';
import TradeHistoryPanel from './TradeHistoryPanel';
import CoinBoard from './CoinBoard';
import Chat from '../../chat/Chat';
import { CoinPost } from '@/types/coinBoardActions';
interface Props {
  
}

export default function DetailPage() {

  return (
    <>
    <div className='w-full h-[400px] bg-slate-100 flex items-center justify-center relative'>
      <CoinOverview />
      <CoinChart />
      <RankingBoard />
      <Chat />
    </div>
    <div className='flex gap-2 min-h-[400px]'>
      <TradeHistoryPanel />
      <CoinBoard />
    </div>
    </>
  )
}
