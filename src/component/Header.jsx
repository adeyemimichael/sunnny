import React from 'react'
import bgmimage from '../assets/desktop/image-transform.jpg'
import { blueGrey } from '@mui/material/colors'
const Header = () => {
  return (
    <div className='w-screen h-100% flex  justify-center items-center text-left px-2 py-1'>
    <div className=' w-1/2 flex flex-col justify-center items-center h-full px-2 ' >
        <h1 className='font-bold text-3xl py-4' >Transform your brand </h1>
        <p>We are a full-service creative agency,specializing in helping brands grow fast, Engage clients through compelling visuals that do most of the marketing for you. </p>

        <span className='font-bold tect-xl underline pt-10 hover:text-gray-700 cursor-pointer' id='#contact'>Learn more</span>
    </div>
    <div className='w-1/2 h-full '>
        <img src={bgmimage} alt="" className=' object-contain h-100%' />
    </div>
    </div>
  )
}

export default Header
