'use client'
import { selectTokens } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import { tokenCategory } from '@/utils/constants';
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function page() {
  const [selectToken,setSelectToken] = useRecoilState(selectTokenState);
  const {slug, tokenDetail} = useParams();
  
  
  useEffect(() => {
    
    const selectedToken = tokenCategory
    .find((item) => item.enName === slug)
    ?.tokens.find((item) => item.enName === tokenDetail);
    if(!selectedToken) return;
    setSelectToken(selectedToken);

  },[slug, tokenDetail]);
  
  
  return (
    <div>
      
    </div>
  )
}
