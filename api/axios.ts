import Axios, { AxiosError, AxiosResponse } from 'axios';
export interface CustomError extends AxiosError {
  message: string;
  code: string;
  errors: any;
  timestamp: string;
}

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

const getTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  return { accessToken, refreshToken };
}

const refreshToken = async () => {
  const { refreshToken } = getTokenFromLocalStorage();
  const response = await axios.post('/reissue', { refreshToken });
  localStorage.setItem('access_token', response.data.accessToken);
  localStorage.setItem('refresh_token', response.data.refreshToken);
  return response.data.accessToken;
}

axios.interceptors.request.use(
  (config) => {
    const { accessToken } = getTokenFromLocalStorage();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  async (error) => {
    if(error.response.status === 401) {
      try {
        const newTokens = await refreshToken();
        error.config.headers.Authorization = `Bearer ${newTokens}`;
        return axios.request(error.config); // 재요청
      } catch (error) {
        console.log('토큰 갱신 실패',error);
        window.location.href = '/auth';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  });


export const get = async <T,P>(url: string, query?: P):Promise<AxiosResponse<T,CustomError>> => {
  try {
    const response = await axios.get(url, { params: query });
    
    return response.data;
  } catch(e) {
   const err = e as CustomError;
   if(err.response){
    throw err.response.data
   }else {
    throw err;
   }
//    throw err.response?.data || {
//     ...err,
//     message: '서버에서 에러가 발생했습니다. 서버 관리자를 태형 80대로 다스리겠습니다.',
//     code: 'error',
//     status: 500
//  }
  }
}

export const post = async <T>(url: string, data: T):Promise<AxiosResponse<T,CustomError>> => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch(e) {
    const err = e as CustomError;
    throw err.response?.data || {
      ...err,
      message: '서버에서 에러가 발생했습니다. 서버 관리자를 태형 80대로 다스리겠습니다.',
      code: 'error',
      status: 500
   }
  }
}

export const put = async <T>(url: string, data: T):Promise<AxiosResponse<T,CustomError>> => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch(e) {
    const err = e as CustomError;
    throw err.response?.data || {
      ...err,
      message: '서버에서 에러가 발생했습니다. 서버 관리자를 태형 80대로 다스리겠습니다.',
      code: 'error',
      status: 500
   }
  }
}