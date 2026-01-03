import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { HiAcademicCap, HiCode, HiLightningBolt, HiLocationMarker, HiTrendingUp, HiSparkles } from 'react-icons/hi';

interface StatCounterProps {
    end: number;
    suffix?: string;
    label: string;
    duration?: number;
}

function StatCounter({ end, suffix = '', label, duration = 2 }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTime: number;
                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                        setCount(Math.floor(progress * end));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                {count}{suffix}
            </div>
            <div className="text-[var(--text-muted)] text-xs sm:text-sm">{label}</div>
        </div>
    );
}

const highlights = [
    { icon: HiAcademicCap, text: "Master's in Computer Applications", subtext: 'G.B. Pant University • CGPA: 7.2' },
    { icon: HiCode, text: 'Junior Gen AI Engineer', subtext: 'Specializing in AI Agents & LLMs' },
    { icon: HiLightningBolt, text: 'LangChain & LangGraph Expert', subtext: 'Multi-Agent Systems & RAG' },
    { icon: HiTrendingUp, text: '30% Performance Improvement', subtext: 'ETL Pipelines & Data Processing' },
    { icon: HiSparkles, text: 'Currently Exploring', subtext: 'Fine-tuning LLMs & RAG Systems' },
    { icon: HiLocationMarker, text: 'Kotdwara, Uttarakhand', subtext: 'India 🇮🇳' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
            <div className="container mx-auto px-4">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                        <span className="text-gradient">🌟 Mission Profile</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Charting a course through the AI cosmos
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Bio card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cosmic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 aurora-border">
                            <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-4 sm:mb-6">
                                Greetings, explorer! 👋 I'm <span className="text-nebula-light font-semibold">Ashish</span>,
                                an AI Engineer navigating the vast universe of artificial intelligence from my base in Kotdwara, India.
                            </p>
                            <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-4 sm:mb-6">
                                My mission involves charting new territories in
                                <span className="text-cosmic-light font-semibold"> LangChain</span>,
                                <span className="text-nebula-light font-semibold"> LangGraph</span>, and
                                <span className="text-solar-orange font-semibold"> Multi-Agent Systems</span> —
                                creating AI constellations that automate workflows.
                            </p>
                            <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed">
                                When not training neural networks, I explore the frontiers of LLMs and RAG systems.
                                Ready to launch something stellar together! 🚀
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
                            <div className="cosmic-card rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5">
                                <StatCounter end={7.2} label="CGPA" />
                            </div>
                            <div className="cosmic-card rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5">
                                <StatCounter end={30} suffix="%" label="Speed Boost" />
                            </div>
                            <div className="cosmic-card rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5">
                                <StatCounter end={4} suffix="+" label="Missions" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlights grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-3 sm:gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="cosmic-card rounded-xl sm:rounded-2xl p-4 sm:p-5 hover-lift cursor-default group"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-nebula-purple/20 rounded-lg sm:rounded-xl group-hover:bg-nebula-purple/30 transition-colors shrink-0">
                                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-nebula-light" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-[var(--text-primary)] mb-1 text-sm sm:text-base">{item.text}</h3>
                                        <p className="text-xs sm:text-sm text-[var(--text-muted)]">{item.subtext}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
