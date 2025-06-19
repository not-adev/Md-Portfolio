import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'


const Loading = ({ onComplete }) => {
  const imgref = useRef(null)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
   gsap.from(imgref.current,{
    y : '-55vh',
    delay : 0.4 ,
    duration : 2,
    ease : "bounce.out"
   })
   setTimeout(() => {
    imgref.current.classList.add("reflection")
   }, 2400);

   gsap.to(imgref.current,{
    translateZ : "100vh",
    delay : 2.49,
    duration : 2
    
   })
   gsap.to(imgref.current,{
    opacity : 0 ,
    delay : 4.3,
    duration : 0.3,
    onComplete : ()=>{
      setVisible(false)
      onComplete()
    }
   })
   
  
    
  }, [])
  

  return  visible ? (
    <div className='preserve-3d w-screen  h-screen flex items-center justify-center'>  
      <img ref={imgref} src="namelogo.png" alt="img" className='invert-100 prese preserve-3d h-[60px]'/>
    </div> ) : null 
  
}

export default Loading