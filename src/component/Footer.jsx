import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle,AiFillYoutube} from "react-icons/ai";
const Footer = () => {
  return (
    <div className='w-screen h-full flex flex-col justify-center items-center bg-green-500'>
     <h1 className=' font-extrabold text-[26px] mt-10 text-zinc-600'>sunnyside </h1>
     <ul className='flex justify-between px-4 text-zinc-500 pb-6'>
        <li className='p-4 hover:text-white cursor-pointer'>About </li>
        <li className='p-4 hover:text-white cursor-pointer'>Services </li>
        <li className='p-4 hover:text-white cursor-pointer'>Projects</li>
     </ul>
     <ul className='flex pb-10'>
        <li className='p-2 text-zinc-600 text-[24px] hover:text-white cursor-pointer'><AiFillFacebook/></li>
        <li className='p-2 text-zinc-600 text-[24px] hover:text-white cursor-pointer'><AiFillInstagram/></li>
        <li className='p-2 text-zinc-600 text-[24px] hover:text-white cursor-pointer'><AiFillTwitterCircle/></li>
        <li className='p-2 text-zinc-600 text-[24px] hover:text-white cursor-pointer'><AiFillYoutube/></li>

     </ul>
    </div>
  )
}

export default Footer
