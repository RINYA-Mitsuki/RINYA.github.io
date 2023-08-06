import { IconContext } from 'react-icons'
import { FaTwitter, FaYoutube, FaSoundcloud, FaShoppingCart } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
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
        <ul className='flex pr-10 pt-1'>
          <li className='p-2'>
            <a href="https://twitter.com/RINYA_P" title="Twitter" className='inline-block'>
              <FaTwitter size={20} color={"#F2F2F2"}/>
            </a>
          </li>
          <li className='p-2'>
            <a href="https://www.youtube.com/@RINYA_P" title="Youtube" className='inline-block'>
              <FaYoutube size={20} color={"#F2F2F2"}/>
            </a>
          </li>
          <li className='p-2'>
            <a href="https://soundcloud.com/rinya-p" title="SoundCloud" className='inline-block'>
              <FaSoundcloud size={20} color={"#F2F2F2"}/>
            </a>
          </li>
          <li className='p-2'>
            <a href="https://rinya-p.booth.pm/" title="BOOTH" className='inline-block'>
              <FaShoppingCart size={20} color={"#F2F2F2"}/>
            </a>
          </li>
          <li className='p-2'>
            <a href="mailto:records&#64;mitsuboshi.work" title="Mail" className='inline-block'>
              <TbMailFilled size={20} color={"#F2F2F2"}/>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}