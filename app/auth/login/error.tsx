'use client' // Error components must be Client Components
 
import { CustomError } from '@/api/axios'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: CustomError
  reset: () => void
}) {
  useEffect(() => {
    console.log(error.message)
  }, [error])
 
  return (
    <div className='p-10 w-full bg-indigo-400/80 rounded-lg shadow-sm shadow-gray-100'>
      <h2 className='w-full text-center font-bold text-4xl py-4'>무언가 우롱차가 되어가고 있습니다!</h2>
      <Image
        width={600}
        height={200}
        priority
        alt='wrongtea'
        src='/assets/error/wrongtea.jpeg'
      />
      <p className='text-center'>
        Something went Wrong-cha!{' '}
        <span className='text-lg'>(OccuredTime: {formatDate(error.timestamp)})</span>
      </p>
      <p className='whitespace-pre-line mb-10'>{error.message}</p>
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