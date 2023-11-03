import DetailPage from "@/app/components/dashboard/detail-page/DetailPage";
import { CoinPost, CoinPostsResponse } from "@/types/coinBoardActions";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// const getCoinPosts = async (tokenDetail: string) => {
  
//   let change1InchName;
//   if(tokenDetail === '1INCH') change1InchName = 'INCH';
//   try {
//     const res = await fetch(`${BASE_URL}/post?pageNo=0&pageSize=10&postEnums=TYPE_CATEGORY&categoryEnums=${tokenDetail === '1INCH' ? change1InchName : tokenDetail}`,{
//       cache: 'no-cache',
//     })  
//     const { data }: CoinPostsResponse = await res.json();
//     console.log(data);
//     return data ? data.posts :
//         [
//           {
//           id: 3084,
//           title: '아줌마 이 코인 얼마에요?',
//           content: '조금만 깎아줘요 곧 추석인데..',
//           viewCount: 2720,
//           category: {
//               id: 4482,
//               categoryCode: 'BTC',
//               description: '비트코인',
//           },
//           createdAt: '2021-09-14T07:00:00.000+00:00',
//           updatedAt: '2021-09-14T07:00:00.000+00:00',
//           user: {
//               id: 9981,
//               email: 'iam@coin.reseller',
//               name: '김모킹',
//               nickname: '히히히',
//               picture: 'https://avatars.githubusercontent.com/u/10000000?v=4',
//               }
//           },
//           {
//             id: 885,
//             title: '스토코인이 대박날 수 밖에 없는 이유',
//             content: '대박의 기준이 DAU 5이니까 ',
//             viewCount: 3802,
//             category: {
//                 id: 448,
//                 categoryCode: 'BTC',
//                 description: '비트코인',
//             },
//             createdAt: '2021-09-14T07:55:00.000+00:00',
//             updatedAt: '2021-09-14T07:55:00.000+00:00',
//             user: {
//                 id: 3312,
//                 email: 'sto@koin.isdaebak',
//                 name: '김목성',
//                 nickname: '야떴냐',
//                 picture: 'https://avatars.githubusercontent.com/u/10000000?v=4',
//                 }
//             },
//         ] as CoinPost[]
      
//   } catch (error) {
//     console.error(error);
//   }
// }

export default async function Page({params}: any) {
  // const posts = await getCoinPosts(params.tokenDetail);
  return <DetailPage/>
    
}