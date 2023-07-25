import React from 'react'
import image1 from '../assets/desktop/image-graphic-design.jpg'
import image2 from '../assets/desktop/image-photography.jpg'
const Sidebar2 = () => {
  return (
    <div className='w-screen h-100% flex justify-center ' >
     <div className='flex justify-center items-center'>
        <div className='absolute justify-center flex flex-col items-center mt-24 mb-0 pt-16 mx-4'><h1 className='font-bold text-zinc-600 text-xl mt-0 '>Graphic Design </h1>
        <p className=' my-4  mx-2 text-zinc-600 text-sm '>Great design meakes you memorable. We deliver artworks that underscores your brand message and captures potential clients attetion</p>
        </div>
     
        <img src={image1} alt="" />
      
     </div>
     <div className='flex justify-center items-center'>
     <div className='absolute justify-center flex flex-col items-center mt-24 mb-0 pt-16 mx-4'><h1 className='font-bold text-zinc-600 text-xl mt-0 '>Photography</h1>
        <p className=' my-4  mx-2 text-zinc-600 text-sm '>Increase your credibility by getting the most stunning, high-quality photos that improves your business image</p>
        </div>
        <img src={image2} alt="" srcset="" />
     </div>
    </div>
  )
}

export default Sidebar2
