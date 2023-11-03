'use client'

import 'suneditor/dist/css/suneditor.min.css';
import '@/styles/editor.css'
import useInput from '@/hooks/useInput';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core'
import { useRecoilState } from 'recoil';
import { unSavedPostState } from '@/store/unSavedPost';
import { useCallback, useEffect, useRef } from 'react';
import { EDITOR_DEFAULT_STYLE, editorOptions } from '@/utils/constants';
import useCoinBoardActions from '@/hooks/useCoinBoardActions';
import { useParams, useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

export default function TextEditor() {
  const {tokenDetail,slug} = useParams();
  const { createCoinPost, error } = useCoinBoardActions();
  const editorRef = useRef<SunEditorCore>();
  const [unSavedPost, setUnSavedPost] = useRecoilState(unSavedPostState);
  const { value: titleValue, onChange: onChangeTitleValue } = useInput();
  const { value:contentValue, onChange: onChangeContentValue } = useInput();
  const { user } = useAuth();
  const router = useRouter();
  const getSunEditorInstance = (sunEditor:SunEditorCore) => {
    editorRef.current = sunEditor;
  }
  
  const handleChange = (content: string) => {
    console.log(content);
    onChangeContentValue(content);
    setUnSavedPost(content);
  }

  const onSubmitPost = useCallback(async() => {
    await createCoinPost({
      title: titleValue,
      content: contentValue,
      categoryEnums: tokenDetail as string,
    })
    router.refresh();
  },[tokenDetail, titleValue, contentValue])  

  useEffect(() => {
    if(!user) return;
    if(unSavedPost) {
      const isReWriteConfirm = window.confirm('저장되지 않은 글이 있습니다. 마저 작성하시겠습니까?')
      if(isReWriteConfirm) {
        editorRef.current?.setContents(unSavedPost)
      }
      setUnSavedPost('');
    }
  },[user])

  
  



  return (
    <>
    {error && <div>{error}</div>}
    <h1 className='w-full flex items-center justify-center my-2'>
      <input
        type="text"
        placeholder='유저들의 어그로를 끌 제목을 입력해주세요.'
        className='w-1/2 pl-4 py-4 outline outline-indigo-400/30 rounded-lg focus:outline-indigo-800'
        value={titleValue}
        onChange={onChangeTitleValue}
        />
    </h1>
    <SunEditor
    lang='ko'
    setOptions={editorOptions}
      onChange={handleChange}
      setDefaultStyle={EDITOR_DEFAULT_STYLE}
      autoFocus
      getSunEditorInstance={getSunEditorInstance}
      height='1000px'
      placeholder={`개인 불법 리딩방 공유 및 여기에 투자하면 얼마를 먹는다는 둥 말도 안되는 유도글 칼차단 영구밴`}
      />
      <div className='absolute -bottom-14 right-0 z-10 flex items-center justify-end gap-4 mt-2'>
    <button onClick={onSubmitPost} className=' w-20 h-12 px-4 py-2 rounded-sm text-white bg-indigo-400 font-bold ring ring-indigo-300/60'>
      등록
    </button>
    <button className=' w-20 h-12 px-4 py-2 rounded-sm text-white bg-gray-400 font-bold ring ring-gray-300/60'>
      취소
    </button>
    </div>
    </>
  )
}
