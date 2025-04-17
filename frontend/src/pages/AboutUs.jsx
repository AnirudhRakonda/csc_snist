import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-background mt-40 md:mt-60 px-4 md:px-12 flex justify-center w-[90%]">
            <div className="bg-cta bg-opacity-30 backdrop-filter backdrop-blur-md p-6 md:p-10 rounded-lg shadow-lg max-w-4xl">
                <h1 className="text-2xl md:text-3xl font-bold leading-7 mb-6">
                    The {' '}
                    <span className="bg-cta text-background px-2 rounded">
                    Cyber Security Club of SNIST
                    </span>{' '}
                    is a student-led initiative focused on spreading awareness, knowledge, and passion about cybersecurity.
                </h1>
                <p className="text-base md:text-lg leading-loose mb-4">
                    Our goal is to provide a platform for students to explore the world of ethical hacking, participate in Capture The Flag (CTF) competitions, and stay ahead in the ever-evolving digital battlefield.
                </p>
                <p className="text-base md:text-lg leading-loose">
                    We host workshops, internal training sessions, and external competitions to challenge and grow our members' skills. With mentorship, collaboration, and fun at our core, we believe in learning by doing — and sometimes, breaking things (ethically, of course 😉).
                </p>
            </div>
        </div>
    );
};

export default AboutUs;