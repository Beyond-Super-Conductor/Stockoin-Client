'use client'

import { findCategoryState } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import React from 'react'
import { useRecoilValue } from 'recoil';

export default function CoinTitle() {
  const titleValue = useRecoilValue(findCategoryState);
  const selectToken = useRecoilValue(selectTokenState);
  // TODO: 폰트 바꾸기
  return (
    <h1 className={`${selectToken.enName ? 'text-2xl text-slate-300' : 'text-5xl text-white'} font-bold text-white mr-10`} >
      {
      titleValue.enName &&
      <span className='text-bold'>
      {titleValue.koName}
      </span>
      }
      {
        selectToken.enName &&
        <p className='text-4xl text-white'>
          {selectToken.koName}
           <span className='text-slate-400 text-2xl'>({selectToken.enName})</span> 
        </p>
      }
      </h1>
  )
}
