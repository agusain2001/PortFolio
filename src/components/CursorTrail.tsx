import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Trail {
    id: number;
    x: number;
    y: number;
}

export default function CursorTrail() {
    const [trails, setTrails] = useState<Trail[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let trailId = 0;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            // Add new trail particle
            const newTrail: Trail = {
                id: trailId++,
                x: e.clientX,
                y: e.clientY,
            };

            setTrails(prev => [...prev.slice(-15), newTrail]); // Keep last 15 trails
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Remove old trails
    useEffect(() => {
        const interval = setInterval(() => {
            setTrails(prev => prev.slice(1));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Custom cursor */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            >
                <div className="w-5 h-5 rounded-full border-2 border-nebula-light" />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                animate={{ x: mousePos.x - 3, y: mousePos.y - 3 }}
                transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-stellar-white" />
            </motion.div>

            {/* Trail particles */}
            {trails.map((trail, index) => (
                <motion.div
                    key={trail.id}
                    className="fixed pointer-events-none z-[9998]"
                    initial={{ opacity: 0.8, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ left: trail.x - 4, top: trail.y - 4 }}
                >
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            background: `rgba(139, 92, 246, ${0.5 - index * 0.03})`,
                            boxShadow: `0 0 ${8 - index * 0.5}px rgba(139, 92, 246, 0.5)`
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
}
