import Image from 'next/image'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function template({children}: Props) {
  return (
    <section
    className='flex justify-between items-center gap-10'
    >
      <article className='h-full flex-1 flex items-center justify-end box-border mt-20 border-r border-r-slate-400'>

        <Image src='/cryptoCoin.png' width={220} height={220} alt='logo' />
        <div className='w-[330px] flex flex-col items-center mr-10'>
          <p className='text-[3rem] font-[900]'>Join Our Crypto Community!</p>
          <p className='text-3xl mt-10 whitespace-pre-line'>
            스토코인은 월드클래스 가상거래소인 업비트의 신뢰할 수 있는 코인을 다루고 있습니다.{'\n'}
            스토코인은 가상화폐에 대한 정보를 공유하고, 토론하는 커뮤니티입니다.{'\n'}
            </p>
            <button
            className='font-[700] text-3xl bg-blue-500 px-8 py-4 rounded-lg mt-10 hover:bg-blue-600 shadow-md text-white'
            >스토코인에 대해 알아보기</button>
        </div>
      </article>
      <article className='flex-1 h-full min-h-[300px]'>
      {children}
      </article>
    </section>
  )
}
