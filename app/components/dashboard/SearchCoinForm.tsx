import React from 'react'

export default function SearchCoinForm() {
  return (
    <form action="" className='flex items-center gap-2 p-2'>
      <input
        className='w-[360px] font-bold h-24 mb-[1px] rounded-full border border-slate-400 p-1 pl-6 placeholder:text-2xl min-w-[200px] placeholder:text-slate-500 focus:outline-sky-400'
        type="text"
        placeholder='찾으려는 토큰을 검색해보세요!'
        />
      <button className='font-bold h-24 w-40 ring-2 ring-red-400 rounded-full shadow-sm shadow-sky-400 bg-white text-slate-700'> 
        검색
      </button>
    </form>
  )
}
