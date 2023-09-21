import { CustomError, get, put } from '@/api/axios'
import { userState } from '@/store/user';
import { AuthQuery, User } from '@/types/auth';
import { AdditionalUserData } from '@/types/signForm';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilState } from 'recoil';


export default function useAuth() {
  const [error, setError] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getOAuth = async (queries:AuthQuery) => {
    // process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
    setIsLoading(true);
    try {
      
      const response:AxiosResponse<User> = await get(
        '/oauth2/authorization',
        queries
        );
      setUser(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      const err = error as CustomError 
      console.log(error);
      setError(err.message);
      setIsLoading(false);
      return err
    }
  }

  const getUserProfile = async() => {
    if(!localStorage.getItem('accessToken')) return;
    setIsLoading(true);
    try {
      const response:AxiosResponse<User> = await get('users');
      setUser(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      const axiosError = error as CustomError
      setError(axiosError.message);
      setIsLoading(false);
      return axiosError
    }
  }
  
  const putUserProfile = async (additionalData:AdditionalUserData) => {
    setIsLoading(true);
    try {
      await put('users', additionalData);
      setIsLoading(false);
      router.push('/');
    } catch (error) {
      const axiosError = error as CustomError
      setError(axiosError.message);
      setIsLoading(false);
    }
  }

  return { error, user, isLoading, getOAuth, putUserProfile, getUserProfile }
}
