import React, { useEffect, useRef } from 'react'

import Navbar from './Navbar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Main = () => {
  const textref = useRef([])
  
  

  useEffect(() => {
    textref.current.forEach((el) => {
      gsap.from(el, {
        y: "100%",
        duration: 4,
        immediateRender: false,
        ease :"power3" ,
        
      })


    })
    

  }, [])


  gsap.from
  return (
    <>
      <div className='md:h-[100vh] relative  inset-shadow-[0px_-20px_20px_20px_black] '>
        <div className='bg-transparent '>
          <Navbar />
          <div className='lg:flex  items-center w-full h-[90vh]  justify-between pt-14 lg:pt-0  '>
            <div className='bg-amber-50 webkit-clip text-center text-shadow-2xs  w-full text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-300  text-t '>
              <div className='flex overflow-hidden  flex-col justify-between w-[80%] m-auto'>
                <div className='hover:border transform transition-normal overflow-hidden'>
                  <div ref={(el) => (textref.current[0] = el)} className='md:text-start h-auto' >
                    Md Arif
                  </div>
                </div>

                <div className='md:text-end hover:border ' ref={(el) => (textref.current[1] = el)} > Ansari </div>
              </div>
              <div className='overflow-hidden hover:border'>

                <div ref={(el) => (textref.current[2] = el)} className='md:text-5xl text-3xl px-1 pt-2'>Full Stack Developer and Designer   </div>
              </div>

            </div>
            <div className='text-center  w-full flex flex-col items-center '>

             <img src="namelogo.png" alt="img" className='invert-100 h-[200px] lg:h-auto '  />
            </div>
          </div>
        </div>


      </div>

      <div className='h-[90vh] bg-black w-[100vw] top-0 left-0 -z-10 absolute '>

        <video className='h-full w-[100vw] overflow-x-hidden object-cover' autoPlay preload='auto' muted loop >
          <source src="https://uploads-ssl.webflow.com/65b7bac85c1092089d510616/65b8c737f3618d8dd99da139_VIDEO HOME (DSK)-transcode.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </>



  )
}

export default Main

{/* <h1 class="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
  Gradient Text
</h1> */}