import React from 'react'
import image1 from '../assets/image-emily.jpg'
import image2 from '../assets/image-jennie.jpg'
import image3 from '../assets/image-thomas.jpg'
const Carousel = () => {
  return (

    <div className='flex flex-col  items-center'>

       <div className='absolute flex justify-center items-center mt-16 '><h1 className='font-bold text-2xl text-zinc-600'>Clients Testimonials</h1>
        </div>
    <div className='flex justify-evenly items-center w-screen h-screen mx-2 '>
       {/* first div for testimonials */}
         <div className="new flex flex-col justify-center items-center w-2/4 h-1/2 mx-2">
           <div className=' w-[60px]  h-[60px]  bg-slate-400 overflow-hidden object-contain rounded-3xl' >

              <img src={image1} alt="" />
             </div>
  <p className='mx-4 pt-2 pb-2 text-zinc-500 text-[12px] py-2 text-center'> We put our trust in Sunnyside and they delivered, making sure our 
needs were met, and the deadlines were always hit   </p>
      <h1 className="font-bold text-zinc-600 text-[20px] pt-2 ">Emily R. </h1>
         <span className='text-zinc-400 text-[10px] '>Marketing Director </span>
        </div>

        {/* second div for testimonials  */}
        <div className="new flex flex-col justify-center items-center w-2/4 h-1/2 mx-2">
           <div className='w-[60px]  h-[60px]  bg-slate-400 overflow-hidden object-contain rounded-3xl'>

           <img src={image3} alt="" />
         </div>
<p className='mx-4 pt-2 pb-2 text-zinc-500 text-[12px] py-2 text-center'> Sunnyside's enthusiasm
 coupled with their keen 
interest in our brand's
 success made it a satisfying and enjoyable experience </p>
<h1 className="font-bold text-zinc-600 text-[20px] pt-2 ">Thomas S. </h1>
<span className='text-zinc-400 text-[10px] '>Chief Operating Officer</span>
      </div>

      {/* third div for testimonials  */}
      <div className="new flex flex-col justify-center items-center w-2/4 h-1/2 mx-2">
<div className='w-[60px]  h-[60px]  bg-slate-400 overflow-hidden object-contain rounded-3xl'>

    <img src={image2} alt="" />
</div>
<p className='mx-4 pt-2 pb-2 text-zinc-500 text-[12px] py-2 text-center'> Incredible end result! Our sales increased by over 400% 
When we worked with Sunnyside. Highly recommended!
 </p>
 <h1 className="font-bold text-zinc-600 text-[20px] pt-2 ">Jennie F. </h1>
 <span className='text-zinc-400 text-[10px] '>Business Owner</span>
      </div>
    
      
    </div>
    </div>
  )
}

export default Carousel
