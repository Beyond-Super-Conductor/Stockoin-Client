'use client'

import useAuth from '@/hooks/useAuth'

import React, { FormEvent, Suspense, useEffect } from 'react'


export default function ProfilePage() {

  const { getUserProfile, user } = useAuth()
  
  const onSubmitEditProfile = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    getUserProfile();
  },[])

  

  return (
    
    <section className='flex p-8'>
      
      <Suspense fallback={<div>Loading...</div>}>
      <article className='flex-[0.3] p-4 flex flex-col items-center justify-center gap-2 ring ring-gray-200 rounded-lg'>
      {
        user &&
        <form 
          onSubmit={onSubmitEditProfile}
          className='flex flex-col items-start justify-start gap-2 w-full'
          >
          <div className='w-full flex flex-col gap-2 items-center justify-center'>
            <div className='w-80 h-80 ring-2 ring-sky-500 rounded-full' />
            <button className='px-10 py-4 bg-sky-400 text-white'>대표이미지 변경</button>
          </div>
        <ul>
          <li>이름 : {user.name}</li>
          <li>닉네임 : {user.nickname}</li>
          <li>이메일: {user.email}</li>
          <li></li>
          <li>한줄소개: 한줄소개</li>
        </ul>
        <button className='px-10 py-4 bg-sky-400 text-white self-center'>프로필 변경</button>
        </form>
        }
      </article>
      
      </Suspense>
      
      <article className='flex-[0.7] flex flex-col gap-4'>
        <div className='w-full p-4 ring ring-gray-200 rounded-lg'>
          <h2>Social</h2>
          <p>
            팔로우 : 2억 7천만명
            <button className='px-10 py-1 bg-sky-400 text-white'>팔로워보기</button>
          </p>
          <p>
            팔로잉 : 2명
            <button className='px-10 py-1 bg-sky-400 text-white'>팔로잉보기</button>
          </p>
        </div>
        <div
          className='flex-1 w-full p-4 ring ring-gray-200 rounded-lg'>
          <h2>My Favorite Coin</h2>
          <ul>
            <li>
              <span>ETH</span>
              <div className='w-1/2 h-2 bg-red-400' />  
            </li>
            <li>
              <span>BTC</span>
              <div className='w-1/2 h-2 bg-sky-400' />
            </li>
            <li>
              <span>SOL</span>
              <div className='w-1/2 h-2 bg-green-400' />
            </li>
            <li>
              <span>ARK</span>
              <div className='w-1/2 h-2 bg-yellow-400' />
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
