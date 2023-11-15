'use client'
import React, { useEffect, useState } from 'react'
import RealtimePriceBoard from './RealtimePriceBoard'
// import Chat from './widgets/Chat'
import RealtimePriceBoardTitle from './widgets/RealtimePriceBoardTitle';
// import useStomp from '@/hooks/useStomp';

export default function MainSection() {  
  return (
    <div className='flex w-full gap-2 cursor-pointer'>
      <RealtimePriceBoard>
        <RealtimePriceBoardTitle />
      </RealtimePriceBoard>
      {/* <Chat  /> */}
    </div>
  )
}
