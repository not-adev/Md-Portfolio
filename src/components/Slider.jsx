import { useEffect, useRef ,useState} from "react"
import React from 'react'

const Slider = () => {
    const slide_container = useRef(null)
    const [hoverd, setHoverd] = useState(false)
    const slides = 3
    const index = useRef(0);

    useEffect(() => {
       let slidemove = setInterval(() => {
            if (hoverd) {
                clearInterval(slidemove)
            }
            else {
                showSlide(index.current + 1)
            }

        }, 3000);

        return () => {
            clearInterval(slidemove)
        }


    
    
    }, [hoverd])
    

    function mouseEnterHandle() {
        setHoverd(true)
    }
    function mouseLeaveHandle() {
        setHoverd(false)
    }




    function showSlide(i) {

        index.current = (i + slides) % slides;
        let percentage = 100 / slides
        

        slide_container.current.style.transform = `translateX(-${index.current * percentage}%)`;
        slide_container.current.style.transform = `trans`
    }

    function nextSlide() { showSlide(index.current + 1); }
    function prevSlide() { showSlide(index.current - 1); }

    return (
       <div className='w-[100%] projects bg-transparent py-5 overflow-hidden flex flex-col items-center justify-center px-5 h-auto relative m-auto'>



                <div ref={slide_container}  className=' h-auto flex gap-4 items-center transition-transform duration-700 ease-initial  justify-center transform  w-[300%]  m-auto '>

                    <div className={`w-[33%] slide flex flex-col items-center justify-center`}>
                        <div onMouseLeave={mouseLeaveHandle} onMouseEnter={mouseEnterHandle} className='rounded-2xl relative md:w-[577px] w-full border bg-[url(Netflix.png)] group bg-no-repeat bg-contain bg-center flex flex-col justify-end h-[350px]'>
                            <button className="absolute top-2 right-3 border px-3 py-1.5 hidden group-hover:block rounded-lg border-purple-600 shadow-purple-600 hover:cursor-pointer hover:bg-purple-700 hover:border-white">
                                <a href="https://not-adev.github.io/netflix-clone/">Link</a>
                            </button>
                            <div className='bg-[white] text-black p-2 border-t text-sm rounded-b-2xl h-0 text-center transition-all duration-1000 opacity-0 group-hover:h-[150px] group-hover:opacity-100 overflow-hidden '>
                                A sleek, modern web experience crafted with precision—no JavaScript, no frameworks, just pure HTML & CSS. This project embodies the power of styling, layout mastery, and creative UI elements, proving that simplicity can be stunning. Dsigned to enhance user experience without compromising performance.
                            </div>
                        </div>
                    </div>

                    <div className='w-[33%] slide flex text-white   items-center justify-center'>

                        <div onMouseLeave={mouseLeaveHandle} onMouseEnter={mouseEnterHandle} className='relative rounded-2xl border bg-[url(spomtfy.png)] md:w-[577px] w-full group bg-no-repeat bg-contain bg-center flex flex-col  justify-end h-[350px]'>
                             <button className="absolute top-2 right-3 border px-3 py-1.5 hidden group-hover:block rounded-lg border-purple-600 shadow-purple-600 hover:cursor-pointer hover:bg-purple-700 hover:border-white">
                                <a target="_blank" href="https://not-adev.github.io/spomtify/">Link</a>
                            </button>
                            <div className='bg-[white] text-black p-2 border-t text-sm rounded-b-2xl h-0 text-center transition-all duration-1000 opacity-0 group-hover:h-[150px] group-hover:opacity-100 overflow-hidden '>
                                Developed a dynamic music streaming web application using React and Tailwind CSS, enabling seamless search functionality and playback control. Integrated intuitive music flow management, allowing users to navigate tracks efficiently. Designed a responsive UI with Tailwind for an optimized listening experience across devices, ensuring smooth interaction and fast performance.
                            </div>
                        </div>

                    </div>


                    <div className='w-[33%]  slide flex flex-col items-center justify-center'>
                        <div onMouseLeave={mouseLeaveHandle} onMouseEnter={mouseEnterHandle} className=' relative rounded-2xl border bg-[url(pokemon-game.png)] md:w-[577px] w-full  group bg-no-repeat bg-contain bg-center flex flex-col  justify-end h-[350px] '>
                             <button className="absolute top-2 right-3 border px-3 py-1.5 hidden group-hover:block rounded-lg border-purple-600 shadow-purple-600 hover:cursor-pointer hover:bg-purple-700 hover:border-white">
                                <a href="#">Link</a>
                            </button>
                            <div className='bg-[white] text-black border-t p-2 text-sm rounded-b-2xl h-0 text-center transition-all duration-1000 opacity-0 group-hover:h-[150px] group-hover:opacity-100 overflow-hidden '>
                                Developed a dynamic music streaming web application using React and Tailwind CSS, enabling seamless search functionality and playback control. Integrated intuitive music flow management, allowing users to navigate tracks efficiently. Designed a responsive UI with Tailwind for an optimized listening experience across devices, ensuring smooth interaction and fast performance.
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex gap-5 pt-5'>
                    <button onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
                    </button>

                    <button className='' onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                    </button>

                </div>
            </div>
    )
}

export default Slider