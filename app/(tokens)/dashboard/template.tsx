'use client'

import React from 'react'


interface Props {
  children: React.ReactNode
}


export default function template({children}: Props) {

  return (
    <div className='w-full h-full'>
        <div className='flex justify-between items-center h-full'>

          <div className='flex-[0.25] border border-black h-full'>
            <div>호가</div>
          </div>
          <div className='flex-[0.5] border border-black h-full'>
            {children}
          </div>
          <div className='flex-[0.25] border border-black h-full'>
            <div>채팅</div>
          </div>

      </div>
      </div>
  )
}
