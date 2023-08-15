import { IconContext } from 'react-icons'
import { FaTwitter, FaYoutube, FaSoundcloud, FaShoppingCart } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
import Linkicons from './Linkicons';

export default function Footer() {
  return (
    <>
      <div className="w-full h-32 bg-mygreen-bk flex justify-between items-center">
        <a className="ml-10 inline-block" href="#top">
          <img className="py-2 h-16" src="/logo.svg"/>
        </a>
        <div className='flex text-gray-200'>
          <p className='px-1'>Copyright</p>
          <p className='px-1'>© RINYA/りにゃ</p>
          <p className='px-1'>All Rights Reserved.</p>
        </div>
        <Linkicons/>
      </div>
    </>
  )
}