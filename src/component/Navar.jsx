import React from 'react'
import { useState } from 'react';
import svg from '../assets/logo.svg'
import { AiFillFire,AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (

      <div className='flex h-24 mx-auto py-4 px-6 justify-between items-center fixed bg-transparent w-screen '>
<h1 className='text-2xl text-white font-bold  cursor-pointer'> sunnyside </h1>
<ul className=' hidden sm:flex text-sm  text-gray-300'>
  <li className='p-4 cursor-pointer'>About </li>
  <li className='p-4 cursor-pointer' >Product</li>
  <li className='p-4 cursor-pointer' id='contact' >Services </li>
 <li className='my-4 bg-white pl-3 pr-3 pb-1 pt-1 rounded-2xl text-slate-950
  hover:shadow-xl hover:text-white cursor-pointer hover:ease-out delay-100 hover:bg-stone-300'>Contact</li>

</ul>
<div onClick={handleNav} className='visible md:hidden'>
{ !nav ?<AiOutlineClose size= {20} />: <AiOutlineMenu  size = {20} className='text-gray-200'/> }

</div>



<div className={!nav ? "sm:hidden flex flex-col justify-center items-center bg-gray-200 absolute  w-[250px] top-0 left-0 mt-20 mx-2  pb-6 ease-in-out duration-500"  : "fixed left-[-100%]"}>
 
<ul className='block text-[20px] text-sm pt-6 mx-2 '>
  <li className='hover:text-gray-400 hover:shadow-md p-4 cursor-pointer border-b'>About </li>
  <li className='hover:text-gray-400 hover:shadow-md p-4 cursor-pointer border-b' >Product</li>
  <li className='hover:text-gray-400 hover:shadow-md p-4 cursor-pointer border-b' >Services </li>
 <li className='rounded-2xl  bg-yellow-400 text-[14px] my-4  pl-3 pr-3 pb-1 pt-1 
  hover:bg-slate-900 hover:shadow-xl hover:text-slate-50 cursor-pointer hover:ease-out delay-100 w-[80px]'>Contact</li>
  </ul>
  
  </div> 
  </div>
    
  )
}

export default NavBar
