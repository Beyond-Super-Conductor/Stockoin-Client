import Recoil from '@/app/components/common/recoil'
import '../styles/globals.css'
import MSW from './components/common/msw'
import { PropsWithChildren } from 'react';

export const metadata = {
  title: '주식처럼 코인하자! let\'s 스토코인!',
  description: '스토코인은 가상화폐에 대한 토론을 나누는 커뮤니티입니다.',
}

interface Props {}

export default function RootLayout({children}:PropsWithChildren<Props>) {
  return (
    <html lang='ko'>                             
      <body className='my-0 mx-auto bg-white min-h-[100vh] h-auto'>
        <Recoil>
          <MSW>
            {children}
          </MSW>
        </Recoil>
      </body>
    </html>
  )
}


