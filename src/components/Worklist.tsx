import React from 'react';
type propstype = {
  date: string,
  summary: string,
  url: string
}

export default function Worklist(props: propstype) {
  return (
    <a href={props.url} className='flex tracking-tighter text-gray-800 bg-mygreen-dk bg-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:bg-opacity-100 hover:text-gray-100' target="_blank" rel="noopener noreferrer">
      <div className='text-2xl w-52 py-2 pr-4 pl-8'>
        {props.date}
      </div>
      <div className='text-xl py-2 px-6 border-l-2 border-gray-500 border-solid'>
        {props.summary}
      </div>
    </a>
  )
}