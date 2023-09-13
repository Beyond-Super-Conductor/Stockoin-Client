import Axios, { AxiosError, AxiosResponse } from 'axios';



export interface CustomError extends AxiosError {
  message: string;
  code: string;
  errors: any;
}


const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

export const get = async <T>(url: string):Promise<AxiosResponse<T,CustomError>> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch(e) {
    const axiosError = e as CustomError;
    throw Error(axiosError.message);
  }
}

export const post = async <T>(url: string, data: any):Promise<AxiosResponse<T,CustomError>> => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch(e) {
    const axiosError = e as CustomError;
    throw Error(axiosError.message);
  }
}