'use client'
import { selectTokens } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function page() {
  const [selectToken,setSelectToken] = useRecoilState(selectTokenState);
  const tokenInCategory = useRecoilValue(selectTokens);
  const params = useParams();
  
  
  useEffect(() => {
    const selectedToken = tokenInCategory.find((item) => item.enName === params.tokenDetail)
    if(!selectedToken) return;
    setSelectToken(selectedToken);
  },[params])
  return (
    <div>
    </div>
  )
}
