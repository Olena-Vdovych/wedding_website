import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Зону спрацьовування налаштовано на 15% видимості
        rootMargin: "0px 0px -50px 0px", // Легка затримка перед появою для кращого ефекту
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "1200ms", // Тривалість анімації (робить її дуже м'якою)
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Елегантна бохо-крива плавності
        transitionDelay: `${delay}ms`,
      }}
      className={`transform transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100" // Фінальний стан: повністю проявлено і на своєму місці
          : "opacity-0 translate-y-12 scale-95"    // Початковий стан: розчинено, зсунуто вниз і трохи зменшено
      }`}
    >
      {children}
    </div>
  );
}