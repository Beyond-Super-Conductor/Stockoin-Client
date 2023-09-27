import React from 'react'
import CoinPosts from './CoinPosts'
import { CoinPost } from '@/types/coinBoardActions'
import BoardHeader from './BoardHeader'

interface Props {
  posts: CoinPost[] | undefined
}

export default async function CoinBoard({ posts }: Props) {
    
  return (
    <article className='flex-[0.7]'>
      <BoardHeader />
      <CoinPosts posts={posts}/>
    </article>
  )
}
