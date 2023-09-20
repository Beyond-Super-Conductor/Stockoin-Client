'use client'

import SignupForm from "@/app/components/auth/SignupForm";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";



export default function page() {
  const { error, user, isLoading, getOAuth } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if(searchParams.has('code')) {
      const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
      getOAuth({
        code: searchParams.get('code') as string,
        authProvider:'google',
        state: 'google',
        redirect_uri: redirectUri as string,
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
    <Suspense fallback={<p>회원정보를 확인하고 있습니다.</p>}>
      {error && <p>{error}</p>}
      
      {(!error && user && !user?.isInitProfile) && <SignupForm />}
    </Suspense>
  )
}
