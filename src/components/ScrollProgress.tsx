import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollAnimation';

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-[var(--bg-secondary)]/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-nebula-purple via-cosmic-blue to-solar-orange"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
            />
        </motion.div>
    );
}
