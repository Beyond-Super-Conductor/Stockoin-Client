'use client'

import SignupForm from "@/app/components/auth/SignupForm";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  
  const { error, user, isLoading, getOAuth } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();

  
  useEffect(() => {
    if(searchParams.has('code')) {
      const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
      // http://localhost:3000/auth/login/google?code=4%2F0Adeu5BUACRQjJiAwf5OeBgE3KL22ic9t0R0RbuRz2os0RhZe3ZFA1fEFddv9JeHkr8mZ7w&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent
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
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {(!error && user && !user?.isInitProfile) && <SignupForm />}
    </div>
  )
}
