
import CoinTitle from '@/app/components/dashboard/CoinTitle'
import DashboardLayoutLogo from '@/app/components/dashboard/DashboardLayoutLogo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {

  return (
    <div className='flex flex-col items-center w-full h-[1000px]'>

      <div className='w-full flex items-center justify-end px-4 h-8'>
        <Link href='/auth' className='text-2xl'>아직 스토코인 회원이 아니라면? 회원가입 10초 컷</Link>
      </div>

      <nav className='flex items-center w-full h-auto border-b border-b-slate-400/60 bg-[rgb(0,122,255)]'>
        <DashboardLayoutLogo />
        <div className='p-2 flex-1 flex items-center justify-between bg-gradient-to-l to-[rgba(89,89,164,1)] from-[-50%] from-[#b3f864] h-full'>
          <CoinTitle />
          <form action="" className='flex items-center gap-2'>
            <input
              className='w-[360px]  font-bold h-24 mb-[1px] rounded-full border border-slate-400 p-1 pl-6 placeholder:text-2xl min-w-[200px] placeholder:text-slate-500 focus:outline-sky-400'
              type="text"
              placeholder='찾으려는 토큰을 검색해보세요!'
              />
            <button className='font-bold h-24 w-40 ring-2 ring-red-400 rounded-full shadow-sm shadow-sky-400 bg-white text-slate-700'> 
              검색
            </button>
          </form>
        </div>
      </nav>
      {children}
    </div>
  )
}
