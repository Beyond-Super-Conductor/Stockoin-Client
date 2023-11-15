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
    <span className={`mx-auto block w-2/3 h-[1px] absolute -bottom-2 ${highlight} opacity-75`}/>
  )
}
