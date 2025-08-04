import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    // const interval = setInterval(() => {
    //   setDisplayedText((prev) => prev + text[i]);
    //   i++;
    //   if (i >= text.length) clearInterval(interval);
    // }, speed);
    // const interval = setInterval(() => {
    //   if (i < text.length) {
    //     setDisplayedText((prev) => prev + text[i]);
    //     i++;
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, speed);
    const interval = setInterval(() => {
      const nextChar = text.charAt(i);
      if (nextChar) {
        setDisplayedText((prev) => prev + nextChar);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4 '>
        <motion.div
         initial={{scale: 0}}
         whileInView={{scale: 1}}
         transition={{duration : 0.8, type : 'spring' ,stiffness : 100}}
        >
            <Image src={assets.ccrohan} alt='' className='rounded-full w-32' />
        </motion.div>

         {/* <motion.h3 
          //  initial={{y : -20, opacity :0}}
          //  whileInView={{y:0 , opacity: 1}}
          //  transition={{duration : 0.8, delay :0.5}}
         animate={{
                scale: 2,
                transition: { duration: 2 }
                }}
                 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hii I am Rohan Tagadghar <Image src={assets.hand_icon} alt='' className='w-6' /></motion.h3> */}
       <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        <TypewriterText text="Hii I am Rohan Tagadghar" speed={80} />
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>
       
       <motion.h1
         initial={{y : -30, opacity :0}}
         whileInView={{y:0 , opacity: 1}}
         transition={{duration : 0.6, delay :0.3}}
       className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        frontend web developer based in India</motion.h1>  

        <motion.p 
        initial={{ opacity :0}}
         whileInView={{ opacity: 1}}
         transition={{duration : 0.6, delay :0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
            I am a frontend developer from karnataka,India with no experience in multiple companies like Microsoft ,Tesla and Apple.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
            initial={{y : 30, opacity :0}}
         whileInView={{y:0 , opacity: 1}}
         transition={{duration : 0.6, delay :1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2 dark:bg-transparent'
            >Contact me <Image src={assets.right_arrow_white} alt='' className='rounded-full w-4'/></motion.a> 

            <motion.a
               initial={{y : 30, opacity :0}}
         whileInView={{y:0 , opacity: 1}}
         transition={{duration : 0.6, delay :1.2}}
            href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border=gray-500 flex
            items-center gap-2 bg-white dark:text-black'>My Resume <Image src={assets.download_icon} alt='' className='rounded-full w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header