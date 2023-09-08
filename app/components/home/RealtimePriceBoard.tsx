'use client'

import useWebsocket from '@/hooks/useWebsocket'
import React from 'react'

export default function RealtimePriceBoard() {
  const { ticker } = useWebsocket();

  return (
  <div className='flex-[0.65] w-full h-[580px] border border-slate-400 flex flex-col gap-10 items-center justify-center mt-6 rounded-md'>
    {
      ticker && Object.keys(ticker).map((key) => {
        return (
          <div key={key} className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
              {/* <img src={`https://static.upbit.com/logos/${key}.png`} alt="logo" className='w-12 h-12' /> */}
              <span className='text-2xl font-bold'>{key}</span>
            </div>
            <div className='flex items-center justify-center'>
              <span className='text-2xl font-bold'>{ticker[key].tp}</span>
              <span className='text-2xl font-bold'>{ticker[key].scr}</span>
            </div>
            <div className='flex items-center justify-center'>
              <span className='text-2xl font-bold'>{ticker[key].tv}</span>
              <span className='text-2xl font-bold'>{ticker[key].ms}</span>
            </div>
          </div>
        )
      }
      )
    }
  </div>
)
}
