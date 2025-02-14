"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { ref, inView } = useInView({ triggerOnce: false });

    return (
        <div ref={ref} className='w-full bg-[#252641] mt-4 lg:mt-0 pb-8 flex flex-col justify-start items-center'>
            <motion.div
                className='mt-[1.85%] mb-2 flex gap-x-8 2xl:gap-x-4 justify-between items-center'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className='relative'>
                    <span className='font-bold text-white text-[24px] lg:text-[32px] large:text-[40px] tracking-[4%]'>
                        Sports World
                    </span>
                </div>
                <div className='w-[4px] 2xl:h-[72px] h-[64px] bg-[#626381]'></div>
                <div className='flex flex-col  gap-2' >
                    <a href="#home" className='font-bold text-white text-[22px] large:text-[28px] tracking-[4%]'>
                        Home
                    </a>
                    <a href="#product" className='font-bold text-white text-[22px] large:text-[28px] tracking-[4%]'>
                        Product
                    </a>
                     
                </div>
            </motion.div>
            <motion.div
                className='2xl:mt-6 mt-2 px-4 lg:px-0 flex justify-center '
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className='text-[#B2B3CF] text-center px-2 lg:px-2 w-full font-semibold text-[18px] sm:text-[26px] large:text-[34px] tracking-[4%]'>
                Stay Updated on New Arrivals & Special Offers – Subscribe Now!
                </span>
            </motion.div>
            <motion.div
                className='mt-4 lg:w-[31.19%] w-[80%] flex flex-col lg:flex-row justify-between  aspect-[9.983/1]'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className='lg:w-[66.77%] w-full  aspect-[6.66/1] rounded-[80px] border-[2px] border-[#83839A]'>
                    <input type="text" className='w-full h-full focus:outline-none bg-transparent text-[#83839A] tracking-[4%] large:text-[26px] 2xl:text-[20px] pl-4' placeholder='Your Email' />
                </div>
                <button className='lg:w-[29.88%] mt-4 lg:mt-0  aspect-[6/1] lg:aspect-[2.98/1] px-4 bg-[#545AE8] rounded-[60px] backdrop-blur-md'>
                    <span className='text-white xl:text-[22px] large:text-[28px] '>
                        Subscribe
                    </span>
                </button>
            </motion.div>
            <motion.div
                className='text-[#B2B3CF] mt-6 text-[22px] flex flex-col lg:flex-row px-2 sm:px-0 large:text-[26px] tracking-[4%] gap-x-4 flex items-center justify-around'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <span>
                    Careers
                </span>
                <div className='bg-[#626381] hidden lg:flex w-[2px] aspect-[1/6]'></div>
                <span>
                    Privacy Policy
                </span>
                <div className='bg-[#626381] w-[2px] aspect-[1/6]'></div>
                <span>
                    Terms & Conditions
                </span>
            </motion.div>
            <motion.span
                className='text-[#B2B3CF] tracking-[4%] text-[22px] large:text-[26px] mt-8 w-full text-center'
                initial={{ opacity: 0, y: 20 }}


animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                © 2025 Sports World.
            </motion.span>
        </div>
    );
};

export default Footer;