import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-4 max-w-4xl mx-auto text-center border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-4">What's Next?</p>

                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch.</span>
                </h2>

                <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                    I am currently open to new opportunities, internships, and collaborative projects. Whether you have a question about my tracking system or just want to say hi, my inbox is always open!
                </p>

                {/* The glowing email button linked to alwinakj111@gmail.com */}
                <a
                    href="mailto:alwinakj111@gmail.com"
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase text-white transition-all duration-300 bg-white/5 px-10 py-5 rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-24"
                >
                    Say Hello
                </a>

                {/* Modern Minimalist Footer */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-secondary text-sm font-light">
                        © {new Date().getFullYear()} Designed & Built by Alwina K J.
                    </p>

                    <div className="flex items-center gap-8">
                        <a
                            href="https://github.com/ALWINA-KJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-cyan-400 transition-colors text-sm font-semibold tracking-widest uppercase"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alwina-k-j-23690b316"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-cyan-400 transition-colors text-sm font-semibold tracking-widest uppercase"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Contact;