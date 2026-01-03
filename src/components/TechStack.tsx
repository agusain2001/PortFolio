import { motion } from 'framer-motion';
import {
    SiPython, SiTensorflow, SiPandas, SiNumpy,
    SiOpenai, SiFastapi, SiFlask, SiDjango, SiStreamlit, SiJavascript,
    SiNodedotjs, SiPostgresql, SiMysql, SiMongodb,
    SiGooglecloud, SiDocker, SiGit, SiGithub, SiLinux,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbBrandAzure, TbBrandCpp } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { HiChartBar } from 'react-icons/hi';

interface TechItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}

interface TechCategory {
    title: string;
    emoji: string;
    gradient: string;
    items: TechItem[];
}

const techCategories: TechCategory[] = [
    {
        title: 'AI/ML Nebula',
        emoji: '🧠',
        gradient: 'from-solar-orange to-solar-light',
        items: [
            { name: 'Python', icon: SiPython },
            { name: 'TensorFlow', icon: SiTensorflow },
            { name: 'Keras', icon: () => <span className="text-xl sm:text-2xl">🧠</span> },
            { name: 'scikit-learn', icon: () => <span className="text-xl sm:text-2xl">🔬</span> },
            { name: 'Pandas', icon: SiPandas },
            { name: 'NumPy', icon: SiNumpy },
        ],
    },
    {
        title: 'LLM Galaxy',
        emoji: '🦜',
        gradient: 'from-nebula-purple to-nebula-light',
        items: [
            { name: 'LangChain', icon: () => <span className="text-xl sm:text-2xl">🦜</span> },
            { name: 'LangGraph', icon: () => <span className="text-xl sm:text-2xl">🦜</span> },
            { name: 'LlamaIndex', icon: () => <span className="text-xl sm:text-2xl">🦙</span> },
            { name: 'CrewAI', icon: () => <span className="text-xl sm:text-2xl">🚢</span> },
            { name: 'OpenAI', icon: SiOpenai },
            { name: 'Gemini', icon: () => <span className="text-xl sm:text-2xl">✨</span> },
        ],
    },
    {
        title: 'Web Constellation',
        emoji: '🌐',
        gradient: 'from-cosmic-blue to-cosmic-light',
        items: [
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'Flask', icon: SiFlask },
            { name: 'Django', icon: SiDjango },
            { name: 'Streamlit', icon: SiStreamlit },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'Node.js', icon: SiNodedotjs },
        ],
    },
    {
        title: 'Data Star System',
        emoji: '💾',
        gradient: 'from-cosmic-light to-stellar-white',
        items: [
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MySQL', icon: SiMysql },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'AWS', icon: FaAws },
            { name: 'GCP', icon: SiGooglecloud },
            { name: 'Azure', icon: TbBrandAzure },
        ],
    },
    {
        title: 'DevOps Orbital',
        emoji: '🛠️',
        gradient: 'from-solar-light to-solar-orange',
        items: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Git', icon: SiGit },
            { name: 'GitHub', icon: SiGithub },
            { name: 'Linux', icon: SiLinux },
            { name: 'Power BI', icon: HiChartBar },
            { name: 'VS Code', icon: VscCode },
        ],
    },
    {
        title: 'Language Sector',
        emoji: '💻',
        gradient: 'from-nebula-light to-cosmic-light',
        items: [
            { name: 'C++', icon: TbBrandCpp },
            { name: 'C', icon: () => <span className="text-lg sm:text-xl font-bold">C</span> },
            { name: 'Java', icon: FaJava },
            { name: 'Python', icon: SiPython },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function TechStack() {
    return (
        <section id="tech" className="py-16 sm:py-20 lg:py-24 relative">
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
                        <span className="text-gradient">🛸 Tech Universe</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Technologies orbiting in my development solar system
                    </p>
                </motion.div>

                {/* Tech categories */}
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                    {techCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-[var(--text-primary)]">
                                <span className="text-xl sm:text-2xl">{category.emoji}</span>
                                <span className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full bg-gradient-to-b ${category.gradient}`} />
                                {category.title}
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4"
                            >
                                {category.items.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="cosmic-card rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-default group"
                                    >
                                        <div className="text-xl sm:text-2xl lg:text-3xl text-nebula-light transition-transform duration-300 group-hover:scale-110">
                                            <tech.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                                        </div>
                                        <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium text-center">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
