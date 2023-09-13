
export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
export enum AuthProvider {
  GOOGLE = 'google',
  NAVER = 'naver',
  KAKAO = 'kakao'
}

export interface User{
  userId: number,
  email: string,
  name: string,
  picture: string,
  role: Role,
  authProvider: AuthProvider,
  providerId: string,
  accessToken: string,
  refreshToken: string,
  isInitProfile: boolean,
  gender: string | null
  birthday: string | null
  nickname: string | null
}

export interface AuthQuery {
  code: string;
  authProvider: string;
  state: string;
  redirect_uri: string;
}

