'use client'

import { tokenCategory } from '@/utils/constants'
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
              tokenCategory.slice(5).map((category) => (
              <li>
                <Link
                  href={`/dashboard/${category.enName}`}
                  className="text-2xl antialiased block px-4 py-2 text-black shadow-sm hover:shadow-md"
                  >
                    {category.icon} {category.koName}
                </Link>
              </li>
              ))
            }
          </ul>
        </div>
    </>
  )
}
