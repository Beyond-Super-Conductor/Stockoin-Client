import { tokenCategory } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
  return (
    <div className='flex flex-col items-center w-full h-[1000px]'>
{/* // background: linear-gradient(90deg, rgba(89,89,164,1) 57%, rgba(111,86,166,1) 100%); */}
      <div className='w-full flex items-center justify-end px-4 h-8'>
        <Link href='/auth' className='text-sm'>아직 스토코인 회원이 아니라면? 회원가입 10초 컷</Link>
      </div>
      <nav className='flex items-center w-full h-auto border-b border-b-slate-400/60'>
      <div className='hover:border-b-2 border-b-2 border-transparent hover:border-b-slate-400'>
          <Link href="/">
            <Image src="/mainLogo.jpg" alt="logo" className='min-w-[80px] rounded-md' width={80} height={80} style={{aspectRatio: 1}} priority />
          </Link>
        </div>
      <ul className='flex-[0.7] flex flex-wrap items-center justify-start pl-4'>
        {
          tokenCategory.map((category, index) => (
        <li className='m-2 min-w-40 min-h-[40px] hover:underline-offset-4 hover:underline hover:text-slate-600 cursor-pointer'>
          <Link className='block w-40' href={`/dashboard/${category.enName}`}>{category.koName}</Link>
        </li>
          ))
        }
        </ul>
        
        <div className='p-2 flex-[0.3] flex flex-col items-center justify-center bg-gradient-to-l to-[rgba(89,89,164,1)] from-[-50%] from-[#b3f864] h-full'>
          <form action="" className=''>
            <input
              className='w-full mb-[1px] rounded-full border border-slate-400 p-1 pl-2 placeholder:text-sm min-w-[200px] placeholder:text-slate-500 focus:outline-sky-400'
              type="text"
              placeholder='찾으려는 토큰을 검색해보세요!'
              />
            <button className='w-full rounded-full shadow-sm shadow-sky-400 ring-slate-400 bg-white text-slate-700 px-3 py-1'> 
              검색
            </button>
          </form>
        </div>

      </nav>
      {children}
    </div>
  )
}
