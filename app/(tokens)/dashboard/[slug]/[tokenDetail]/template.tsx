import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function template({children}: Props) {
  return (
    <div className='w-full flex flex-col bg-white'>
      {children}
    </div>
  )
}
