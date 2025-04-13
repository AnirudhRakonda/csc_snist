import React from 'react'

const Landing = () => {
    return (
        <div className='bg-background mt-20 md:mt-40 px-4 md:px-12'>
                <h1 className='text-2xl md:text-4xl text-text font-jetbrains mb-6 md:mb-12'>
                        Welcome to the <span className='text-cta'>CYBER SECURITY CLUB</span> <br />
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
             <button className='bg-cta text-background font-jetbrains text-base md:text-lg px-5 md:px-7 py-2 rounded-2xl mt-4 md:mt-8'>
                        Join Us
                </button>
                <button className='bg-background text-cta font-jetbrains text-base md:text-lg px-6 md:px-8 py-2 rounded-2xl mt-4 md:mt-8 border-cta border-2'>
                        Login
                </button>
             </div>
        </div>
    )
}

export default Landing
