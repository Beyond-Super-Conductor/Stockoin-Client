'use client'
import { isIntersectingState } from '@/store/isIntersecting';
import  { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil';

interface Props {
  
  
}

function useIntersectionObserver() {
  const targetEl = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useRecoilState(isIntersectingState);
  
  

  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(async (entry) => {
        if(entry.isIntersecting) {
          io.unobserve(entry.target);
          setIsIntersecting(true);
        }
      }
    )}, { threshold: 0.5 })

    if(targetEl && targetEl.current) {
      io.observe(targetEl.current)

    }
    return () => io.disconnect();
  // eslint-disable-next-line
  }, [ ])
  
  return { targetEl, isIntersecting };
  
}

export default useIntersectionObserver