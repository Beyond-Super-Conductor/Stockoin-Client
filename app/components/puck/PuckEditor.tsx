'use client'

import React, { ReactNode } from 'react'
import { Config, Puck, AppState,  } from '@measured/puck'
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
      },
      defaultProps: {
        title: 'Hello World',
      },
      render: ({ title, textAlign }) => (
        <div style={{ padding: 64 }}>
          <h1 style={{ textAlign }}>{title}</h1>
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
      },
     
      defaultProps: {
        text: "Paragraph",
        textAlign: "left",
      },
      render: ({ text,textAlign,padding }) => (
        <div style={{ padding: 32 }}>
          <p style={{textAlign}} className='leading-7 text-4xl text-rose-400'>{text}</p>
        </div>
      ),
    },
  }
}

// Describe the initial data
const initialData = {
  root: {
    type: "HeadingBlock",
    children: [
      {
        type: "Paragraph",
        children: [],
      },
    ],
  },
  content: {
    type: "Paragraph",
    children: [
      {
        type: "Paragraph",
        children: [],
      },
    ]
  }
};

// Save the data to your database
const save = (data: any) => {};

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
      <Puck config={config} plugins={[myPlugin]} data={initialData as any} onPublish={save} />
    </div>
  )
}
