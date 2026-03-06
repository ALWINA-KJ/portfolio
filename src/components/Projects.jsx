import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-4 max-w-6xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Project.</span>
                    </h2>
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
                </div>

                {/* SINGLE FLAGSHIP SHOWCASE */}
                <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]"
                >
                    {/* Subtle background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center relative z-10">

                        {/* Left Side: Text & Tech Stack */}
                        <div>
                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["React", "Flutter", "Firebase", "Maps API"].map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-semibold tracking-wider uppercase border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-cyan-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white group-hover:text-cyan-300 transition-colors">
                                College Bus Tracking System
                            </h3>

                            <p className="text-secondary leading-relaxed text-lg mb-10">
                                A real-time transit application engineered to optimize college navigation. Architected with cross-platform capabilities, integrating live mapping APIs and a real-time backend database to seamlessly sync location data for students.
                            </p>

                            {/* Modern Action Button - NOW LINKED TO YOUR GITHUB */}
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://github.com/Shinoyshino3/COLLEGE-BUS-TRACKING"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white transition-all duration-300 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300"
                                >
                                    View Repository
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Visual/Screenshot Area */}
                        <div className="w-full aspect-video md:aspect-square lg:aspect-video rounded-2xl bg-gradient-to-tr from-surface to-[#0b1120] border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/20 transition-colors shadow-inner">

                            {/* Decorative grid pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            <div className="text-center z-10">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mx-auto mb-4 group-hover:bg-cyan-500/10 transition-colors relative">
                                    {/* Pulsing radar effect */}
                                    <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping absolute opacity-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-cyan-400 relative"></div>
                                </div>
                                <span className="text-secondary/60 text-sm font-mono uppercase tracking-widest">Map UI Placeholder</span>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Projects;