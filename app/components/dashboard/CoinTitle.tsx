'use client'

import { dashboardColorState } from '@/store/dashboardColor';
import { findCategoryState } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import React from 'react'
import { useRecoilValue } from 'recoil';

export default function CoinTitle() {
  const titleValue = useRecoilValue(findCategoryState);
  const selectToken = useRecoilValue(selectTokenState);
  const dashboardColor = useRecoilValue(dashboardColorState);
  // TODO: 폰트 바꾸기
  return (
    <h1 className={`${selectToken.enName ? 'text-2xl text-slate-300' : 'text-5xl text-white'} font-bold text-white mr-10`} >
    {
    (titleValue.koName && !selectToken.koName)
    ? <span className='text-4xl font-bold bg-gradient-to-r'>{titleValue.koName}</span>
    : <span className='text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
    {titleValue.koName}
    </span>
      }
      {
        selectToken.enName &&
        <p className='text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'
        >
          {selectToken.koName}
           <span className='text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text '>({selectToken.enName})</span> 
        </p>
      }
      
      </h1>
  )
}
