import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import git from '../assets/github.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto
    grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br /> Tech <br /> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt="" />
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt="" />
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt="" />
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="" />
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="" />
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={python} alt="" />
            <p className='mt-2'>Python</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={php} alt="" />
            <p className='mt-2'>PHP</p>
        </div>

        
      
    </div>
  )
}

export default Skills
