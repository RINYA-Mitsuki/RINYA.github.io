import React from 'react';

type propstype = {
  genre: string,
  image: string,
  summary: string,
  url: string
}

export default function Portfoliolist(props: propstype) {
  return (
    <div className='p-2' id={props.genre}>
      <img src={props.image} className='h-auto max-w-lg cursor-pointer transition-all duration-200 ease-in-out hover:opacity-10'></img>
    </div>
  )
}