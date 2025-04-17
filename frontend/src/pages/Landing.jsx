import React, { useState, useEffect } from 'react';
import img from '../assests/img.png';

const TypingEffect = ({ text }) => {
        const [displayedText, setDisplayedText] = useState('');
        const [index, setIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);

        useEffect(() => {
                let timeout;
                if (!isDeleting && index < text.length) {
                        timeout = setTimeout(() => {
                                setDisplayedText((prev) => prev + text[index]);
                                setIndex((prev) => prev + 1);
                        }, 150);
                } else if (isDeleting && index > 0) {
                        timeout = setTimeout(() => {
                                setDisplayedText((prev) => prev.slice(0, -1));
                                setIndex((prev) => prev - 1);
                        }, 100);
                } else if (!isDeleting && index === text.length) {
                        timeout = setTimeout(() => setIsDeleting(true), 1000);
                } else if (isDeleting && index === 0) {
                        setIsDeleting(false);
                }

                return () => clearTimeout(timeout);
        }, [index, isDeleting, text]);

        return (
                <span>
                        {displayedText}
                        <span className="blinking-cursor">|</span>
                </span>
        );
};

const Landing = () => {
        return (
                <div className='bg-background mt-10 md:mt-20 px-4 md:px-12 relative'>
                        {/* <img 
                                src={img} 
                                alt="Landing" 
                                className='w-full md:w-[70%] absolute top-0 right-0 opacity-50 z-0' 
                        /> */}
                        <div className='relative z-10'>
                                <h1 className='text-2xl md:text-4xl text-text font-jetbrains mb-6 md:mb-12'>
                                        Welcome to the <span className='text-cta'>
                                                <TypingEffect text="CYBER SECURITY CLUB" />
                                        </span> <br />
                                        the home of all things cybersecurity at 
                                        <span className='text-cta'> SNIST</span>
                                </h1>
                                <p className='text-base md:text-lg text-text font-spacemono mb-6 md:mb-12 w-full md:w-[80%]'>
                                        We’re a community of curious minds who love to explore ethical hacking, digital forensics, web security, malware analysis, and everything in between. Whether you're a beginner or a seasoned cyber warrior, there’s a place for you here.
                                </p>
                                <h3 className='text-xl md:text-2xl text-cta font-spacemono'>
                                        Learn.  Explore.  Break.  Build.
                                </h3>
                                
                                <div className="cta flex flex-col md:flex-row items-center gap-4 md:gap-8">
                                        <a href="/signup" className='bg-cta text-background font-jetbrains text-base md:text-lg px-5 md:px-7 py-2 rounded-2xl mt-4 md:mt-8'>
                                                Join Us
                                        </a>
                                        <a href='/login' className='bg-background text-cta font-jetbrains text-base md:text-lg px-6 md:px-8 py-2 rounded-2xl mt-4 md:mt-8 border-cta border-2'>
                                                Login
                                        </a>
                                </div>
                        </div>
                </div>
        );
};

export default Landing;
