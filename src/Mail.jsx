import React, { useState } from "react";

function MailScreen({ onOpen, lang = "ua" }) {
  const [isOpen, setIsOpen] = useState(false);

  const text = {
    ua: {
      invitation: "Запрошення на весілля",
      names: "Денніс & Олена",
      date: "10 Липня 2027",
      clickText: "Натисніть, щоб відкрити",
    },
    nl: {
      invitation: "Uitnodiging voor het huwelijk",
      names: "Dennis & Olena",
      date: "10 Juli 2027",
      clickText: "Klik om te openen",
    },
    de: {
      invitation: "Einladung zur Hochzeit",
      names: "Dennis & Olena",
      date: "10 Juli 2027",
      clickText: "Klicken zum Öffnen",
    },
  };

  const t = text[lang] || text.ua;

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 3200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4F6F4] p-4 overflow-hidden select-none">
      {/* Легкий фоновий паттерн із зеленим відтінком */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5CC_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

      {/* Головний контейнер конверта */}
      <div
        onClick={handleOpen}
        className="relative w-full max-w-md aspect-[4/3] cursor-pointer group"
      >
        {/* ЛЕТЯЧИЙ МЕТЕЛИК */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 z-40 transition-all duration-[2200ms] ease-out pointer-events-none ${
            isOpen
              ? "-top-36 opacity-100 scale-125"
              : "top-1/2 -translate-y-1/2 opacity-0 scale-75"
          }`}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-md animate-pulse"
          >
            <path d="M12 12C9 4 3 5 4 10C5 13 9 13 12 12Z" fill="#D4B26F" />
            <path d="M12 12C9 15 5 19 6 21C8 22 10 17 12 12Z" fill="#8A9A86" />
            <path d="M12 12C15 4 21 5 20 10C19 13 15 13 12 12Z" fill="#D4B26F" />
            <path d="M12 12C15 15 19 19 18 21C16 22 14 17 12 12Z" fill="#8A9A86" />
            <path d="M12 6V18" stroke="#374336" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* ДНО КОНВЕРТА (Темно-шавлієвий) */}
        <div className="absolute inset-0 bg-[#839380] rounded-xl shadow-xl border border-[#758472]" />

        {/* КАРТКА ЗАПРОШЕННЯ */}
        <div
          className={`absolute inset-x-5 bottom-3 top-3 bg-[#FAFBF9] rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-md border border-[#E2E8E1] transition-all duration-[1800ms] ease-in-out delay-300 z-10 ${
            isOpen ? "-translate-y-28 scale-105 z-30 shadow-2xl" : "translate-y-0"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#556652] font-semibold mb-1">
            {t.invitation}
          </span>
          <h1 className="text-2xl md:text-3xl font-serif text-[#2C352B] my-2 font-normal">
            {t.names}
          </h1>
          <div className="w-12 h-[1px] bg-[#8A9A86] my-2 opacity-60" />
          <p className="text-xs tracking-widest text-gray-500 font-light uppercase">
            {t.date}
          </p>
        </div>

        {/* БІЧНІ ТА НИЖНІЙ КЛАПАНИ */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
          <svg className="w-full h-full block" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Лівий */}
            <polygon points="0,0 0,100 50,50" fill="#99A895" />
            {/* Правий */}
            <polygon points="100,0 100,100 50,50" fill="#99A895" />
            {/* Нижній */}
            <polygon points="0,100 100,100 50,49.5" fill="#8CA087" />
          </svg>
        </div>

        {/* ВЕРХНІЙ КЛАПАН */}
        <div
          className={`absolute inset-0 z-20 origin-top transition-all duration-[1200ms] ease-in-out pointer-events-none overflow-hidden rounded-t-xl ${
            isOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
          }`}
        >
          <svg className="w-full h-full block" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 50,50.5" fill="#A8B7A4" />
          </svg>
        </div>

        {/* СУРГУЧНА ПЕЧАТКА (Золото чудово контрастує із зеленим) */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 ease-out ${
            isOpen
              ? "opacity-0 scale-50 pointer-events-none"
              : "opacity-100 scale-100 group-hover:scale-110"
          }`}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#D4B26F] via-[#C5A059] to-[#9A7B3E] rounded-full flex items-center justify-center shadow-lg border-2 border-[#F0E6D2]/60 relative select-none">
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#7A602B]/40" />

            <span className="font-serif text-lg font-bold tracking-tighter text-[#4A3B18] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)] pt-0.5">
              D&O
            </span>
          </div>
        </div>
      </div>

      {/* ПІДКАЗКА */}
      <div
        className={`absolute bottom-12 transition-opacity duration-700 text-center ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-[#556652] animate-pulse">
          {t.clickText}
        </p>
      </div>
    </div>
  );
}

export default MailScreen;

// import React from "react";
// import { Mail } from "lucide-react";

// function MailScreen({ onOpen, lang }) {
//     // Переклади суто для екрана з конвертом
//     const text = {
//     ua: {
//         title: "Тобі надійшов лист",
//         subtitle: "Натисни на конверт, щоб відкрити його"
//     },
//     nl: {
//         title: "Je hebt een uitnodiging",
//         subtitle: "Klik op de enveloppe om hem te openen"
//     },
//     de: {
//         title: "Du hast Post bekommen",
//         subtitle: "Klicke auf den Umschlag, um ihn zu öffnen"
//     }
// };

//     return (
//         <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FAF7F2] p-4 animate-fade-in">
//             {/* Конверт у стилі Boho */}
//             <div
//                 onClick={onOpen}
//                 className="cursor-pointer transform hover:scale-102 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center bg-white p-8 md:p-12 rounded-2xl shadow-md border border-[#E6D5BC]/60 text-center max-w-sm w-full relative overflow-hidden group"
//             >
//                 {/* Декоративна лінія в колір Terracotta */}
//                 <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#C17A63]"></div>

//                 {/* Іконка конверта в тон Sand / Terracotta */}
//                 <div className="text-[#E6D5BC] mb-6 group-hover:text-[#C17A63] transition-colors duration-500 transform group-hover:scale-105">
//                     <Mail size={70} strokeWidth={1} />
//                 </div>

//                 <h1 className="text-2xl font-serif text-[#3D3433] mb-2 font-light tracking-wide">
//                     {text[lang].title}
//                 </h1>
//                 <p className="text-xs tracking-wide text-gray-400 mb-8 font-light">
//                     {text[lang].subtitle}
//                 </p>

//                 {/* Сургучна печатка кольору Terracotta з сердечком */}
//                 <div className="w-11 h-11 bg-[#C17A63] rounded-full flex items-center justify-center text-[#FAF7F2] font-serif text-lg shadow-sm transform group-hover:rotate-12 transition-transform duration-700 border border-[#A9644F]">
//                     ❤
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MailScreen;