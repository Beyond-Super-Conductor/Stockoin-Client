
import { CoinPost } from '@/types/coinBoardActions';
import React from 'react'

// TODO:  use client로 제목만 가져다 붙이는 로직 작성

interface Props {
  posts: CoinPost[];
}

export default function CoinPosts({posts}:Props) {
  
  // const posts = await getCoinPosts(id);
  return (
    <div className='flex flex-col items-center justify-center'>
        {/* 여기에 게시판 제목 뿌려야함 */}
        {
          posts?.map((post) => (
            <p key={post.id}>{post.id}</p>
          ))
        }
    </div>
  )
}
