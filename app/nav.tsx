'use client';
import ShowMoreCategoryButton from '@/app/components/nav/ShowMoreCategoryButton'
import useAuth from '@/hooks/useAuth';
import useThrottle from '@/hooks/useThrottle';
import { coinCategory } from '@/utils/constants';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function GlobalHeader() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  const { getUserProfile,user } = useAuth();
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
  },[])

  useEffect(() => {
    getUserProfile();
  },[])

  return (
    <nav id="main--navigation"
    className={`
    sticky top-0 z-[999] w-full flex flex-col h-auto items-center justify-between transition-all duration-300
    ${isIntersecting ? 'bg-black/80 text-white' : 'bg-white/40 text-black' }
    `}>
      
      <ul className='w-full flex md:flex-row flex-col items-center justify-center px-4 '>
        
        <li className='flex items-center justify-between flex-1 my-4'>
          <Link href="/">
            {
              isIntersecting
              ? <Image
                  src='/mainLogo.jpg'
                  alt="logo"
                  className='min-w-[60px] rounded-lg' width={60} height={60} style={{aspectRatio: 1}}
                  priority
                />
            : <Image
                src='/mainLogo2.png'
                alt="logo"
                className='min-w-[60px] rounded-lg' width={60} height={60} style={{aspectRatio: 1}}
              />
            }
          </Link>
          <form className='flex-1 flex items-center gap-2 justify-center'>
          <input
            className='border border-slate-400 h-24 pl-4 rounded-lg placeholder:text-md min-w-[400px] placeholder:text-slate-500 focus:outline-sky-400'
            type="text"
            placeholder='UBCI 또는 관심 있는 토큰을 검색해보세요!'
            />
          <button className='border h-24 w-24 min border-slate-300  rounded-lg p-1 hover:bg-slate-300 hover:text-slate-600 '>
            검색</button>
          </form>
        </li>
        <li className=' flex-1 flex justify-end items-center gap-10'>
          {
            !user
            ? <div
                className={`py-4  px-8 rounded-lg flex gap-4
                  ${isIntersecting ? 'bg-slate-700 bg-opacity-70' : 'bg-sky-200/80'}
                  `}>
                <Link
                  className='
                    sky-400 border px-4 rounded-lg text-white font-bold shadow-sm border-white hover:border-sky-400 hover:bg-white hover:text-sky-400 transition-all duration-300'
                    href="/partner">
                    파트너 로그인
                </Link>
                <Link
                  className={`sky-400 border px-4 rounded-lg text-white font-bold shadow-sm border-l-indigo-400 border-t-indigo-400 border-r-rose-400 border-b-rose-400
                              hover:border-l-rose-400 hover:border-t-rose-400 hover:border-r-indigo-400 hover:border-b-indigo-400 hover:bg-white transition-all duration-300`}
                  href="/auth"
                  >
                    <span className='text-indigo-400'>로그인</span>
                    <span className='text-clip text-rose-400'> / </span> 
                    <span className='text-rose-400'>회원가입</span>
                </Link>
              </div>
            : <div className='py-4 bg-sky-200 px-8 rounded-lg flex gap-4'>
                <Link href='/profile'>{user.nickname}님 환영합니다!</Link>
                <button onClick={() => {localStorage.clear(); location.href = '/'}}>로그아웃</button>
                <Link href="/auth">내 판</Link>
              </div>
          }
          
        </li>
          
      </ul>
      <ul className='relative w-full md:mt-0 mt-8 justify-between flex items-center h-auto border-b border-slate-300 px-4 cursor-pointer'>
        {
          coinCategory.slice(0,5).map((category) => (
          <li key={category.enName} className='m-2 min-h-[40px] cursor-pointer'>
            <Link className='h-[40px] text-center flex flex-col md:flex-row justify-center items-center gap-2 font-bold' href={`/dashboard/${category.enName}`}>
              <Image
                src={category.icon}
                alt="logo"
                className='rounded-lg' width={30} height={30} style={{aspectRatio: 1}}
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
