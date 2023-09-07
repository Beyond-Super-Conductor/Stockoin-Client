'use client'
import { dashboardTitleValueAtom } from '@/store/dashboardTitleValueAtom';
import React from 'react'
import { useRecoilValue } from 'recoil';

export default function CoinTitle() {
  const titleValue = useRecoilValue(dashboardTitleValueAtom);
  // TODO: 폰트 바꾸기
  return (
    <h1 className='text-5xl font-bold text-white mr-10'>
      {
      titleValue.enName &&
      <span className='text-bold'>
      {titleValue.koName}
      </span>
      }
      </h1>
  )
}
