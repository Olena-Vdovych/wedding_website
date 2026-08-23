import React, { useState, useEffect } from 'react';

const timerTranslations = {
    ua: { days: 'Днів', hours: 'Годин', minutes: 'Хвилин', seconds: 'Секунд' },
    nl: { days: 'Dagen', hours: 'Uren', minutes: 'Minuten', seconds: 'Seconden' },
    de: { days: 'Tage', hours: 'Stunden', minutes: 'Minuten', seconds: 'Sekunden' }
};

export default function CountdownTimer({ lang = 'ua', targetDate = "2027-07-10T15:00:00" }) {
    const t = timerTranslations[lang] || timerTranslations.ua;

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timerItems = [
        { label: t.days, value: timeLeft.days },
        { label: t.hours, value: timeLeft.hours },
        { label: t.minutes, value: timeLeft.minutes },
        { label: t.seconds, value: timeLeft.seconds }
    ];

    return (
        <div className="py-6 flex justify-center items-center gap-3 md:gap-6">
            {timerItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E6D5BC]/60 flex items-center justify-center shadow-sm">
                        <span className="text-xl md:text-2xl font-serif text-[#C17A63] font-medium">
                            {String(item.value || 0).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#4A3E3D]/70 mt-2">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}