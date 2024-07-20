import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hero_img from '../assets/hero_image.png';
import cvFile from '../assets/MACASADIA_CV.pdf'; // Make sure you have your CV file in this location

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 
    max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black' id='home'>
        
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[300px] mt-[-80px]'>
        <div>
          <img src={hero_img} alt="" />
        </div>
      </div>

      <div className='col-span-2 px-5 my-auto'>

        <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'> 
          <span className='primary-color'>
            I'm a
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web Designer",
              1000,
              "Software Engineer",
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'>
          Hi, I'm Joshua Macasadia, an aspiring Frontend Developer passionate about 
          creating seamless and engaging user experiences with innovative web solutions.
        </p>

        <div>
          <a 
            href={cvFile} 
            download="Joshua_Macasadia_CV.pdf"
            className='font-bold px-6 py-3 w-full rounded-xl mr-4
            bg-gradient-to-br from-orange-500 to-pink-500 text-white'
          >
            Download CV
          </a>

          <a href="#contact" className='font-bold px-6 py-3 w-full rounded-xl 
            border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
            text-white hover:border-none'>
            Contact
          </a>
        </div>

      </div>

    </div>
  );
}

export default Hero;
