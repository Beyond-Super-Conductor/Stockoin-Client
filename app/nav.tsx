import { tokenCategory } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GlobalHeader() {
  return (
    <nav className='w-full flex flex-col h-auto items-center justify-between'>
      
      <ul className='w-full flex items-center justify-center px-4'>
        
        <li className='flex items-center justify-between flex-1 min-h-[80px] py-4'>
          <Link href="/">
          <Image src="/mainLogo.jpg" alt="logo" className='min-w-[80px] rounded-md' width={100} height={100} style={{aspectRatio: 1}} priority />
          </Link>
          <form className='flex-1 flex items-center gap-2 justify-center'>
          <input
            className='border border-slate-400 p-1 pl-2 rounded-md placeholder:text-sm min-w-[300px] placeholder:text-slate-500 focus:outline-sky-400'
            type="text"
            placeholder='주식회사 또는 관심 있는 분야를 검색해보세요!'
            />
          <button className='border h-full min border-slate-300 text-slate-400 rounded-md p-1 hover:bg-slate-300 hover:text-slate-600'>
            검색</button>
          </form>
        </li>
        
        <li className='flex-1 flex justify-end items-center gap-10'>
          <Link href="/partner">파트너로그인</Link>
          <Link href="/auth">로그인 / 회원가입</Link>
          <Link href="/auth">내 판</Link>
        </li>

      </ul>
      
      <ul className='w-full flex-wrap shadow-md ring-2 ring-slate-300 rounded-md justify-between flex items-center h-auto mt-4 border-b border-slate-400 p-2 text-slate-500 px-4 cursor-pointer hover:bg-black/60 hover:text-white hover:border-2 hover:border-indigo-400 font-semibold'>
        {/* TODO: 더보기 기능으로 메뉴판 축소하기 */}
      {
        tokenCategory.map((category) => (
        <li className='m-2 min-w-40 min-h-[40px] hover:underline-offset-4 hover:underline hover:text-slate-600 cursor-pointer'>
          <Link className='block w-40' href={`/dashboard/${category.enName}`}>{category.koName}</Link>
        </li>
        ))
      }
      </ul>
      
    </nav>
  )
}
