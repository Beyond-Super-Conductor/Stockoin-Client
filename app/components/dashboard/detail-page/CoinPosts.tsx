import { CoinPost as ICoinPost } from '@/types/coinBoardActions';
import React from 'react'
import CoinPost from './CoinPost';

interface Props {
  posts: ICoinPost[] | undefined;
}

export default function CoinPosts( { posts }: Props) {
  
  
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
          posts?.map((post) => (
            <CoinPost key={post.id} post={post} />
          ))
        }
        </ul>
    </div>
  )
}
