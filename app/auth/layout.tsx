import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'

import { notoSansKr } from '../fonts/fonts'

interface Props {
  children: React.ReactNode
}


export default function AuthLayout({children}: Props) {
  return (
    
    <div className={`bg-yellow-100/20 min-h-[100vh] h-auto ${notoSansKr.className}`}>
      <div className='h-1' />
      <h1 className='mt-4 bg-white pl-4 py-4 border-y-2 border-slate-400'>
        <Link className='flex items-center' href='/'>
          <Image src='/mainLogo.jpg' width={100} height={100} alt='logo' />
          <p className='text-2xl px-4'>플랫폼 계정으로 스토코인에 로그인하세요!</p>
        </Link>
      </h1>
      <main className='m-4 p-8 bg-gradient-to-l to-[#5959a4] from-[-50%] from-[#b3f864] text-white h-auto border border-slate-400 rounded-md'>
        <h2 className='text-[3rem] font-[700] text-center'>놀면서 투자하는 코인 커뮤니티, 스토코인</h2>
        {children}
      </main>
    </div>
    
  )
}
