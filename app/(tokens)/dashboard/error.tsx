'use client' // Error components must be Client Components
 
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full min-h-[800px] bg-red-200 flex flex-col justify-center items-center'>
      <h2 className='w-full text-center font-bold text-4xl'>무언가 우롱차가 되어 버렸어요!</h2>
      <p className='text-center'>
        Something went Wrong-cha!{' '}
        {/* <span className='text-lg'>(OccuredTime: {formatDate(error.timestamp)})</span> */}
      </p>
      
      <Image
        width={600}
        height={200}
        priority
        alt='wrongtea'
        src='/assets/error/wrongtea.jpeg'
      />
      
      <p className='whitespace-pre-line mb-10'>{error.message}</p>
      <p className='mb-10'>
        <span className='block text-center text-2xl'>누구의 잘못인지 명명백백히 따져 책임자에게 엄중한 책임을 묻겠습니다.</span>
        <span className='block text-center text-lg'>책임의 소재를 밝혀줄 유일한 구원자는 지금 바로 이 페이지를 보고 있는 당신입니다!</span>
        <span className='block text-center text-lg'>해당 페이지를 캡쳐하여 저희에게 보내주신다면 무엇이 잘못되었는지, 어떤 조치를 취하였는지 보고드리겠습니다.</span>
        <span className='block text-center text-lg'>스토코인 일동</span>
      </p>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}