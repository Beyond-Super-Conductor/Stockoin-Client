'use client'
import React, { useEffect, useState } from 'react'

interface Props {
  isRising: boolean;
}

export default function HighLowUnderline({isRising}: Props) {
  const [highlight, setHighlight] = useState('');

  useEffect(() => {
    if(isRising){
      setHighlight('price-change-up')
    }else{
      setHighlight('price-change-down')
    }

    const timer = setTimeout(() => {
      setHighlight('')
    }, 300);

    return () => clearTimeout(timer);
  }, [isRising])

  return (
    <span className={`block w-[60px] h-[1px] absolute -bottom-2 right-1/3 ${highlight}`}></span>
  )
}
