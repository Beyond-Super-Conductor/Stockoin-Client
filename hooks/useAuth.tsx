import { CustomError, get } from '@/api/axios'
import { userState } from '@/store/user';
import { AuthQuery, User } from '@/types/auth';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';




export default function useAuth() {
  const [error, setError] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async (queries:AuthQuery) => {
    // process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
    setIsLoading(true);
    try {
      const redirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
      const response:AxiosResponse<User> = await get(
        `/oauth2/authorization?code=${queries.code}&authProvider=${queries.authProvider}&redirect_uri=${redirectUri}&state=${queries.state}`
        );
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
  


  return {error, user, getUser,}
}
