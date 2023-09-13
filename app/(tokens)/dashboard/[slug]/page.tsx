'use client'
import { findCategoryState } from '@/store/findCoin';
import { selectCoinstate } from '@/store/selectCoin';
import { Coin } from '@/types/token';
import { coinCategory } from '@/utils/constants';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil';

export default function UbciPage() {
  const {slug} = useParams();
  const [coins, setcoins] = useState<Coin[]>();
  const [findCategory, setFindCategory] = useRecoilState(findCategoryState);
  const resetselectCoin = useResetRecoilState(selectCoinstate);

  
  useEffect(() => {
    resetselectCoin()
    const findcoinCategory = coinCategory.find((item) => item.enName === slug);
    if(findcoinCategory){
      const { enName,icon,koName,coins } = findcoinCategory
      setcoins(coins);
      setFindCategory({enName: enName, koName: koName, coins: coins})
    }
  }, [slug])

  return (
    <div className='w-full'>
      <Suspense fallback={<div>loading...</div>}>
        <div className='flex flex-col items-center justify-center w-full'>
          {
            coins?.map((token) => (
              <Link href={{
                pathname: `/dashboard/${slug}/${token.enName}`,
                }} key={token.enName} className='w-full flex flex-col items-start justify-start p-4 min-h-[80px]'>
                <p className='text-sky-500 text-3xl font-bold'>{token.koName}</p>
                <p className='text-slate-400/80 text-xl'>{token.enName}</p>
              </Link>
            ))
          }
        </div>
      </Suspense>
    </div>
  )
}
