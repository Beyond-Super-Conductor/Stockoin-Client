import React from 'react'
import CoinPosts from './CoinPosts'
import { CoinPost } from '@/types/coinBoardActions'
import BoardHeader from './BoardHeader'

interface Props {
  
}

export default async function CoinBoard() {
    
  return (
    <article className='flex-[0.7]'>
      <BoardHeader />
      <CoinPosts/>
    </article>
  )
}
