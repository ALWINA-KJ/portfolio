import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // This function tracks the exact X and Y coordinates of the mouse
        const updateMousePosition = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <>
            {/* The trailing glowing ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-cyan-400/50 bg-cyan-400/10 rounded-full pointer-events-none z-[9998] hidden md:block"
                animate={{
                    x: mousePosition.x - 20, // Subtract half the width to perfectly center it
                    y: mousePosition.y - 20,
                }}
                // The spring transition gives it that buttery smooth delay effect
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />

            {/* The solid dot exactly on the cursor */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(6,182,212,0.8)] hidden md:block"
                animate={{
                    x: mousePosition.x - 4, // Subtract half the width to center it
                    y: mousePosition.y - 4,
                }}
                transition={{ type: "tween", duration: 0 }} // Instant movement, no delay
            />
        </>
    );
};

export default CustomCursor;