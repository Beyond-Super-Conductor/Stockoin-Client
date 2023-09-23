'use client'
import { selectCoinstate } from '@/store/selectCoin';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { useRecoilState } from 'recoil';

export default function BoardHeader() {
  const [selectCoin,setselectCoin] = useRecoilState(selectCoinstate);
  const {slug, tokenDetail} = useParams();
  return (
    <div className='relative flex justify-start items-center gap-2 w-full h-[40px] shadow-sm border-b border-b-slate-200'>
    <p className='font-[500] text-3xl'>{selectCoin?.koName} 게시판</p>
    <Link
    href={`/dashboard/${slug}/${tokenDetail}/write`}
    className='z-0 bg-indigo-400 px-4 text-white rounded-md shadow-md shadow-gray-200 ring-2 ring-indigo-600/60 font-bold'
    >
      글쓰기
    </Link>
  </div>
  )
}
