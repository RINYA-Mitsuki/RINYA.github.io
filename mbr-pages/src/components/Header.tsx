import { IconContext } from 'react-icons'
import { FaTwitter, FaYoutube, FaSoundcloud, FaShoppingCart } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
export default function Header() {
  return (
    <>
      <div className="w-full top-left-0 bg-mygreen-bk z-10 fixed flex justify-between items-center drop-shadow-lg">
        <a className="ml-10 inline-block" href="#top">
          <img className="py-2 h-16" src="/logo.svg"/>
        </a>
        <ul className='text-gray-200 flex text-2xl'>
          <li className='px-3 mx-2 border-gray-200 border-solid border-b border-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:border-opacity-100'>
            <a className='tracking-widest' href='#profile'>Profile</a>
          </li>
          <li className='px-3 mx-2 border-gray-200 border-solid border-b border-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:border-opacity-100'>
            <a className='tracking-widest' href='#work'>Work</a>
          </li>
          <li className='px-3 mx-2 border-gray-200 border-solid border-b border-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:border-opacity-100'>
            <a className='tracking-widest' href='#'>Portfolio</a>
          </li>
          <li className='px-3 mx-2 border-gray-200 border-solid border-b border-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:border-opacity-100'>
            <a className='tracking-widest' href='#contact'>Contact</a>
          </li>
        </ul>
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