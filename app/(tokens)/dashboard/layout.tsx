
import DashboardLayoutLogo from '@/app/components/dashboard/DashboardLayoutLogo'
import DashboardTopNavigation from '@/app/components/dashboard/DashboardTopNavigation'
interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {

  return (
    <div className='flex flex-col items-center w-full h-full'>
      <nav className='flex items-center w-full border-b border-b-slate-400/60 h-[80px] box-border'>
        <DashboardLayoutLogo />
        <DashboardTopNavigation />
      </nav>
      {children}
    </div>
  )
}
