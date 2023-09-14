'use client';

export default function NaverLoginButton() {
  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;
  const state = process.env.NEXT_PUBLIC_NAVER_STATE;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`
  
  const onNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  }
  return (
    <button
        onClick={onNaverLogin}
          className='w-full pr-20 flex items-center rounded-[2px] bg-[#03c75a] min-w-[280px] max-w-[400px] shadow-sm shadow-gray-200'
        >
    <img src="/naverLogo.png" alt="logo" className='w-[54px] h-[54px]' />
      <p className='text-3xl w-full text-end'>네이버 로그인</p>
    </button>
  )
}
