import  { useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  
  
}

function useIntersectionObserver() {
  const targetEl = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectingState, setIntersectingState] = useState(1);
  

  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(async (entry) => {
        if(entry.isIntersecting) {
          setIsIntersecting(true);
        } 
        else {
          setIsIntersecting(false);
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