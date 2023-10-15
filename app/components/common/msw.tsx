'use client';

import { useState, type PropsWithChildren, useEffect, useCallback } from 'react';

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

interface Props {
  
}

export default function MSW({children}: PropsWithChildren<Props>) {

  // const [ready, setReady] = useState(false);
  // const init = useCallback(async () => {
  //   if (isMockingMode) {
  //     const initMocks = await import('@/mocks/index')
  //     // .then((module) => module.initMocks);
  //     await initMocks.initMocks();
  //     // initMocks()
  //     // await initMocks();
  //     setReady(() => true);
  //   }
  // },[]) 

  // useEffect(() => {
  //   if(ready) return;
  //     init();
  // },[ready]);
  
  // if(!isMockingMode) return null;
  
  return (
      <>
        {children}
      </>
  )
}


