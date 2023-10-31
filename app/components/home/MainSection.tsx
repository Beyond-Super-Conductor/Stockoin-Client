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
      },300));

    setTimeout(() => {
    setIsExpanded(false);
    },300)
    
  }
  const onExpand = () => {
    
    clearTimeout(setTimeout(() => {
      setIsExpanded(true);
      },300));

    setTimeout(() => {
    setIsExpanded(true);
    },300)
   }


  //  websocket connect test
    // const sendMEssage = () => {
    //   publish(
    //     {
    //       destination:'/app/hello',
    //       body:'김룡호씨 되십니까?',
    //       headers:{
    //         'Authorization': '난 슈퍼계정이야'
    //       }
    //     }
    //   )
    // }
  return (
    <div className='flex w-full gap-2'>
    <RealtimePriceBoard isExpanded={isExpanded} onShrink={onShrink} onExpand={onExpand}>
      <RealtimePriceBoardTitle />
      {/* <button className='absolute top-20 left-20 w-full h-[400]px bg-red-400' onClick={sendMEssage}>샌드메세지</button> */}
    </RealtimePriceBoard>
    <Chat isExpanded={isExpanded} onShrink={onShrink} onExpand={onExpand} />
    </div>
  )
}
