// import { get } from '@/api/axios';
import Post from '@/app/components/dashboard/post/Post';
import { CoinPost, CoinPostResponse } from '@/types/coinBoardActions';
import React, { Suspense } from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


  const getPost = async (params:any) => {
    console.log('==== params ====', params)
    try {
      const [postResponse, _] = await Promise.all([
        fetch(`${BASE_URL}/post/${params}`),
        fetch(`${BASE_URL}/post/view/${params}`,{ method:'PUT'})
      ]);
  
      const postData:CoinPostResponse = await postResponse.json();
      return postData.data as CoinPost;
    } catch (error) {
      console.error(error);
    }
  }

export default async function page({params}: any) {
  const post = await getPost(params.postId);
  
  return <Post post={post} />
}
