'use client';
import ShowMoreCategoryButton from '@/app/components/nav/ShowMoreCategoryButton'
import useThrottle from '@/hooks/useThrottle';
import { coinCategory } from '@/utils/constants';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function GlobalHeader() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { throttleScroll } = useThrottle();

  const throttleScrollHandler = () => {
    throttleScroll(() => {
      window.scrollY > 0
      ? setIsIntersecting(true)
      : setIsIntersecting(false)
    }, 300)
  }

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttleScrollHandler);
  })
  return (
    <nav id="main--navigation" className={`sticky top-0 z-[999] w-full flex flex-col h-auto items-center justify-between ${isIntersecting ? 'bg-black/80 text-white' : 'bg-white/40 text-black' } transition-all duration-300`}>
      
      <ul className='w-full flex md:flex-row flex-col items-center justify-center px-4 '>
        
        <li className='flex items-center justify-between flex-1 my-4'>
          <Link href="/">
            {
              isIntersecting
              ? <Image
                  src='/mainLogo.jpg'
                  alt="logo"
                  className='min-w-[60px] rounded-md' width={60} height={60} style={{aspectRatio: 1}}
                  priority
                  
                />
            : <Image
                src='/mainLogo2.png'
                alt="logo"
                className='min-w-[60px] rounded-md' width={60} height={60} style={{aspectRatio: 1}}
              />
            }
          </Link>
          <form className='flex-1 flex items-center gap-2 justify-center'>
          <input
            className='border border-slate-400 h-24 pl-4 rounded-md placeholder:text-md min-w-[400px] placeholder:text-slate-500 focus:outline-sky-400'
            type="text"
            placeholder='UBCI 또는 관심 있는 토큰을 검색해보세요!'
            />
          <button className='border h-24 w-24 min border-slate-300  rounded-md p-1 hover:bg-slate-300 hover:text-slate-600 '>
            검색</button>
          </form>
        </li>
        <li className=' flex-1 flex justify-end items-center gap-10'>
          <Link href="/partner">파트너로그인</Link>
          <Link href="/auth">로그인 / 회원가입</Link>
          <Link href="/auth">내 판</Link>
        </li>

      </ul>
      {/* hover:bg-gradient-radial hover:to-[#4a74fe] hover:from-[-50%] from-[#4ad4e9] transition-all duration-500 */}
      <ul className='relative w-full md:mt-0 mt-8 justify-between flex items-center h-auto border-b border-slate-300 px-4 cursor-pointer'>
        {
          coinCategory.slice(0,5).map((category) => (
          <li key={category.enName} className='m-2 min-h-[40px] cursor-pointer'>
            <Link className='h-[40px] text-center flex flex-col md:flex-row justify-center items-center gap-2 font-bold' href={`/dashboard/${category.enName}`}>
              <Image
                src={category.icon}
                alt="logo"
                className='rounded-md' width={30} height={30} style={{aspectRatio: 1}}
              />
              <span className='text-xl md:text-3xl block pb-4 md:pb-0'>{category.koName}</span>
            </Link>
          </li>
          ))
        }
        <ShowMoreCategoryButton />
    </ul>
    </nav>
    
  )
}
