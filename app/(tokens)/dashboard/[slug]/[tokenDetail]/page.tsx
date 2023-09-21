import { get } from "@/api/axios";
import DetailPage from "@/app/components/dashboard/detail-page/DetailPage";
import { CoinPostResponse, CoinPostsResponse } from "@/types/coinBoardActions";
import { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getCoinPosts = async (tokenDetail: string) => {
  let change1InchName;
  if(tokenDetail === '1INCH') change1InchName = 'INCH';
  try {
    const res = await fetch(`${BASE_URL}post?pageNo=0&pageSize=10&postEnums=TYPE_CATEGORY&categoryEnums=${tokenDetail === '1INCH' ? change1InchName : tokenDetail}`,{
      cache: 'no-cache'
    })  
    const { data: { posts } }: CoinPostsResponse = await res.json();

    return posts;
  } catch (error) {
    console.error(error);
  }
}


export default async function Page({ params }: any) {
  const posts = await getCoinPosts(params.tokenDetail);
  
  return (
    <div className='w-full flex flex-col'>
      <DetailPage posts={posts} />
    </div>
  )
}