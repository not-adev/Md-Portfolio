import React from 'react'
import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Point, useGLTF } from '@react-three/drei'
import Balls from './Balls'
import { Suspense } from 'react'
import StarsCanvas from './Stars'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Planet = () => {


    const scene = useRef(null)
    useEffect(() => {
        gsap.to(scene.current.rotation, {
            y: Math.PI * 2,
            duration: 15,
            repeat: -1,
            ease: "linear"
        })
    }, [])
    const earth = useGLTF("planet/scene.gltf")
    return (

        <primitive ref={scene} position={[0, 0, 0]} object={earth.scene} />



    )
}


const About = () => {
    const ball1 = useRef(null)
    const ball2 = useRef(null)
    const planetref = useRef(null)
    const textref = useRef(null)
    const mainref = useRef(null)

    useEffect(() => {
       

        gsap.from(textref.current, {
            x: -550,
            y: -350,
            duration: 3,
            delay: 3,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: mainref.current,
                start: "center center",
                end: "bottom end ",
             

            }
        })

         gsap.from(planetref.current, {
            x: "100%",
            y: -100,
            duration: 3,
            delay: 2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: mainref.current,
                start: "center center",
                end: "bottom end ",
               

            }
        })
        gsap.from(ball1.current, {
            y: -100,
            duration: 2,
            scrollTrigger: {
                trigger: mainref.current,
                start: "center center",
                end: "bottom end ",
              

            }

        })
        gsap.from(ball2.current, {
            y: 100,
            duration: 2,
            scrollTrigger: {
                trigger: mainref.current,
                start: "center center",
                end : "bottom end"
             

            }


        })





    }, [])




    return (
        <div ref={mainref} className='about relative inset-shadow-[0px_6px_20px_9px_#040404] h-[100vh] '>
            <StarsCanvas z={-10} />
            <div className='text-5xl font-extrabold  pt-4 pl-5'>About Me</div>

            <div className='lg:flex justify-between overflow-hidden  h-[89%]  '>

                <div ref={textref} className='z-[10] text-left relative lg:w-full '>

                    <div className=' px-10 pt-3 text-sm md:text-lg absolute lg:h-full top-0 left-0 '>
                        Hi I am <span className='text-green-400 font-bold'>Md Arif Ansari</span> passionate <span className='text-green-400 font-bold'>Full-Stack Web Developer</span> fom Delhi having a strong focus on creating <span className='text-green-400 font-bold'>Interactive</span> and visually <span className='text-green-400 font-bold'>Dynamic Applications</span> . My expertise lies in <span className='text-green-400 font-bold'>React, Angular, Next.js, and API integration</span>, allowing me to build seamless and scalable solutions.
                        I love crafting intuitive user experiences, exploring responsive design techniques with <span className='text-green-400 font-bold'>Tailwind</span>  CSS, and adding life to projects through <span className='text-green-400 font-bold'>GSAP</span> animations and ScrollTrigger effects. Whether it's refining asynchronous state management in React, embedding multimedia functionality, or tackling debugging challenges, I approach every problem with curiosity and persistence.
                        Beyond <span className='text-green-400 font-bold'>Front-end development</span> , I'm actively expanding my skills in <span className='text-green-400 font-bold'>Backend</span>  integration and deployment practices, ensuring that my projects are both performant and secure. I enjoy working with environment variables,<span className='text-green-400 font-bold'>HTTPS</span>  setup, and <span className='text-green-400 font-bold'>API authentication</span>  to enhance dynamic functionality. Appart form this I love plying <span className='text-green-400 font-bold'>Sports</span>  and participate in compitions wheather it's coding or sports.
                    </div>

                </div>

                <div ref={planetref}  className='lg:w-[50%] z-[1] h-full xl:relative w-full '>
                    <Canvas className='z-[1] '>
                        <Suspense fallback={`lodding..`}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={3} />
                            <directionalLight position={[1, 1, 1]} intensity={6} castShadow color={"white"} />
                            <PerspectiveCamera makeDefault far={100} fov={100} near={.1} position={[1, 0, 1]} />
                            <Planet  /></Suspense>

                    </Canvas>
                </div>


            </div>

            <div ref={ball1} className='absolute top-6 md:left-100  -z-1 right-0' >
                <Balls color={"purple"} scale={[2, 2, 2]} />
            </div>
            <div ref={ball2} className='absolute -z-1 top-100 -left-10 '>
                <Balls color={"purple"} scale={[3, 3, 3]} />
            </div>
        </div>
    )
}

export default About