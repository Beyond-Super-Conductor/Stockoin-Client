'use client'
import React from 'react'


interface Props {
  children: React.ReactNode
}

export default function template({ children }: Props) {

  // TODO: 야수페이지는 현재(오늘 또는 어제) 등락률이 높은 TOP5 가져와야 한다

  // 종목별 코드를 href로 넣어 놓고, 클릭하면 해당 종목의 상세 페이지로 이동하도록 한다
  
  return (
    <div>
      <nav>
        <ul className='flex items-center justify-between px-2'>
          <li>
            <button>
            삼성전자
            </button>
            </li>
          <li>
            <button>
            네이버
            </button>
            </li>
          <li>
            <button>
            효성
            </button>
            </li>
          <li>
            <button>
            만도
            </button>
            </li>
          <li>
            <button>
            현대차
            </button>
            </li>
        </ul>
      </nav>
      
      {children}
    </div>
  )
}
