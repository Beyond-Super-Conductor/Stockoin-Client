'use client';
import SignupForm from '@/app/components/auth/SignupForm';
import useAuth from '@/hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';

import React, { useEffect } from 'react'

export default function page() {
  const { error, user, isLoading, getOAuth } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();

  
  useEffect(() => {
    if(searchParams.has('code')) {
      const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
      
      getOAuth({
        code: searchParams.get('code') as string,
        authProvider:'kakao',
        state: 'kakao',
        redirect_uri: redirectUri as string
      })
    }
  },[searchParams])

  useEffect(() => {
    if(user) {
      localStorage.setItem('access_token', user.accessToken);
      localStorage.setItem('refresh_token', user.refreshToken);
      if(user?.isInitProfile){
        router.push('/');
      }
    }
  },[user])
  
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {(!error && user && !user?.isInitProfile) && <SignupForm />}
    </div>
  )
}
