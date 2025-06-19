import React, { useEffect, useRef, useState } from 'react'
import Balls from './Balls'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import Slider from './Slider'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)
const Projects = () => {

    const imgref = useRef(null)
    const mainref = useRef(null)
    const textref = useRef([])
    const animateref = useRef([])



    useEffect(() => {
        gsap.from(imgref.current, {
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: mainref.current,
                start: "center center ",
                end: 'bottom bottom ',

            }
        })
        gsap.from(textref.current, {
            y: -100,
            delay: 2,
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: mainref.current,
                start: "center center ",
                end: 'bottom bottom '
            }

        })
        animateref.current.forEach((el) => {
            gsap.from(el, {
                opacity: 0,
                delay: 4,
                duration: 1.5,
                scrollTrigger: {
                    trigger: mainref.current,
                    start: "center center ",
                    end: 'bottom bottom ',

                }
            })
        })



       

    }, [])

   




    return (
        <>
            <div ref={mainref} className=' h-[100vh] relative flex flex-col items-center overflow-hidden justify-center'>
                <div className='flex flex-col relative items-center gap-6'>
                    <div ref={textref}>

                        <div className='text-center md:text-6xl text-4xl m-auto font-bold  '>Portfolio & Previous <br /> Projects</div>
                        <div className='sm:w-[45%] w-[90%] m-auto text-center'>
                            I have built various different projects to fit different aspects. If you want to see more examples of my work than the ones showcased in this site, please contact me!
                        </div>
                    </div>
                    <div className='flex items-cente  z-10 gap-x-3'>
                        <button className=' text-center text-lg p-1 border border-purple-300' onClick={()=> document.querySelector(`.projects`).scrollIntoView({ behavior: 'smooth'})}> see my pojects </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className=" text-purple-500 icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" /></svg>
                    </div>

                </div>
                <div ref={(el) => (animateref.current[0] = el)} className=' w-auto absolute top-10 opacity-50 -z-10 md:right-40 right-0'>
                    <Balls color={"green"} scale={[2.3, 2.3, 2.3]} width={20} />
                </div>
                <div ref={(el) => (animateref.current[1] = el)} className='w-auto  absolute top-130 md:top-100  -left-15  md:left-10'>
                    <Balls color={"rgb(114, 129, 242)"} scale={[3, 3, 3]} width={20} />
                </div>




                <div ref={imgref} className='absolute opacity-70  z-[-21]'>
                    <img src="pc-bg.png" alt="img" />
                </div>

                <div ref={(el) => (animateref.current[2] = el)} className='absolute overflow-hidden h-[50%] -z-1 flex items-center blur-sm bottom-80 lg:-left-20  -left-70 '>
                    <svg width="703" height="887" viewBox="0 0 903 887" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.2262 320.433L114.319 320.792L118.976 335.892L52.0914 336.238L47.2262 320.433Z" fill="#F4A949"></path>
                        <path d="M134.246 320.858L201.343 321.227L205.994 336.318L139.104 336.663L134.246 320.858Z" fill="#1C5F9A"></path>
                        <path d="M97.3566 353.899L164.437 354.261L169.088 369.365L102.209 369.702L97.3566 353.899Z" fill="#1C5F9A"></path>
                        <path d="M221.413 321.768L485.765 322.185L490.419 337.284L226.28 337.562L221.413 321.768Z" fill="#1C5F9A"></path>
                        <path d="M202.902 354.015L638.794 357.201L643.448 372.291L207.775 369.82L202.902 354.015Z" fill="#9C27B0"></path>
                        <path d="M177.996 354.168L194.845 354.651L199.501 369.748L182.857 369.972L177.996 354.168Z" fill="#F4A949"></path><path d="M358.89 389.3L424.034 390.501L428.68 405.6L363.757 405.092L358.89 389.3Z" fill="#F4A949"></path>
                        <path d="M299.752 487.208L316.603 487.687L321.258 502.79L304.619 503.005L299.752 487.208Z" fill="#F4A949"></path>
                        <path d="M326.155 486.923L343.001 487.404L347.649 502.497L331.026 502.73L326.155 486.923Z" fill="#F4A949"></path>
                        <path d="M107.698 387.455L222.122 388.706L226.773 403.81L112.567 403.258L107.698 387.455Z" fill="#1C5F9A"></path>
                        <path d="M335.415 421.264L449.857 422.522L454.508 437.619L340.288 437.071L335.415 421.264Z" fill="#1C5F9A"></path>
                        <path d="M175.659 487.91L290.087 489.164L294.747 504.27L180.515 503.712L175.659 487.91Z" fill="#1C5F9A"></path>
                        <path d="M342.326 520.75L456.777 521.989L461.425 537.08L347.2 536.54L342.326 520.75Z" fill="#1C5F9A"></path>
                        <path d="M208.827 454.265L424.046 456.49L428.701 471.576L213.681 470.068L208.827 454.265Z" fill="#1C5F9A"></path>
                        <path d="M236.887 388.975L351.317 390.227L355.967 405.323L241.747 404.773L236.887 388.975Z" fill="#1C5F9A"></path>
                        <path d="M78.2267 421.127L145.324 421.484L149.974 436.587L83.0959 436.92L78.2267 421.127Z" fill="#F4A949"></path>
                        <path d="M156.512 420.877L317.531 421.363L322.181 436.463L161.364 436.688L156.512 420.877Z" fill="#9C27B0"></path>

                        <path d="M131.938 454.719L199.041 455.071L203.696 470.177L136.815 470.523L131.938 454.719Z" fill="#F4A949"></path>
                        <path d="M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z" fill="#9C27B0"></path>
                        <path d="M275.51 520.95L324.298 521.124L328.953 536.228L280.376 536.745L275.51 520.95Z" fill="#9C27B0"></path>
                        <path d="M109.231 521.806L254.295 520.887L258.947 535.998L114.098 537.606L109.231 521.806Z" fill="#1C5F9A"></path></svg>

                </div>
                <div ref={(el) => (animateref.current[3] = el)} className='absolute hidden overflow-hidden h-[50%] -z-1 lg:flex items-center blur-sm -bottom-10 -right-100 '>
                    <svg width="703" height="887" viewBox="0 0 903 887" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.2262 320.433L114.319 320.792L118.976 335.892L52.0914 336.238L47.2262 320.433Z" fill="#F4A949"></path>
                        <path d="M134.246 320.858L201.343 321.227L205.994 336.318L139.104 336.663L134.246 320.858Z" fill="#1C5F9A"></path>
                        <path d="M97.3566 353.899L164.437 354.261L169.088 369.365L102.209 369.702L97.3566 353.899Z" fill="#1C5F9A"></path>
                        <path d="M221.413 321.768L485.765 322.185L490.419 337.284L226.28 337.562L221.413 321.768Z" fill="#1C5F9A"></path>
                        <path d="M202.902 354.015L638.794 357.201L643.448 372.291L207.775 369.82L202.902 354.015Z" fill="#9C27B0"></path>
                        <path d="M177.996 354.168L194.845 354.651L199.501 369.748L182.857 369.972L177.996 354.168Z" fill="#F4A949"></path><path d="M358.89 389.3L424.034 390.501L428.68 405.6L363.757 405.092L358.89 389.3Z" fill="#F4A949"></path>
                        <path d="M299.752 487.208L316.603 487.687L321.258 502.79L304.619 503.005L299.752 487.208Z" fill="#F4A949"></path>
                        <path d="M326.155 486.923L343.001 487.404L347.649 502.497L331.026 502.73L326.155 486.923Z" fill="#F4A949"></path>
                        <path d="M107.698 387.455L222.122 388.706L226.773 403.81L112.567 403.258L107.698 387.455Z" fill="#1C5F9A"></path>
                        <path d="M335.415 421.264L449.857 422.522L454.508 437.619L340.288 437.071L335.415 421.264Z" fill="#1C5F9A"></path>
                        <path d="M175.659 487.91L290.087 489.164L294.747 504.27L180.515 503.712L175.659 487.91Z" fill="#1C5F9A"></path>
                        <path d="M342.326 520.75L456.777 521.989L461.425 537.08L347.2 536.54L342.326 520.75Z" fill="#1C5F9A"></path>
                        <path d="M208.827 454.265L424.046 456.49L428.701 471.576L213.681 470.068L208.827 454.265Z" fill="#1C5F9A"></path>
                        <path d="M236.887 388.975L351.317 390.227L355.967 405.323L241.747 404.773L236.887 388.975Z" fill="#1C5F9A"></path>
                        <path d="M78.2267 421.127L145.324 421.484L149.974 436.587L83.0959 436.92L78.2267 421.127Z" fill="#F4A949"></path>
                        <path d="M156.512 420.877L317.531 421.363L322.181 436.463L161.364 436.688L156.512 420.877Z" fill="#9C27B0"></path>

                        <path d="M131.938 454.719L199.041 455.071L203.696 470.177L136.815 470.523L131.938 454.719Z" fill="#F4A949"></path>
                        <path d="M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z" fill="#9C27B0"></path>
                        <path d="M275.51 520.95L324.298 521.124L328.953 536.228L280.376 536.745L275.51 520.95Z" fill="#9C27B0"></path>
                        <path d="M109.231 521.806L254.295 520.887L258.947 535.998L114.098 537.606L109.231 521.806Z" fill="#1C5F9A"></path></svg>

                </div>



            </div>


           
            <Slider />
        </>


    )
}

export default Projects

