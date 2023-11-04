'use client'

import React, { ReactNode } from 'react'
import { Config, Puck, AppState, Data, DefaultComponentProps, DefaultRootProps,  } from '@measured/puck'
import "@measured/puck/dist/index.css";

interface Props {
  HeadingBlock: { title: string };
  Paragraph: {text: string}
}


const config:Config = {
  
  components: {
    
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
            { label: "Small", value: "text-sm" },
            { label: "Normal", value: "text-base" },
            { label: "Large", value: "text-lg" },
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
          <p style={{textAlign}} className={`leading-7 text-4xl ${textSize} ${color}`}>{text}</p>
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
    <div>
      {children}

      <button
        onClick={() => {
          dispatch({
            type: "setUi",
            ui: { leftSideBarVisible: !state.ui.leftSideBarVisible },
          });
        }}
      >
        Toggle side-bar
      </button>
    </div>
  ),
  
};

export default function PuckEditor() {
  return (
    <div className='w-full mt-100 pt-[300px]'>
      <Puck config={config} data={initialData} plugins={[myPlugin]} onPublish={save} />
    </div>
  )
}
