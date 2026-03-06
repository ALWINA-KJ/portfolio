import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden">

            {/* Subtle background glow replacing heavy colors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

            <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center z-10"
            >
                {/* Modern Availability Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-medium uppercase tracking-widest mb-8 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Building intelligent systems
                </div>

                {/* Stark, massive typography with a subtle gradient fade */}
                <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30">
                    Alwina K J.
                </h1>

                <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto font-light tracking-wide mb-10">
                    Software Engineering. Artificial Intelligence. Web Experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                        Explore Work
                    </a>
                    <a href="#contact" className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/20 hover:bg-white/5 transition-colors duration-300">
                        Get in touch
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;