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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getOAuth = async (queries:AuthQuery) => {
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
      setError(err.message);
      if(err.status === 500) {
        setError('서버에서 에러가 발생했습니다. \n 에러내용을 캡쳐하여 문의주시면 인과관계를 철저히 밝혀내어 원인자에게 태형 80대를 고하겠습니다.');
      }
      setIsLoading(false);
      return err;
    }
  }

  const getUserProfile = async() => {
    // if(!localStorage.getItem('access_token')) return;
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
