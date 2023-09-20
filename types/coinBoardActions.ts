

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
  message: string | null,
  code: string | null,
  errors: any;
}

export interface CoinPost 
  {
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
    };
}


export interface CoinPostsResponse extends Response {
  data: {
    posts: CoinPost[],
    totalElements: number,
    totalPages: number,
    pageNo: number,
    pageSize: number,
    last: boolean
  }
}

export interface CoinPostResponse extends Response {
  data: {
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
  },
}


