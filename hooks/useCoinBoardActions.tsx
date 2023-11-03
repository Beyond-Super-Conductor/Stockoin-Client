import { CustomError, get, post } from '@/api/axios'
import { CoinCommentResponse, CoinPostResponse, CoinPostsResponse, Comment, CreateCoinPostRequest } from '@/types/coinBoardActions'
import {  AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function useCoinBoardActions() {
  const router = useRouter();
  const [data, setData] = useState<CoinPostsResponse | null>(null);
  const [detail, setDetail] = useState< CoinPostResponse | null>(null);
  const [comments, setComments] = useState<CoinCommentResponse | null>(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);


  /**
   * 
   * @param pageNum 
   * @param coin 
   * 
   * 코인이름으로 해당 코인에 대한 포스트들을 가져옵니다.
   */
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


  /**
   * 
   * @param id 
   * 
   * 포스트아이디로 해당 포스트를 가져옵니다.
   */
  const getPostById = async (id: number) => {
    setLoading(true);
    try {
      const res: AxiosResponse<CoinPostResponse> = await get(`post/${id}`);
      
      setDetail(res.data);
    } catch (error) {
      const err = error as CustomError;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  
  /**
   * 
   * @param postId
   * 
   * 포스트아이디로 해당 포스트에 대한 댓글을 가져옵니다.
   */
  const getCommentsByPostId = async (postId: number) => {
    setLoading(true);
    try {
      const res:AxiosResponse<CoinCommentResponse> = await get(`comment/post/${postId}`)  
      
      setComments(res.data);
    } catch (error) {
      const err = error as CustomError;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const getCommentsByUserId = async () => {}


  const createCoinPost = async (postData:CreateCoinPostRequest) => {
    let temp:CreateCoinPostRequest;
    
    try {  
      if(postData.categoryEnums === '1INCH') {
        postData.categoryEnums = 'INCH';
      }
      const send = await post('post', postData);
      router.back();
    } catch (error) {
      const err = error as CustomError;
      setError(err.message);
    }
  }

  return {
    data,
    detail,
    error,
    loading,
    comments,
    getCommentsByPostId,
    getPostsByCoinName,
    createCoinPost,
    getPostById
  }
}
