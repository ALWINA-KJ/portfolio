import { motion } from 'framer-motion';

const About = () => {
    // A quick list of your tech stack that we can map over
    const skills = [
        "React", "Python", "Flutter", "Machine Learning", "JavaScript", "Linux Environments"
    ];

    return (
        <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 border-b border-surface pb-4 inline-block">
                    About Me<span className="text-accent">.</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="text-secondary leading-relaxed space-y-4 text-lg">
                        <p>
                            I am currently in my 3rd year (S6) pursuing a B.Tech in Computer Science and Engineering with a specialization in AI.
                        </p>
                        <p>
                            My passion lies at the intersection of intelligent systems and modern user interfaces. Whether I am building full-stack applications, experimenting with machine learning models, or exploring the depths of custom Android and Linux environments, I love bridging the gap between complex logic and clean design.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-4">Recent Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-surface text-primary rounded-md text-sm border border-surface hover:border-accent transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;