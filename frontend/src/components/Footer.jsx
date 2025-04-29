import React from "react";
import { FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        { name: "Instagram", url: "https://www.instagram.com/csc_snist/", icon: <FaInstagram /> },
        { name: "Discord", url: "https://discord.gg/c7XPYhv9", icon: <FaDiscord /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/cyber-security-club-48933a309/", icon: <FaLinkedin /> },
    ];

    return (
        <footer className="bg-background text-text py-6">
            <div className="w-full h-[1px] bg-gray-400 mb-6"></div>
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="text-2xl font-jetbrains font-bold mb-4">csc</div>
                <ul className="flex space-x-6 mb-4">
                    {socialLinks.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cta transition-colors duration-300 flex items-center space-x-2"
                            >
                                <span className="text-2xl">{social.icon}</span>
                                <span>{social.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-sm font-spacemono text-center">
                    © {new Date().getFullYear()} CSC SNIST. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
