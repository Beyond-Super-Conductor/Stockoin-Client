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
    <h1 className={`${selectCoin.enName ? 'text-2xl text-slate-300' : 'text-5xl text-white'} font-bold text-white mr-10`} >
    {
    (titleValue.koName && !selectCoin.koName)
    ? <span className='text-4xl font-bold bg-gradient-to-r'>{titleValue.koName}</span>
    : <span className='text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
        {titleValue.koName}
      </span>
      }
      {
        selectCoin.enName &&
        <p className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
          {selectCoin.koName}
          <span className='text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text '>
            ({selectCoin.enName})
          </span> 
        </p>
      }
      
      </h1>
  )
}
