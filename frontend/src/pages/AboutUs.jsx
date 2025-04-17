import React from 'react';

const AboutUs = () => {
    return (
        <div className="mt-16 px-4 md:px-12 flex justify-center w-full mx-auto bg-background text-text py-16">
            <div className="p-6 md:p-10 rounded-2xl shadow-lg max-w-4xl bg-[#0A0A0A] border border-[#1DFFAB]/30">
                
                {/* Heading with background */}
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-cta/10 p-4 rounded-xl leading-snug">
                    The
                    <span className="bg-cta text-background px-3 rounded-lg mx-2">
                        Cyber Security Club of SNIST
                    </span>
                    is a student-led initiative focused on spreading awareness, knowledge, and passion about cybersecurity.
                </h1>

                {/* Paragraph 1 */}
                <p className="text-base md:text-lg leading-relaxed mb-6 text-center px-2">
                    Our goal is to provide a platform for students to explore the world of ethical hacking, participate in Capture The Flag (CTF) competitions, and stay ahead in the ever-evolving digital battlefield.
                </p>

                {/* Paragraph 2 */}
                <p className="text-base md:text-lg leading-relaxed text-center px-2">
                    We host workshops, internal training sessions, and external competitions to challenge and grow our members' skills. With mentorship, collaboration, and fun at our core, we believe in learning by doing — and sometimes, breaking things (ethically, of course 😉).
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
