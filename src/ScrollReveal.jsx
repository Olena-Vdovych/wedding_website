import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            // Зменшуємо поріг до 0.05, щоб анімація починалася трохи раніше 
            // і гість не бачив порожнього екрана під час скролу
            threshold: 0.05
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-[0.97]'
                }`}
        >
            {children}
        </div>
    );
}