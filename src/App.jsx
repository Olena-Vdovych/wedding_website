import React, { useState } from 'react';
import WeddingSite from './WeddingSite';
import Mail from './Mail';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  
  // 1. Автоматичне визначення мови користувача (NL, DE, або за замовчуванням UA)
  const [lang, setLang] = useState(() => {
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    
    if (browserLang.includes('de')) return 'de';
    if (browserLang.includes('nl')) return 'nl';
    return 'ua';
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F7F8F6]">
      
      {/* 2. МЕНЮ ПЕРЕМИКАННЯ МОВИ (з оновленими бохо-кольорами) */}
      <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs border border-[#CBD5CC] flex gap-1.5 text-xs font-medium">
        <button 
          onClick={() => setLang('ua')} 
          className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
            lang === 'ua' 
              ? 'bg-[#8A9A86] text-white shadow-xs font-semibold' 
              : 'text-[#2C352B] hover:bg-[#E2E8E1]/50'
          }`}
        >
          UA
        </button>
        <button 
          onClick={() => setLang('nl')} 
          className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
            lang === 'nl' 
              ? 'bg-[#8A9A86] text-white shadow-xs font-semibold' 
              : 'text-[#2C352B] hover:bg-[#E2E8E1]/50'
          }`}
        >
          NL
        </button>
        <button 
          onClick={() => setLang('de')} 
          className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
            lang === 'de' 
              ? 'bg-[#8A9A86] text-white shadow-xs font-semibold' 
              : 'text-[#2C352B] hover:bg-[#E2E8E1]/50'
          }`}
        >
          DE
        </button>
      </div>

      {/* Логіка відображення */}
      {!isOpened ? (
        <Mail lang={lang} onOpen={() => setIsOpened(true)} />
      ) : (
        <WeddingSite lang={lang} setLang={setLang} />
      )}
    </div>
  );
}

export default App;