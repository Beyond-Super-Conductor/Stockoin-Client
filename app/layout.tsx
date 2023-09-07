import Recoil from '@/app/components/common/recoil'
import '../styles/globals.css'
import ClientOnly from './ClientOnly'

export const metadata = {
  title: '주식처럼 비트코인하자! 스토코인',
  description: '스토코인은 가상화폐에 대한 토론을 나누는 커뮤니티입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>                             
      <body className='max-w-[1200px] my-0 mx-auto bg-slate-100/80 min-h-[100vh] h-auto bg-gradient-to-tl to-white from-[20%] from-teal-50'>
        <Recoil>
          {children}
        </Recoil>
      </body>
    </html>
  )
}


