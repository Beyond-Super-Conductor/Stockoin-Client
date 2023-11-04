'use client'

import React, { ReactNode } from 'react'
import { Config, Puck, AppState, Data, DefaultComponentProps, DefaultRootProps } from '@measured/puck'
import "@measured/puck/dist/index.css";


const config:Config = {
  
  components: {
    ChatRoom: {
      fields: {
        title: {
          type: 'radio',
          options: [
            // bitcoin categories
            {label: '비트코인', value: 'BTC',},
            {label: '이더리움', value: 'ETH'},
            {label: '도지코인', value: 'DOGE'},
            {label: '에이다', value: 'ADA'},
            {label: '리플', value: 'XRP'},
            {label: '폴카닷', value: 'DOT'},
            {label: '유니스왑', value: 'UNI'},
            {label: '테조스', value: 'XTZ'},
            {label: '비체인', value: 'VET'},
            {label: '라이트코인', value: 'LTC'},
            {label: '체인링크', value: 'LINK'},
            {label: '스텔라루멘', value: 'XLM'},
            {label: '비트코인캐시', value: 'BCH'},
            {label: '쎄타토큰', value: 'THETA'},
            {label: '트론', value: 'TRX'},
          ]
        },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        textSize: {
          type: "radio",
          options: [
            { label: "Small", value: "text-3xl" },
            { label: "Normal", value: "text-4xl" },
            { label: "Large", value: "text-5xl" },
          ],
        },
        color: {
          type: "radio",
          options: [
            { label: "빨강", value: "text-red-400" },
            { label: "파랑", value: "text-indigo-400" },
          ]
        },
      },
      defaultProps: {
        title: 'BTC',
      },
      render: ({ title, textAlign,color, textSize}) => (
        <div style={{ padding: 64 }}>
          <h1 style={{ textAlign }} className={`${textSize} ${color} mb-10` }>{title}</h1>
          <div className={`
          mx-auto w-[600px] h-[360px] border border-slate-200
          flex flex-col justify-center items-center
          `}>
            <span className='text-slate-400'>여기에 채팅 들어갈건데요?</span>
              
          </div>
        </div>
      ),
    },
    HeadingBlock: {
      fields: {
        title: {
          type: 'text',
          label: 'Title',
        },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        textSize: {
          type: "radio",
          options: [
            { label: "Small", value: "text-3xl" },
            { label: "Normal", value: "text-4xl" },
            { label: "Large", value: "text-5xl" },
          ],
        },
        color: {
          type: "radio",
          options: [
            { label: "빨강", value: "text-red-400" },
            { label: "파랑", value: "text-indigo-400" },
          ]
        }
      },
      defaultProps: {
        title: 'Hello World',
      },
      render: ({ title, textAlign,color, textSize}) => (
        <div style={{ padding: 64 }}>
          <h1 style={{ textAlign }} className={`${textSize} ${color}` }>{title}</h1>
        </div>
      ),
    },
    Paragraph: {
      fields: {
        text: { type: "text" },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        textSize: {
          type: "radio",
          options: [
            { label: "Small", value: "text-3xl" },
            { label: "Normal", value: "text-4xl" },
            { label: "Large", value: "text-5xl" },
          ],
        },
        color: {
          type: "radio",
          options: [
            { label: "빨강", value: "text-red-400" },
            { label: "파랑", value: "text-indigo-400" },
          ]
        }
      },
     
      defaultProps: {
        text: "Paragraph",
        textAlign: "left",
      },
      render: ({ text,textAlign, color, textSize}) => (
        <div style={{ padding: 32 }}>
          <p style={{textAlign}} className={`leading-7 ${textSize} ${color}`}>{text}</p>
        </div>
      ),
    },
  }
}

// Describe the initial data
const initialData:Data<DefaultComponentProps, DefaultRootProps> = {
  root: {
    type: "HeadingBlock",
    children: [
      {
        type: "Paragraph",
        children: [],
      },
      {
        type: "ChatRoom",
        children: [],
      },
      {
        type: "Paragraph",
        children: [],
      }
    ],
  },
  content: [
    
  ]
};

// Save the data to your database
// 
const save = (data: any) => {
  console.log(data);
};

const myPlugin = {
  renderRootFields: ({ children, dispatch, state }:{children:ReactNode, dispatch:any, state:AppState}) => (
    <div className='relative'>
      {children}

      <button
        className='ml-6 px-2 w-fit h-10 bg-indigo-400 text-white rounded-lg'
        onClick={() => {
          dispatch({
            type: "setUi",
            ui: { leftSideBarVisible: !state.ui.leftSideBarVisible },
          });
        }}
      >
        왼쪽 사이드바 {state.ui.leftSideBarVisible ? "숨기기" : "보이기"}
      </button>
    </div>
  ),
};

export default function PuckEditor() {
  return <Puck config={config} data={initialData} plugins={[myPlugin]} onPublish={save} />
}
