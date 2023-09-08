'use client'
import { findCategoryState, selectTokens } from '@/store/findToken';
import { selectTokenState } from '@/store/selectToken';
import { tokenCategory } from '@/utils/constants';
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function page() {
  const [selectToken,setSelectToken] = useRecoilState(selectTokenState);
  const [findCategory,setFindCategory] = useRecoilState(findCategoryState)
  const {slug, tokenDetail} = useParams();
  
  
  useEffect(() => {
    
    const selectedCategory = tokenCategory.find((item) => item.enName === slug);
    
    if(!selectedCategory) return;
    setFindCategory(selectedCategory);
    
    const selectedToken = selectedCategory.tokens
    .find((item) => item.enName === tokenDetail);

    if(!selectedToken) return;
    setSelectToken(selectedToken);

  },[slug, tokenDetail]);
  
  
  return (
    <div>
      
    </div>
  )
}
