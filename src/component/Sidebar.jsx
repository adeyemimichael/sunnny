import React from 'react'
import bgimage from '../assets/desktop/image-stand-out.jpg'
const Sidebar = () => {
  return (
    <div className='w-screen h-100% flex justify-center items-center'>
      <div className='w-1/2 h-full '>
<img src={bgimage} alt="" />
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center h-full px-2 '>
        <h1 className='font-bold text-3xl py-4'> Stand out to the right audience </h1>
        <p className='mx-2 px-2 '>Using a collaborative formula of designers, researchers, photographers,videographers and copywriters, we'll build and extends your brand in digital places</p>
        <span className='font-bold tect-xl underline pt-10 hover:text-gray-700 cursor-pointer' id='#contact'>Learn more</span>
      </div>
    </div>
  )
}

export default Sidebar
