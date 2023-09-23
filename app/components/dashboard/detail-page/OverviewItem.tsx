import React, { memo } from 'react'


interface Props {
  title : string;
  content: string;
}

function OverviewItem({title, content}: Props) {
  return (
    <span className='flex justify-between w-full'>
      <span>{title}</span><span>{content}</span>
    </span>
  )
}

export default memo(OverviewItem)