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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FAF7F2]">
      
      {/* 2. МЕНЮ ПЕРЕМИКАННЯ МОВИ (з кнопкою DE) */}
      <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-[#E6D5BC] flex gap-2 text-xs font-medium">
        <button 
          onClick={() => setLang('ua')} 
          className={`px-2 py-1 rounded-full transition ${lang === 'ua' ? 'bg-[#C17A63] text-white' : 'text-[#4A3E3D] hover:bg-gray-100'}`}
        >
          UA
        </button>
        <button 
          onClick={() => setLang('nl')} 
          className={`px-2 py-1 rounded-full transition ${lang === 'nl' ? 'bg-[#C17A63] text-white' : 'text-[#4A3E3D] hover:bg-gray-100'}`}
        >
          NL
        </button>
        <button 
          onClick={() => setLang('de')} 
          className={`px-2 py-1 rounded-full transition ${lang === 'de' ? 'bg-[#C17A63] text-white' : 'text-[#4A3E3D] hover:bg-gray-100'}`}
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