import { rest } from "msw";

import type { RestRequest, ResponseComposition, DefaultBodyType, RestContext } from "msw";

const mockGetPosts = (req: RestRequest, res: ResponseComposition<DefaultBodyType>, ctx: RestContext) => {
  
  return res(
    ctx.status(200),
    ctx.delay(100),
    ctx.json([
      {
        posts: [
          {
          id: 3084,
          title: '아줌마 이 코인 얼마에요?',
          content: '조금만 깎아줘요 곧 추석인데..',
          viewCount: 2720,
          category: {
              id: 4482,
              categoryCode: 'BTC',
              description: '비트코인',
          },
          createdAt: '2021-09-14T07:00:00.000+00:00',
          updatedAt: '2021-09-14T07:00:00.000+00:00',
          user: {
              id: 9981,
              email: 'iam@coin.reseller',
              name: '김모킹',
              nickname: '코카인같은비트코인',
              picture: 'https://avatars.githubusercontent.com/u/10000000?v=4',
              }
          },
          {
            id: 885,
            title: '스토코인이 대박날 수 밖에 없는 이유',
            content: '대박의 기준이 DAU 5이니까 ',
            viewCount: 3802,
            category: {
                id: 448,
                categoryCode: 'BTC',
                description: '비트코인',
            },
            createdAt: '2021-09-14T07:55:00.000+00:00',
            updatedAt: '2021-09-14T07:55:00.000+00:00',
            user: {
                id: 3312,
                email: 'sto@koin.isdaebak',
                name: '김목성',
                nickname: '야떴냐',
                picture: 'https://avatars.githubusercontent.com/u/10000000?v=4',
                }
            },
    ],
        totalElements: 3,
        totalPages: 4,
        pageNo: 1,
        pageSize: 40,
        last: false
      }
      
    ])
  );
}

const mockLogin = (req: RestRequest, res: ResponseComposition<DefaultBodyType>, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.delay(100),
    ctx.json({
      data: {
        userId: 9999,
        email: 'mocking@mock.com',
        name: '김목성',
        picture: 'https://avatars.githubusercontent.com/u/10000000?v=4',
        role: 'cake',
        authProvider: 'Mock',
        providerId: 2444,
        accessToken: 'accesstoken',
        refreshToken: 'refreshtoken',
        isInitProfile: false,
        gender: 'Male',
        birthday: '1990-11-14',
        nickname: '모킹데이터'
      }
    })
  );
} 

const handlers = [
      rest.get('https://api.stokoin.com/api/v1/users', mockLogin),
      rest.get('https://api.stokoin.com/api/v1/post', mockGetPosts)
    ]

export default handlers;

