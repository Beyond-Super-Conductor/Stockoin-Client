'use client'
import React, { useEffect, useState } from 'react'
import RealtimePriceBoard from './RealtimePriceBoard'
import Chat from './widgets/Chat'
import RealtimePriceBoardTitle from './widgets/RealtimePriceBoardTitle';
// import useStomp from '@/hooks/useStomp';

export default function MainSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const { publish } = useStomp();


  const onShrink = () => {
    
    clearTimeout(setTimeout(() => {
      setIsExpanded(false);
      },1000));

    setTimeout(() => {
    setIsExpanded(false);
    },1000)
    
  }
  const onExpand = () => {
    
    clearTimeout(setTimeout(() => {
      setIsExpanded(true);
      },1000));

    setTimeout(() => {
    setIsExpanded(true);
    },1000)
   }

  return (
    <div className='flex w-full gap-2 cursor-pointer'>
    <RealtimePriceBoard isExpanded={isExpanded} onShrink={onShrink} onExpand={onExpand}>
      <RealtimePriceBoardTitle />
    </RealtimePriceBoard>
    <Chat isExpanded={isExpanded} onShrink={onShrink} onExpand={onExpand} />
    </div>
  )
}
