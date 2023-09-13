'use client'
import SignupForm from '@/app/components/auth/SignupForm';
import useAuth from '@/hooks/useAuth';
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'

export default function NaverPage() {
  const { error, user, getUser } = useAuth();
  const searchParams = useSearchParams();

  useEffect(() => {
    if(searchParams.has('code')) {
      getUser({
        code: searchParams.get('code') as string,
        authProvider:'naver',
        state: searchParams.get('state') as string,
        redirect_uri: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI as string
      })
    }
  },[searchParams])

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
      {error && <p>{error}</p>}
      {(!error && user && !user?.isInitProfile) && <SignupForm />}
      </Suspense>
    </div>
  )
}
