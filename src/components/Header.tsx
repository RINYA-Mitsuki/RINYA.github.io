import { IconContext } from 'react-icons'
import Linkicons from './Linkicons';

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
            <a className='tracking-widest' href='portfolio'>Portfolio</a>
          </li>
          <li className='px-3 mx-2 border-gray-200 border-solid border-b border-opacity-0 transition-all duration-200 ease-out hover:duration-200 hover:border-opacity-100'>
            <a className='tracking-widest' href='#contact'>Contact</a>
          </li>
        </ul>
        <Linkicons/>
      </div>
    </>
  )
}