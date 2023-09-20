import Link from 'next/link'
import React from 'react'
import CoinPosts from './CoinPosts'
import { useRecoilState } from 'recoil'
import { selectCoinstate } from '@/store/selectCoin'
import { useParams } from 'next/navigation'
import { CoinPost } from '@/types/coinBoardActions'

interface Props {
  posts: CoinPost[] | undefined;
}

export default function CoinBoard({posts}:Props) {
  const [selectCoin,setselectCoin] = useRecoilState(selectCoinstate);
  const {slug, tokenDetail} = useParams();
  return (
    <article className='flex-[0.6]'>
      <header className='relative flex justify-center items-center w-full h-[40px] shadow-sm border-b border-b-slate-200'>
        <p className='font-[500] text-3xl'>{selectCoin?.koName} 게시판</p>
        <Link
        href={`/dashboard/${slug}/${tokenDetail}/write`}
        className='absolute top-0 right-0 z-0 bg-indigo-400 px-4 py-2 text-white rounded-md shadow-md shadow-gray-200 ring-2 ring-indigo-600/60 font-bold'
        >
          글쓰기
        </Link>
      </header>
      <CoinPosts posts={posts}/>
    </article>
  )
}
