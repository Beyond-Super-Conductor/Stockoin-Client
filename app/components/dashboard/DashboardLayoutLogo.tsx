'use client';
import { selectTokenState } from '@/store/selectToken';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRecoilValue } from 'recoil';



          

export default function DashboardLayoutLogo() {
  const { icon } = useRecoilValue(selectTokenState);
  console.log(icon);
  return (
    <div className='border border-indigo-200'>
      {
        icon
        ? <Link href="/">
        <Image
          src={icon}
          alt="logo"
          className='min-w-[80px]'
          width={80}
          height={80}
          style={{aspectRatio: 1}}
          priority
        />
      </Link>
        : <Link href="/">
        <Image
          src="/mainLogo.jpg"
          alt="logo"
          className='min-w-[80px]'
          width={80}
          height={80}
          style={{aspectRatio: 1}}
          priority
        />
      </Link>
      }
          
        </div>
  )
}
