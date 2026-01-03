import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

export function useTypewriter({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
}: TypewriterOptions) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const tick = useCallback(() => {
        const currentText = texts[currentIndex];

        if (isPaused) {
            return;
        }

        if (!isDeleting) {
            // Typing
            if (displayText.length < currentText.length) {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            } else {
                // Finished typing, pause then delete
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                setDisplayText(currentText.slice(0, displayText.length - 1));
            } else {
                // Finished deleting, move to next text
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [texts, currentIndex, displayText, isDeleting, isPaused, pauseTime]);

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, typingSpeed, deletingSpeed]);

    return { displayText, isDeleting };
}
