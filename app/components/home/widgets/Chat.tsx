'use client';
import React from 'react'

interface Props {
  isExpanded: boolean;
  onShrink: () => void;
  onExpand: () => void;
}

export default function Chat({ isExpanded, onShrink, onExpand }: Props) {
  return (
    <div className={`
     ${isExpanded ? 'hidden' : 'flex-[0.35]'}
       w-full h-[580px] ring ring-slate-200 shad ow-lg shadow-gray-300 flex items-center justify-center rounded-md`}>
    실시간 전체 채팅
  R</div>  
  )
}
