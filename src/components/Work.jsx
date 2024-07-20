import React from 'react'
import lemon from '../assets/lemon.png'
import tour from '../assets/tour.png'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8 mt-20'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center h-[200px] bg-cover relative'>
                    <img src={lemon} alt=""/>
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0
                    flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='pt-8 text-center'>
                            <a href="https://lemon-restauran.vercel.app/n">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 
                                 bg-white text-gray-700 font-bold'>
                                    Live View
                                 </button>
                            </a>
                        </div>

                    </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center h-[200px] bg-cover relative'>
                    <img src={tour} alt=""/>
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0
                    flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='pt-8 text-center'>
                            <a href="https://travel-jcm.netlify.app/">
                                 <button className='text-center rounded-lg px-4 py-3 m-2 
                                 bg-white text-gray-700 font-bold'>
                                    Live View
                                 </button>
                            </a>
                        </div>

                    </div>

            </div>
        </div>
      
    </div>
  )
}

export default Work
