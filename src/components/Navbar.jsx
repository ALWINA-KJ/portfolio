import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    // This hook listens to your scroll position and updates the active link
    useEffect(() => {
        const handleScroll = () => {
            // The IDs of all your sections
            const sections = ['home', 'about', 'projects', 'contact'];
            let currentSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    // Check if the top of the section has reached near the top of the viewport
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger it once on load to set the initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 font-extrabold text-2xl tracking-widest text-primary">
                        ALWINA<span className="text-cyan-500">.</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => {
                                const sectionId = item.toLowerCase();
                                const isActive = activeSection === sectionId;

                                return (
                                    <a
                                        key={item}
                                        href={`#${sectionId}`}
                                        className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-secondary hover:text-white'
                                            }`}
                                    >
                                        {item}

                                        {/* The gliding animated underline */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full"
                                                // This spring transition makes it glide smoothly
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;