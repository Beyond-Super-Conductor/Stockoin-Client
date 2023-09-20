'use client'
import CoinTitle from '@/app/components/dashboard/CoinTitle'
import DashboardLayoutLogo from '@/app/components/dashboard/DashboardLayoutLogo'
import { dashboardColorState } from '@/store/dashboardColor'
import React, { useEffect } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
  const dashboardColor = useRecoilValue(dashboardColorState);
  const resetBackgroundColor = useResetRecoilState(dashboardColorState);
  const handleBackButtonClick = () => resetBackgroundColor();

  useEffect(() => {
    window.addEventListener('popstate', handleBackButtonClick)
    return () => {
      window.removeEventListener('popstate', handleBackButtonClick)
    }
  },[])

  return (
    <div className='flex flex-col items-center w-full h-[1000px]'>
      <nav className='flex items-center w-full h-auto border-b border-b-slate-400/60'>
        <DashboardLayoutLogo />
        <div
        className={`p-2 flex-1 flex items-center justify-between h-full`}
        style={{
          background: `linear-gradient(to left, ${dashboardColor[0]}, ${dashboardColor[1]}, ${dashboardColor[2]}, ${dashboardColor[3]})`,
        }}
        >
          <CoinTitle />
          <form action="" className='flex items-center gap-2'>
            <input
              className='w-[360px] font-bold h-24 mb-[1px] rounded-full border border-slate-400 p-1 pl-6 placeholder:text-2xl min-w-[200px] placeholder:text-slate-500 focus:outline-sky-400'
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
