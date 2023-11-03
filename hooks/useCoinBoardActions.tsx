import { CustomError, get, post } from '@/api/axios'
import { CoinPostsResponse, CreateCoinPostRequest } from '@/types/coinBoardActions'
import {  AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function useCoinBoardActions() {
  const router = useRouter();
  const [data, setData] = useState<CoinPostsResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);

  const getPostsByCoinName = async (pageNum:number,coin:string) => {
    setLoading(true);
    try {
      const res: AxiosResponse<CoinPostsResponse> = await get(`post?pageNo=${pageNum}&pageSize=10&postEnums=TYPE_CATEGORY&categoryEnums=${coin}`);
      setData(res.data)
    } catch (error) {
      const err = error as CustomError;
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  const getAllCoinPosts = async () => {}

  const getCoinBoard = async () => {
    
  }

  const createCoinPost = async (postData:CreateCoinPostRequest) => {
    let temp:CreateCoinPostRequest;
    
    try {  
      if(postData.categoryEnums === '1INCH') {
        postData.categoryEnums = 'INCH';
      }

      const send = await post('post', postData);
      console.log(send.data);
      router.back();
    } catch (error) {
      const err = error as CustomError;
      setError(err.message);
    }
  }

  const updateCoinBoard = async () => {}

  const deleteCoinBoard = async () => {}

  const increaseCoinBoardViewCount = async () => {}
  
  return {data, error, loading, getPostsByCoinName,createCoinPost}
}
