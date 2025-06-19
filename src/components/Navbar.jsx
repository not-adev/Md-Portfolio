import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'


const Navbar = () => {

    const navref = useRef(null)
    useEffect(() => {
      gsap.from(navref.current,{
        y : "-100%", 
        duration : 2, 
        delay : 1
      })
    
    
    }, [])
    
    

    const moveOnclick = (name) => {
        console.log("hi")
        document.querySelector(`.${name}`).scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <section ref={navref} className='navbar z-20 absolute flex justify-between w-full px-20 text-xl overflow-x-hidden  text-white pt-5  '>
            <div>
                <img src="namelogo.png" alt="logo" className=' h-8 invert-100' />
            </div>
            <nav>
            <ul className='lg:flex space-x-5 hidden '>
                <li className='hover:text-gray-400'><button onClick={() => moveOnclick("about")}>About</button> </li>
                <li className='hover:text-gray-400'><button onClick={() => moveOnclick("skills")}>Skills</button></li>
                <li className='hover:text-gray-400'><button onClick={() => moveOnclick("projects")}>Projects</button></li>
                <li className='hover:text-gray-400'><button onClick={() => moveOnclick("contect")}>Contect</button></li>
            </ul>
            </nav>
            <div className='flex flex-col lg:hidden items-end group relative'>
                <div>

                <img src="burger.svg" alt="img" className='invert-100  h-6' />
                </div>
                <ul className='bg-gray-500 p-4 rounded-2xl hidden group-hover:block'>
                    <li className='hover:text-gray-400'><button onClick={() => moveOnclick("about")}>About</button> </li>
                    <li className='hover:text-gray-400'><button onClick={() => moveOnclick("skills")}>Skills</button></li>
                    <li className='hover:text-gray-400'><button onClick={() => moveOnclick("projects")}>Projects</button></li>
                    <li className='hover:text-gray-400'><button onClick={() => moveOnclick("contect")}>Contect</button></li>
                </ul>
            </div>

          

        </section>
    )
}

export default Navbar