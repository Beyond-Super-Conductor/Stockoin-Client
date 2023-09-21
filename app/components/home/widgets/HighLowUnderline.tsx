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
    <span className={`block w-1/2 h-[1px] absolute top-10 ${highlight} opacity-75`}/>
  )
}
