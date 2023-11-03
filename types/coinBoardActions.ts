

export interface CreateCoinPostRequest {
  title: string;
  content: string;
  categoryEnums: string;
}

export interface CoinBoardParamsRequest {
  pageNo: number;
  pageSize: number;
  title?: string;
  postEnums: 'TYPE_CATEGORY' | 'TYPE_USER';
  categoryEnums?: string;
  userId?: string;
}

export interface Response {
  result: "SUCCESS" | "FAIL"
  message: string,
  code: string,
  errors: [
    {
      field: string,
      value: string,
      reason: string
    }
  ]
}

export interface CoinPost {
    id: number;
    title: string;
    content: string;
    viewCount: number;
    category: {
        id: number;
        categoryCode: string;
        description: string;
    };
    createdAt: string;
    updatedAt: string;
    user: {
        id: number;
        email: string;
        name: string;
        nickname: string;
        picture: string;
        isInitProfile: true;
    },
    totalElements: number,
    totalPages: number,
    pageNo: number,
    pageSize: number,
    last: boolean
}


export interface CoinReplyResponse extends Response {
  data: {
    comments: [
      {
        id: number,
        content: string,
        user: {
          id: number,
          email: string,
          name: string,
          nickname: string,
          picture: string,
          isInitProfile: true
        },
        createdAt: string,
        updatedAt: string
      }
    ],
  }
}

export interface CoinPostsResponse extends Response {
  posts: CoinPost[],
  totalElements: number,
  totalPages: number,
  pageNo: number,
  pageSize: number,
  last: boolean
}

export interface CoinPostResponse extends Response {
  
    id: number,
    title: string,
    content: string,
    viewCount: number,
    category: {
      id: number,
      categoryCode: string,
      description: string
    },
    createdAt: string
    updatedAt: string
    user: {
      id: number,
      email: string,
      name: string,
      nickname: string,
      picture: string,
      isInitProfile: true
    }
}

export interface Comment {
  id: number,
  content: string,
  user: {
    id: number,
    email: string,
    name: string,
    nickname: string,
    picture: string,
    isInitProfile: boolean
  },
  createdAt: string
  updatedAt: string
}
export interface CoinCommentResponse extends Response{
    comments: Comment[]
    last: true
    pageNo: 0
    pageSize: 10
    totalElements: 0
    totalPages: 0
}