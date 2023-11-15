'use client';
import { dashboardColorState } from '@/store/dashboardColor';
import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import CoinTitle from './CoinTitle';
import SearchCoinForm from './SearchCoinForm';

export default function DashboardTopNavigation() {
  const dashboardColor = useRecoilValue(dashboardColorState);
  const resetBackgroundColor = useResetRecoilState(dashboardColorState);
  const handleBackButtonClick = () => resetBackgroundColor();

  useEffect(() => {
    window.addEventListener('popstate', handleBackButtonClick)
    return () => {
      window.removeEventListener('popstate', handleBackButtonClick)
    }
  },[])
  
  return (
    <div
    className={`flex-1 flex items-center justify-between h-full`}
    style={{ background: `
    linear-gradient(
      to left,
      ${dashboardColor[0]}, ${dashboardColor[1]}, ${dashboardColor[2]}, ${dashboardColor[3]}
      )`,}}
    >
      <CoinTitle/>
      <SearchCoinForm />
    </div>
  )
}
