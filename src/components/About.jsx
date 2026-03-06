import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skillCategories = [
        {
            title: "Languages",
            items: ["Python", "JavaScript", "C / C++", "Dart"]
        },
        {
            title: "AI & Data",
            items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
            title: "Frameworks & Tools",
            items: ["React", "Flutter", "Firebase", "Linux / Ubuntu"]
        }
    ];

    return (
        <>
            <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-16 items-center"
                >
                    {/* LEFT COLUMN: Floating Photo & Education Card */}
                    <div className="flex flex-col items-center md:items-start space-y-8">

                        {/* Interactive Photo with Glow Effect */}
                        <motion.div
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-3xl p-1 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] cursor-pointer transition-all duration-300 hover:shadow-[0_0_60px_rgba(6,182,212,0.3)]"
                        >
                            <div className="w-full h-full rounded-[22px] overflow-hidden bg-surface relative">
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                    <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium border border-white/20">View Photo</span>
                                </div>

                                <img
                                    src={profilePhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover object-center relative z-0"
                                />
                            </div>
                        </motion.div>

                        {/* Glassmorphism Education Card */}
                        <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-accent font-semibold tracking-wide mb-3 text-sm uppercase">Education</h3>
                            <div className="space-y-1">
                                <p className="text-white font-bold text-lg">B.Tech CSE <span className="text-secondary font-normal">(AI)</span></p>
                                <p className="text-secondary text-sm font-medium">3rd Year (S6) Student</p>
                                <div className="mt-3 pt-3 border-t border-white/10">
                                    <p className="text-secondary text-xs leading-relaxed">Focus: Machine Learning, Data Structures, Operating Systems</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Gradient Text & Glass Skill Cards */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">intelligent systems.</span>
                        </h2>

                        <div className="text-secondary leading-relaxed space-y-4 text-lg font-light mb-10">
                            <p>
                                I am a software engineering student specializing in Artificial Intelligence. My focus is on creating systems that bridge the gap between complex machine learning logic and seamless, cross-platform user experiences.
                            </p>
                            <p>
                                Rather than just running notebook models, I enjoy architecting complete applications—from mapping APIs and backend databases to the final user interface.
                            </p>
                        </div>

                        {/* Modern Grid for Skills */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -3 }}
                                    className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-colors"
                                >
                                    <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="text-secondary text-sm flex items-center gap-2">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* FULL SCREEN IMAGE MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 cursor-pointer"
                    >
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={profilePhoto}
                            alt="Full Size Profile"
                            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            className="absolute top-6 right-8 text-white/50 hover:text-white text-5xl font-light transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default About;