import React from 'react';
import { IconContext } from 'react-icons'
import { FaTwitter, FaYoutube, FaSoundcloud, FaShoppingCart } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"

export default function Linkicons() {
  return (
    <ul className='flex pr-10 pt-1'>
      <li className='p-2'>
        <a href="https://twitter.com/RINYA_P" target="_blank" rel="noopener noreferrer" title="Twitter" className='inline-block'>
          <FaTwitter size={20} color={"#F2F2F2"}/>
        </a>
      </li>
      <li className='p-2'>
        <a href="https://www.youtube.com/@RINYA_P" target="_blank" rel="noopener noreferrer" title="Youtube" className='inline-block'>
          <FaYoutube size={20} color={"#F2F2F2"}/>
        </a>
      </li>
      <li className='p-2'>
        <a href="https://soundcloud.com/rinya-p" target="_blank" rel="noopener noreferrer" title="SoundCloud" className='inline-block'>
          <FaSoundcloud size={20} color={"#F2F2F2"}/>
        </a>
      </li>
      <li className='p-2'>
        <a href="https://rinya-p.booth.pm/" target="_blank" rel="noopener noreferrer" title="BOOTH" className='inline-block'>
          <FaShoppingCart size={20} color={"#F2F2F2"}/>
        </a>
      </li>
      <li className='p-2'>
        <a href="mailto:info&#64;mitsuboshi.studio" target="_blank" rel="noopener noreferrer" title="Mail" className='inline-block'>
          <TbMailFilled size={20} color={"#F2F2F2"}/>
        </a>
      </li>
    </ul>
  )
}