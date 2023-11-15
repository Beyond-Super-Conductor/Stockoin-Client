'use client'

import { findCategoryState } from '@/store/findCoin';
import { selectCoinstate } from '@/store/selectCoin';
import React from 'react'
import { useRecoilValue } from 'recoil';

export default function CoinTitle() {
  const titleValue = useRecoilValue(findCategoryState);
  const selectCoin = useRecoilValue(selectCoinstate);
  
  // TODO: 폰트 바꾸기
  return (
    <h1 className={`ml-4 flex flex-col justify-center 
    `}>
    {
    (titleValue.koName && !selectCoin.koName)
    ? <span className=' text-4xl text-white font-bold'>
      {titleValue.koName}
      </span>
    : <span className='text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent text-clip bg-clip-text'>
        {titleValue.koName}  
      </span>
      }
      {
        selectCoin.enName &&
        <p className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent text-clip bg-clip-text'>
          {selectCoin.koName}
          <span className='text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent text-clip bg-clip-text '>
            ({selectCoin.enName})
          </span> 
        </p>
      }
      </h1>
  )
}
