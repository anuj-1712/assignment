import React from 'react'

export default function CardTags({tag}) {
  return (
    <div className='flex gap-2 items-center p-1 border-[1px] border-gray-400 rounded-md'>
      <div className='h-[12px] w-[12px] rounded-[50%] bg-[gray]'></div>
      <span className='text-sm text-[#8d8d8d]'>{tag}</span>
    </div>
  )
}
