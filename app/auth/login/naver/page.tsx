import SignupForm from '@/app/components/auth/SignupForm';
import React from 'react'

export default async function NaverPage() {
    
  return (
    <div className='w-full h-[500px]'>
    <fieldset className='border border-white h-full'>
      <legend className='text-4xl p-4 m-4 '>추가정보 작성</legend>
        <SignupForm />
    </fieldset>
    </div>
  )
  
}



  