'use client'
import { userState } from '@/store/user'
import React, { Suspense, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import FieldsetContainer from './widgets/FieldsetContainer'
import { AdditionalUserData } from '@/types/signForm'
import useAuth from '@/hooks/useAuth'


interface ControlRef {
  onFocusInput: () => void,
  onBlurInput: () => void
}

export default function SignupForm() {
  const [additionalUserData, setAdditionalUserData] = useState<AdditionalUserData>({birthday:'',gender:'MAN',nickname:''});
  const birthdayControlRef = useRef<ControlRef | null>(null);
  const genderControlRef = useRef<ControlRef | null>(null);
  const nicknameControlRef = useRef<ControlRef | null>(null);
  const { putUserProfile } = useAuth();
  
  const onSubmitUpdateUser = (async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await putUserProfile(additionalUserData)  
    } catch (error) {
      console.error(error);
    }
  })

  const onChangeAdditionalUserData = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { target:{ name, value } } = e
    
    setAdditionalUserData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const onSelectAdditionalUserData = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { target:{ name, value } } = e
    
    setAdditionalUserData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const focusInput = () => {
    birthdayControlRef.current?.onFocusInput()
  }
  const blurInput = () => {
    birthdayControlRef.current?.onBlurInput()
  }
  const genderFocusInput = () => {
    genderControlRef.current?.onFocusInput()
  }
  const genderBlurInput = () => {
    genderControlRef.current?.onBlurInput()
  }
  const nicknameFocusInput = () => {
    nicknameControlRef.current?.onFocusInput()
  }
  const nicknameBlurInput = () => {
    nicknameControlRef.current?.onBlurInput()
  }
  
  return (
    <div className='w-full h-[500px]'>
      <fieldset className='border border-white h-full'>
        <legend className='text-4xl p-4 m-4 '>추가정보 작성</legend>
        
      <form onSubmit={onSubmitUpdateUser}>
        <div className="w-1/2  flex flex-col items-center justify-center gap-4 mx-auto">
          <FieldsetContainer labelText='성별' ref={genderControlRef}>
            <div className='flex items-center justify-around'>
            <label className="inline-flex items-center space-x-2 text-white">
              <input type="radio" onFocus={genderFocusInput} onBlur={genderBlurInput} onChange={onSelectAdditionalUserData} className="form-radio text-blue-500 h-8 w-8" name="gender" value="MAN" />
              <span className="font-[500]">남성</span>
            </label>

              <label className="inline-flex items-center space-x-2 text-white">
                <input type="radio" onFocus={genderFocusInput} onBlur={genderBlurInput} onChange={onSelectAdditionalUserData} className="form-radio text-blue-500 h-8 w-8" name="gender" value="WOMAN" />
                <span className="font-[500]">여성</span>
              </label>
            </div>
          </FieldsetContainer>
          <FieldsetContainer labelText='생년월일' ref={birthdayControlRef}>
          <input
            onFocus={focusInput}
            onBlur={blurInput}
            id="date"
            name="birthday"
            type="date"
            value={additionalUserData?.birthday ?? ''}
            onChange={onChangeAdditionalUserData}
            className="w-full text-center text-black bg-white rounded-md border-gray-300 shadow-sm shadow-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent px-3 py-2"
            />
            </FieldsetContainer>

            <FieldsetContainer labelText='닉네임' ref={nicknameControlRef}>
            <input
              onFocus={nicknameFocusInput}
              onBlur={nicknameBlurInput}
              name="nickname"
              type="text"
              value={additionalUserData?.nickname ?? ''}
              onChange={onChangeAdditionalUserData}
              className='w-full text-center text-black bg-white rounded-md border-gray-300 shadow-sm shadow-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent px-3 py-2'
              />
            </FieldsetContainer>
          <button
            type='submit'
            className={`
            relative ease-in-out w-full h-full border-4 border-white rounded-md px-20 py-10 transition-all duration-500 z-10 overflow-hidden text-3xl mt-20
            before:content=[''] before:z-[-1] before:absolute before:w-full before:h-full before:origin-top-right before:translate-x-[100%] before:bg-black before:top-0 before:right-0 before:transition-all before:duration-700
            after:content=[''] after:z-[-1] after:absolute after:w-full after:h-full after:origin-top-left after:-translate-x-[100%] after:bg-red-400 after:top-0 after:left-0 after:transition-all after:duration-700
            hover:before:translate-x-[50%] hover:before:bg-blue-500
            hover:after:translate-x-[-50%] hover:after:bg-rose-600
            hover:font-bold hover:border-l-rose-600 hover:border-r-blue-500 hover:border-b-blue-500 hover:border-t-red-600
            `}
            >회원가입</button>
        </div>
      </form>
      
      </fieldset>
    </div>
  )
}
