'use client'

import { useEffect, useRef } from 'react';
import SunEditor from 'suneditor-react';
import {align,font,fontColor,fontSize,formatBlock,hiliteColor,horizontalRule,lineHeight,list,paragraphStyle,table,template,textStyle,image,link } from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css';
import '@/styles/editor.css'
import SunEditorCore from 'suneditor/src/lib/core'
import { useRecoilState } from 'recoil';
import { unSavedPostState } from '@/store/unSavedPost';
import useInput from '@/hooks/useInput';

export default function TextEditor() {
  const editorRef = useRef<SunEditorCore>();
  const [unSavedPost, setUnSavedPost] = useRecoilState(unSavedPostState);
  const { onChange: onChangeTitleValue, value: titleValue } = useInput();
  const { onChange: onChangeContentValue, value:contentValue } = useInput();
  const getSunEditorInstance = (sunEditor:SunEditorCore) => {
    editorRef.current = sunEditor;
  }

  const handleChange = (content: string) => {
    console.log(content);
    onChangeContentValue(content);
    setUnSavedPost(content);
  }


  useEffect(() => {
    if(unSavedPost) {
      const isReWriteConfirm = window.confirm('저장되지 않은 글이 있습니다. 마저 작성하시겠습니까?')
      if(isReWriteConfirm) {
        editorRef.current?.setContents(unSavedPost)
      }
      setUnSavedPost('');
    }
  },[])

  return (
    <>
    <h1 className='w-full flex items-center justify-center my-2'>
      <input
        type="text"
        placeholder='유저들의 어그로를 끌 제목을 입력해주세요.'
        className='w-1/2 pl-4 py-4 outline outline-indigo-400/30 rounded-md focus:outline-indigo-800'
        value={titleValue}
        onChange={onChangeTitleValue}
        />
    </h1>
    <SunEditor
    lang='ko'
    setOptions={{
      showPathLabel: false,
      minHeight: "50vh",
      maxHeight: "70vh",
      plugins: [
        align,
        font,
        fontColor,
        fontSize,
        formatBlock,
        hiliteColor,
        horizontalRule,
        lineHeight,
        list,
        paragraphStyle,
        table,
        template,
        textStyle,
        image,
        link
      ],
      buttonList: [
        ["undo", "redo"],
        ["font", "fontSize", "formatBlock"],
        ["image","link"],
        ["paragraphStyle"],
        [
          "bold",
          "underline",
          "italic",
          "strike",
        ],
        ["fontColor", "hiliteColor"],
        ["removeFormat"],
        ["align", "horizontalRule", "list", "lineHeight"],
        ["table"],
      ],
      formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
      font: [
        "Arial",
        "Calibri",
        "Comic Sans",
        "Courier",
        "Garamond",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Palatino Linotype",
        "Segoe UI",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS"
      ]
    }}
      onChange={handleChange}
      setDefaultStyle="position:relative; font-family: '-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'; font-size: 14px;"
      autoFocus
      getSunEditorInstance={getSunEditorInstance}
      height='1000px'
      placeholder={`개인 불법 리딩방 공유 및 여기에 투자하면 얼마를 먹는다는 둥 말도 안되는 유도글 칼차단 영구밴`}
      />
      <div className='absolute -bottom-14 right-0 z-10 flex items-center justify-end gap-4 mt-2'>
    <button className=' w-20 h-12 px-4 py-2 rounded-sm text-white bg-indigo-400 font-bold ring ring-indigo-300/60'>
      등록
    </button>
    <button className=' w-20 h-12 px-4 py-2 rounded-sm text-white bg-gray-400 font-bold ring ring-gray-300/60'>
      취소
    </button>
    </div>
    </>
  )
}
