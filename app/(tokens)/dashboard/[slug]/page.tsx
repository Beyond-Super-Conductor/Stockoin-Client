'use client'
import { findCategoryState } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import { Coin } from '@/types/token';
import { tokenCategory } from '@/utils/constants';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil';

export default function UbciPage() {
  const {slug} = useParams();
  const [tokens, setTokens] = useState<Coin[]>();
  const [findToken, setFindToken] = useRecoilState(findCategoryState);
  const resetSelectToken = useResetRecoilState(selectTokenState);

  
  useEffect(() => {
    resetSelectToken()
    const findTokenCategory = tokenCategory.find((item) => item.enName === slug);
    if(findTokenCategory){
      setTokens(findTokenCategory.tokens);
      setFindToken({enName: findTokenCategory.enName, koName: findTokenCategory.koName, tokens: findTokenCategory.tokens})

    }
  }, [slug])

  return (
    <div className='w-full'>
      <Suspense fallback={<div>loading...</div>}>
        <div className='flex flex-col items-center justify-center w-full'>
          
          
          {
            tokens?.map((token) => (
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
