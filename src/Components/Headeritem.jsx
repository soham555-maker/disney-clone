import React from 'react'

export default function Headeritem(props) {
  return (
    <div className='gap-0 mb-2 hover:underline
    underline-offset-8 flex items-center font-semibold text-[15px] text-white cursor-pointer '>
      <props.Icon className='mx-[2px] md:mx-[10px] hover:underline 
    md:underline-offset-8 '/>
      <h2 >{props.name}</h2>
    </div>
  )
}
