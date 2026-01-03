import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef } from 'react';

interface Project {
    title: string;
    emoji: string;
    description: string;
    techStack: string[];
    github: string;
    demo?: string;
    gradient: string;
}

const projects: Project[] = [
    {
        title: 'ConnectAI - Multi-Platform Agent',
        emoji: '🛸',
        description: 'Interstellar AI agent bridging Slack, Google Drive, Meet, and Telegram. Automates cosmic workflows across the digital universe.',
        techStack: ['Python', 'LangGraph', 'LangChain', 'MCP'],
        github: 'https://github.com/agusain2001/connectai',
        gradient: 'from-nebula-purple to-cosmic-blue',
    },
    {
        title: 'Real Estate Price Predictor',
        emoji: '🏠',
        description: 'ML-powered orbital station forecasting property trajectories with intelligent recommendations.',
        techStack: ['Streamlit', 'scikit-learn', 'Pandas'],
        github: 'https://github.com/agusain2001/real-estate-prediction',
        gradient: 'from-cosmic-blue to-cosmic-light',
    },
    {
        title: 'VANET Collision Detection',
        emoji: '🚗',
        description: 'Real-time cosmic traffic analysis using YOLO vision systems for collision avoidance.',
        techStack: ['Python', 'YOLO', 'Computer Vision'],
        github: 'https://github.com/agusain2001/vanet-project',
        gradient: 'from-solar-orange to-solar-light',
    },
    {
        title: 'Virtual Manager',
        emoji: '🤖',
        description: 'Autonomous AI companion automating tasks and orchestrating workflows.',
        techStack: ['Python', 'AI', 'Automation'],
        github: 'https://github.com/agusain2001/Virtual-manager',
        gradient: 'from-nebula-light to-nebula-purple',
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative group"
        >
            <div className="cosmic-card rounded-2xl sm:rounded-3xl overflow-hidden h-full aurora-border" style={{ transformStyle: 'preserve-3d' }}>
                {/* Gradient header */}
                <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-4 sm:p-5 lg:p-7">
                    {/* Emoji and title */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="text-2xl sm:text-3xl lg:text-4xl" style={{ transform: 'translateZ(40px)' }}>{project.emoji}</span>
                        <h3
                            className="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-nebula-light transition-colors"
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            {project.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p
                        className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed"
                        style={{ transform: 'translateZ(20px)' }}
                    >
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6" style={{ transform: 'translateZ(25px)' }}>
                        {project.techStack.map((tech) => (
                            <span key={tech} className="tech-badge text-xs">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 sm:gap-4" style={{ transform: 'translateZ(35px)' }}>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 cosmic-glass rounded-lg sm:rounded-xl text-[var(--text-primary)] transition-all duration-300 text-sm"
                        >
                            <FaGithub className="w-4 h-4" />
                            <span className="font-medium">Code</span>
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-nebula-purple to-cosmic-blue rounded-lg sm:rounded-xl text-white text-sm font-medium"
                            >
                                <FaExternalLinkAlt className="w-3 h-3" />
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
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
                        <span className="text-gradient">🚀 Space Missions</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Expeditions into AI, Machine Learning, and the Software Cosmos
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8" style={{ perspective: '1000px' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
