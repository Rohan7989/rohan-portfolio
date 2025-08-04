"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
//import './globals.css'

const Navbar = ({isDarkMode , setIsDarkMode}) => {
    
    // side menu button and closing transformation
    const sideMenuRef =useRef();
    const openMenu = ()=>{
        
        sideMenuRef.current.style.transform ='translatex(-16rem)'
    }

    const closeMenu = ()=>{
        
        sideMenuRef.current.style.transform ='translatex(16rem)'
    }



    return (
    <>
     <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
       <Image src={assets.header_bg_color} alt=''   className='w-full' />
    </div> 

    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
       bg-white bg-opacity-50 shadow-sm backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20'>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt=""  className='w-28 cursor-pointer mr-14'  /> 
        </a>

        {/*__________----desktop menu----___________ */}
        <ul className=' hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
        px-12 py-3 bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent '>
            
            <li> <a className='font-Ovo' href="#top">Home</a></li>
            <li> <a className='font-Ovo' href="#about">about</a></li>
            <li> <a className='font-Ovo' href="#services">services</a></li>
            <li> <a className='font-Ovo' href="#work">work</a></li>
            <li> <a className='font-Ovo' href="#contact">contact me</a></li>
        </ul>

        <div className='flex items-center gap-4 '>

            <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt=''  className="w-6" />
            </button>

            <a href="#contact" className='hidden  lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact
             <Image src={isDarkMode ? assets.arrow_icon_dark :assets.arrow_icon} alt=""  className='w-3'  /></a>
            
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white: assets.menu_black} alt=''  className='w-6' />
            </button>
        </div>

        {/* _____----mobile menu----_____ */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64
         z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white: assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>

            <li> <a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#about">about</a></li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#services">services</a></li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#work">work</a></li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#contact">contact me</a></li>
        </ul>

    </nav>
    </>
  )
};

export default Navbar
 

    //<div className='absolute top-0 left-0 w-full h-[300px]  -z-10 overflow-hidden'>
       // <Image src="/assets/header_bg_color.png" alt="Header Background" fill className='w-full' />
   // </div>