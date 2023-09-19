'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function PromoteRegistrationLink() {
  const [hasToken, setHasToken] = useState(false);


  useEffect(() => {
    if(localStorage.getItem('access_token')) {
      setHasToken(true);
    }
  },[ ])
  
  return (
    <div className='w-full flex items-center justify-end px-4 h-8'>
      <Link href='/auth' className='text-2xl'>아직 스토코인 회원이 아니라면? 회원가입 10초 컷</Link>
    </div>
  )
}
