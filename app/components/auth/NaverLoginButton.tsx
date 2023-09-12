'use client';

export default function NaverLoginButton() {

  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}&state=${process.env.NEXT_PUBLIC_NAVER_STATE}`
  
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
