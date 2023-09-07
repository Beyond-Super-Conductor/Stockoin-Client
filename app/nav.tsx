import ShowMoreCategoryButton from '@/components/nav/ShowMoreCategoryButton'
import { tokenCategory } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GlobalHeader() {



  return (
    <nav className='w-full flex flex-col h-auto items-center justify-between'>
      
      <ul className='w-full flex items-center justify-center px-4'>
        
        <li className='flex items-center justify-between flex-1 my-4'>
          <Link href="/">
          <Image
            src="/mainLogo.jpg"
            alt="logo"
            className=' rounded-md' width={60} height={60} style={{aspectRatio: 1}} priority
          />

          </Link>
          <form className='flex-1 flex items-center gap-2 justify-center'>
          <input
            className='border border-slate-400 h-24 pl-4 rounded-md placeholder:text-md min-w-[400px] placeholder:text-slate-500 focus:outline-sky-400'
            type="text"
            placeholder='주식회사 또는 관심 있는 분야를 검색해보세요!'
            />
          <button className='border h-24 w-24 min border-slate-300 text-slate-400 rounded-md p-1 hover:bg-slate-300 hover:text-slate-600'>
            검색</button>
          </form>
        </li>
        
        <li className='flex-1 flex justify-end items-center gap-10'>
          <Link href="/partner">파트너로그인</Link>
          <Link href="/auth">로그인 / 회원가입</Link>
          <Link href="/auth">내 판</Link>
        </li>

      </ul>
      {/* hover:bg-gradient-radial hover:to-[#4a74fe] hover:from-[-50%] from-[#4ad4e9] transition-all duration-500 */}
      <ul className='relative w-full justify-between flex items-center h-auto mt-4 border-b border-slate-300 p-2 text-slate-500 px-4 cursor-pointer'>
        
        {
          tokenCategory.slice(0,5).map((category) => (
          <li className='m-2 min-h-[40px] hover:underline-offset-4 hover:underline cursor-pointer'>
            <Link className='h-[40px] text-center flex justify-centeri items-center font-bold' href={`/dashboard/${category.enName}`}>
               <span className='inline-block mr-2'>{category.icon}</span>
              {category.koName}
              </Link>
          </li>
          ))
        }
        <ShowMoreCategoryButton />
    </ul>
    </nav>
  )
}
