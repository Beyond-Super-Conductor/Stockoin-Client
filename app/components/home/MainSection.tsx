'use client'
import React, { useState } from 'react'
import RealtimePriceBoard from './RealtimePriceBoard'
import Chat from './widgets/Chat'

export default function MainSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const onShrink = () => setIsExpanded(false);
  const onExpand = () => setIsExpanded(true);
  return (
    <div className='flex w-full gap-2'>
    <RealtimePriceBoard isExpanded={isExpanded} onShrink={onShrink} onExpand={onExpand} />
    <Chat isExpanded={isExpanded} onShrink={onShrink} onExpand={onExpand} />
    </div>
  )
}
