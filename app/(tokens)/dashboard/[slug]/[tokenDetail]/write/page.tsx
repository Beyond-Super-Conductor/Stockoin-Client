'use client'
import TextEditor from '@/app/components/text-editor/TextEditor';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function WritePage() {

  const params = useParams();
  const { back, refresh, prefetch } = useRouter();
  console.log(params);

  useEffect(() => {

  },[])
  return (
    <div className='relative w-full flex flex-col items-center justify-start gap-2 pt-16 '>
        <TextEditor />
        
    </div>
  )
}
