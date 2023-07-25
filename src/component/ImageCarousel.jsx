import React from 'react'
import image1 from '../assets/desktop/image-gallery-milkbottles.jpg'
import image2 from '../assets/desktop/image-gallery-orange.jpg'
import image3 from '../assets/desktop/image-gallery-cone.jpg'
import image4 from '../assets/desktop/image-gallery-sugarcubes.jpg'
const ImageCarousel = () => {
  return (
    <div>
  <div className='w-screen h-100% flex  justify-center items-center'>
    <div className='w-1/4'><img src={image1} alt="" /></div>
<div className='w-1/4'> <img src={image2} alt="" /></div>
<div className='w-1/4'><img src={image3} alt="" /></div>
<div className='w-1/4'><img src={image4} alt="" /></div>


  </div>

    </div>
  )
}

export default ImageCarousel
