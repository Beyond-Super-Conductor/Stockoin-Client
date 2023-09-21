import { get } from "@/api/axios";
import DetailPage from "@/app/components/dashboard/detail-page/DetailPage";
import { CoinPostResponse, CoinPostsResponse } from "@/types/coinBoardActions";
import { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// params: Params

// const res = await fetch(`${BASE_URL}/post?pageNo=1&pageSize=100&postEnums=TYPE_CATEGORY&categoryEnums=${tokenDetail}`)

// const posts: CoinPostsResponse = await res.json();

// export async function generateStaticParams() {
//   return [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}, {id: '9'}, {id: '10'}, ]
// }

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