import React, { ReactNode } from 'react'
import GlobalHeader from '../nav'

interface Props {
  children: ReactNode
}

export default function layout({children}: Props) {
  return (
    <>
    <GlobalHeader />
    <div className='w-full min-h-[340px] border border-red-400 mt-20'>
      {children}
    </div>
    </>
  )
}
