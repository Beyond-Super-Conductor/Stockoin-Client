'use client'

import useInput from "@/hooks/useInput";
import { findCategoryState } from "@/store/findCoin";
import { selectCoinstate } from "@/store/selectCoin";
import { Coin } from "@/types/coin";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ChatIconButton from "../common/ChatIconButton";
import { coinCategory } from "@/utils/constants";
import { useParams } from "next/navigation";

export default function Chat() {
  const [selectCoin,setselectCoin] = useRecoilState(selectCoinstate);
  const [_,setFindCategory] = useRecoilState(findCategoryState)
  const { value:chatMessageValue, onChange:onChangeChatMessage } = useInput()
  const [chatSwitch,setChatSwitch] = useState(false);
  const {slug,tokenDetail} = useParams();
  const onClickChatSwitch = () => {
    setChatSwitch((prev) => !prev);
  }

  useEffect(() => {  
    const selectedCategory = coinCategory.find((item) => item.enName === slug);
    if(!selectedCategory) return;
    setFindCategory(selectedCategory);
    const selectedToken = selectedCategory.coins
    .find((item) => item.enName === tokenDetail);
    if(!selectedToken) return;
    setselectCoin(selectedToken);
  },[slug, tokenDetail]);

  return (
    <>
            {
          chatSwitch
          ? <ChatIconButton onClick={onClickChatSwitch} />
          : <div className="fixed bottom-0 right-0 w-[25%] h-[50vh] flex flex-col border shadow-md bg-white bg-opacity-60 z-10">
          <div className="flex items-center justify-between border-b p-2">
            {/* <!-- user Avatar --> */}
            <div className="flex items-center">
              
              {selectCoin?.icon && <Image src={selectCoin.icon} width={40} height={40} alt='coin image' />}
              <div className="pl-2">
                <div className="font-semibold">
                  <a className="hover:underline" href="#">{selectCoin?.koName} 채팅방</a>
                </div>
                <div className="text-xs text-gray-600">{selectCoin?.enName}</div>
              </div>
            </div>
            {/* <!-- end user info --> */}
            {/* <!-- chat box action --> */}
            <div>
              <a className="inline-flex hover:bg-indigo-50 rounded-full p-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </a>

              {/* chat off button */}
              <button
                className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                type="button"
                onClick={onClickChatSwitch}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* <!-- end chat box action --> */}
          </div>

          <div className="flex-1 px-4 py-4 overflow-y-auto">
            {/* <!-- chat message --> */}

            <div className="flex items-center mb-4">
              <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                <img className="rounded-full w-10 h-10"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <a href="#" className="block text-xs hover:underline">코인에집문서</a>
              </div>
              <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                
                <p>아니 어제까지만해도 100따리였던게 말이되냐 ?</p>

                {/* <!-- arrow --> */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                {/* <!-- end arrow --> */}
              </div>
            </div>

            {/* <!-- end chat message --> */}

            {/* <!-- chat message --> */}

            <div className="flex items-center flex-row-reverse mb-4">
              <div className="flex-none flex flex-col items-center space-y-1 ml-4">
                <img className="rounded-full w-10 h-10"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <a href="#" className="block text-xs hover:underline">나</a>
              </div>
              {/* my chat bubble */}
              <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
                <p className='text-right'>ㅋㅋ개못해</p>

                {/* <!-- arrow --> */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
                {/* <!-- end arrow --> */}
              </div>
            </div>

            {/* <!-- end chat message --> */}

            {/* <!-- chat message --> */}

            <div className="flex items-center mb-4">
              <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                <img className="rounded-full w-10 h-10"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <a href="#" className="block text-xs hover:underline">키보드워리어</a>
              </div>
              <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                <div>어디사냐</div>

                {/* <!-- arrow --> */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                {/* <!-- end arrow --> */}
              </div>
            </div>

            {/* <!-- end chat message --> */}
          </div>

          <div className="flex items-center border-t p-2 h-24">
            {/* <!-- chat input action --> */}
            <div>
              <button className="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
            {/* <!-- end chat input action --> */}
            <div className="w-full mx-2">
              <input className="pl-4 w-full h-14 rounded-full border border-gray-200 shadow-md shadow-slate-400/60" type="text" value={chatMessageValue} placeholder="Aa" onChange={onChangeChatMessage} autoFocus />
            </div>
            {/* <!-- chat send action --> */}
            <div>
              <button className="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            {/* <!-- end chat send action --> */}
          </div>
        </div> 
        }
        </>
    
  )
}
