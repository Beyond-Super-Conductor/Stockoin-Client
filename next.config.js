/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  env: {
    NAVER_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    NAVER_LOGIN_SECRET_KEY: process.env.NEXT_PUBLIC_NAVER_LOGIN_SECRET_KEY,
    NAVER_REDIRECT_URI: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
    NAVER_STATE: process.env.NEXT_PUBLIC_NAVER_STATE,
    UPBIT_ACCESS_KEY: process.env.NEXT_PUBLIC_UPBIT_ACCESS_KEY,
    UPBIT_SECRET_KEY: process.env.NEXT_PUBLIC_UPBIT_SECRET_KEY,
    API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    KAKAO_LOGIN: process.env.NEXT_PUBLIC_KAKAO_LOGIN,
  }
}

module.exports = nextConfig
