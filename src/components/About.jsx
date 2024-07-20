import React from 'react'
import about_img from '../assets/about_img.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16 mt-20'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'> About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am a driven Frontend Developer with a Bachelor's degree 
                    in Computer Science from Batangas State University, graduated 
                    as Cum Laude. My expertise lies in crafting intuitive and visually 
                    appealing web interfaces using modern technologies like React. I am
                     passionate about continuously learning and staying updated with industry
                      trends to deliver cutting-edge solutions. With a keen eye for design and 
                      a strong technical foundation, I aim to create seamless digital experiences
                       that captivate users and meet business goals.
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={about_img} alt="" width={300} height={300} />
        </div>
      
    </div>
  )
}

export default About
