import React from 'react'
import { useState } from 'react'
import '../App.css'
import imgbg from '../assets/desktop/image-header.jpg'
import svg from '../assets/icon-arrow-down.svg'
const Hero = () => {
  const [arrow, setArrow ] = useState()
  const handleArrow = ()=> {
    setArrow(!arrow)
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      
    <img src={imgbg} alt="" className='object-fit-contain'/>
    <h1 className='uppercase font-bold text-4xl absolute text-white pb-24 mb-10'>we are creatives</h1>
    <img src={svg} alt=""  className='arrow-id absolute pt-24  '/>
    </div>
  )
}

export default Hero
