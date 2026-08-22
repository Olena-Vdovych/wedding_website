import React from "react";
import { Mail } from "lucide-react";

function MailScreen({ onOpen, lang }) {
    // Переклади суто для екрана з конвертом
    const text = {
    ua: {
        title: "Тобі надійшов лист",
        subtitle: "Натисни на конверт, щоб відкрити його"
    },
    nl: {
        title: "Je hebt een uitnodiging",
        subtitle: "Klik op de enveloppe om hem te openen"
    },
    de: {
        title: "Du hast Post bekommen",
        subtitle: "Klicke auf den Umschlag, um ihn zu öffnen"
    }
};

    return (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FAF7F2] p-4 animate-fade-in">
            {/* Конверт у стилі Boho */}
            <div
                onClick={onOpen}
                className="cursor-pointer transform hover:scale-102 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center bg-white p-8 md:p-12 rounded-2xl shadow-md border border-[#E6D5BC]/60 text-center max-w-sm w-full relative overflow-hidden group"
            >
                {/* Декоративна лінія в колір Terracotta */}
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#C17A63]"></div>

                {/* Іконка конверта в тон Sand / Terracotta */}
                <div className="text-[#E6D5BC] mb-6 group-hover:text-[#C17A63] transition-colors duration-500 transform group-hover:scale-105">
                    <Mail size={70} strokeWidth={1} />
                </div>

                <h1 className="text-2xl font-serif text-[#3D3433] mb-2 font-light tracking-wide">
                    {text[lang].title}
                </h1>
                <p className="text-xs tracking-wide text-gray-400 mb-8 font-light">
                    {text[lang].subtitle}
                </p>

                {/* Сургучна печатка кольору Terracotta з сердечком */}
                <div className="w-11 h-11 bg-[#C17A63] rounded-full flex items-center justify-center text-[#FAF7F2] font-serif text-lg shadow-sm transform group-hover:rotate-12 transition-transform duration-700 border border-[#A9644F]">
                    ❤
                </div>
            </div>
        </div>
    );
}

export default MailScreen;