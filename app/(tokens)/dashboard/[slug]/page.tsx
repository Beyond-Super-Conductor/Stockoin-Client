'use client'
import { dashboardTitleValueAtom } from '@/store/dashboardTitleValueAtom';
import { TokenCategories, token } from '@/types/token';
import { tokenCategory } from '@/utils/constants';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter,useParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';

export default function UbciPage() {
  const {slug} = useParams();
  const [tokens, setTokens] = useState<token[] | []>();
  const [category, setCategory] = useState<TokenCategories>();
  const [titleValue, setTitleValue] = useRecoilState(dashboardTitleValueAtom);
  
  useEffect(() => {
    
    const findTokenCategory = tokenCategory.find((item) => item.enName === slug);

    if(findTokenCategory){
      setTokens(findTokenCategory.tokens);
      setCategory(findTokenCategory);
      setTitleValue({enName: findTokenCategory.enName, koName: findTokenCategory.koName})
    }
    
  }, [slug])

  return (
    <div className='w-full'>
      <Suspense fallback={<div>loading...</div>}>
        <div className='flex flex-col items-center justify-center w-full'>
          
          
          {
            tokens?.map((token) => (
              <Link href={`/dashboard/${slug}/${token.enName}`} key={token.enName} className='w-full flex flex-col items-start justify-start p-4 min-h-[80px]'>
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
