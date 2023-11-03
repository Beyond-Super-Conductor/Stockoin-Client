'use client';
import React, { useEffect } from 'react'
import useCoinBoardActions from '@/hooks/useCoinBoardActions';
import { useParams } from 'next/navigation';
import CoinPost from './CoinPost';

export default function CoinPosts() {
  const { data, loading, getPostsByCoinName } = useCoinBoardActions();
  const params = useParams();

  useEffect(() => {
    if(!params.tokenDetail) return ;
    getPostsByCoinName(0,params.tokenDetail as string);
  },[])

  if(loading) return <div>loading...</div>

  return (
    <div className='flex flex-col items-center justify-center' key={'render-post-wrapper'}>
        <ul className='w-full' key={'render-post'}>
        <li className='flex py-2 px-4 text-start w-full gap-[2px] text-xl border-b border-b-indigo-600/60'>
          <span className='flex-[0.1] text-center'>순번</span>
          <span className='flex-[0.1] text-center'>말머리</span>
          <span className='flex-[0.5]'>제목</span>
          <span className='flex-[0.2] text-center'>작성자</span>
          <span className='flex-[0.15] text-center'>작성일</span>
          <span className='flex-[0.1] text-center'>조회</span>
          <span className='flex-[0.1] text-center'>추천</span>
        </li>
        {
          data?.posts?.map((post) => (
            <CoinPost key={post.id} post={post} />
          ))
        }
        </ul>
    </div>
  )
}

