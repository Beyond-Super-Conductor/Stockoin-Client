// import { get } from '@/api/axios';

import Post from '@/app/components/dashboard/post/Post';
import { CoinPost, CoinPostResponse } from '@/types/coinBoardActions';


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


  const getPost = async (params:any) => {
    try {
      const [postResponse, _] = await Promise.all([
        fetch(`${BASE_URL}/post/${params}`),
        fetch(`${BASE_URL}/post/view/${params}`,{ method:'PUT'})
      ]);
  
      const postData:CoinPostResponse = await postResponse.json();
      return postData.data as CoinPost ?? {
        id:9914,
        title: '디테일페이지 공사중입니다',
        content:'<p>핼로 월드</p>',
        viewCount:669,
        category:{
            id:44,
            categoryCode:'BTC',
            description:'비 - 토 코인',
        },
        createdAt: "2023-09-27T01:08:58.552Z",
        updatedAt: "2023-09-27T01:08:58.552Z",
        user:{
            id:2024,
            email:'forwarm5891@gmail.com',
            name:'김명성',
            nickname:'에머스',
            picture:'https://avatars.githubusercontent.com/u/10000000?v=4',
            isInitProfile:true,
          }
      };
    } catch (error) {
      throw Error('게시글을 불러오는데 실패했습니다.');
    }
    // throw Error('게시글을 불러오는데 실패했습니다.');
  }

export default async function page({params}: any) {
  const post = await getPost(params.postId);
  
  return <Post post={post} />
}
