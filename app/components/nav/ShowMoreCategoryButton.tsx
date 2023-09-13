'use client'

import { coinCategory } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function ShowMoreCategoryButton() {
  const [showMoreCoin, setShowMoreCoin] = useState(false)

  const handleShowMoreCoin = () => {
    setShowMoreCoin(!showMoreCoin)
  }
  // 통계...
  // 디자인?? 통계 그래프
  // 
  return (
    <>
    <button onClick={handleShowMoreCoin} className='min-h-[40px] hover:underline-offset-4 hover:underline cursor-pointer font-bold'> 더보기</button>
        <div
        id="dropdownDivider"
        className={`absolute right-0 top-[66px] z-10 ${showMoreCoin ? 'block' : 'hidden'} border-2 border-slate-200 rounded-md shadow-md shadow-gray-300  bg-[#E5FDF8]`}>
          <ul className="py-2 text-sm" aria-labelledby="dropdownDividerButton">
            {
              coinCategory.slice(5).map((category) => (
              <li key={category.koName}>
                <Link
                  
                  href={`/dashboard/${category.enName}`}
                  className="text-2xl flex items-center gap-4 antialiased px-4 py-2 text-black shadow-sm hover:shadow-md"
                  >
                    <Image
                      src={category.icon}
                      alt="logo"
                      className='rounded-md'
                      width={30} height={30} style={{aspectRatio: 1}}
                      priority
                    />
                    <span className='font-bold'>{category.koName}</span>
                     
                </Link>
              </li>
              ))
            }
          </ul>
        </div>
    </>
  )
}
