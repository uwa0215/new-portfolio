import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='bg-black text-gray-400 h-[100px] fixed top-0 left-0 w-full mx-auto flex flex-col md:flex-row items-center z-20'>
            {/* Navbar container */}
            <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-4'>
                {/* Logo */}
                <h1 className='text-3xl font-bold primary-color'>Josh M.</h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex flex-1 justify-center cursor-pointer'>
                    <li className='p-5 hover:text-yellow-200 hover:font-bold'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='p-5 hover:text-yellow-200 hover:font-bold'>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='p-5 hover:text-yellow-200 hover:font-bold'>
                        <Link to="work" smooth={true} duration={500}>Work</Link>
                    </li>
                    <li className='p-5 hover:text-yellow-200 hover:font-bold'>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div onClick={handleNav} className='block md:hidden mr-6 cursor-pointer'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-10' : 'fixed left-[-100%] z-10'}>
                <div className='relative'>
                    <AiOutlineClose size={20} className='cursor-pointer absolute top-4 right-4' onClick={handleNav} />
                    <h1 className='text-3xl font-bold primary-color m-4'>Josh</h1>
                    <ul className='p-8 text-2xl flex flex-col items-center'>
                        <li className='p-2'>
                            <Link to="home" smooth={true} duration={500} onClick={handleNav}>Home</Link>
                        </li>
                        <li className='p-2'>
                            <Link to="about" smooth={true} duration={500} onClick={handleNav}>About</Link>
                        </li>
                        <li className='p-2'>
                            <Link to="work" smooth={true} duration={500} onClick={handleNav}>Work</Link>
                        </li>
                        <li className='p-2'>
                            <Link to="contact" smooth={true} duration={500} onClick={handleNav}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
