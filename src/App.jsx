import React, { useState, useEffect } from 'react';
import WeddingSite from './WeddingSite';
import Mail from './Mail';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  
  // Автоматичне визначення мови користувача при першому завантаженні
  const [lang, setLang] = useState(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    // Якщо мова браузера містить 'nl', ставимо нідерландську, інакше — українську
    return browserLang.includes('nl') ? 'nl' : 'ua';
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FAF7F2]">
      
      {/* МЕНЮ ПЕРЕМИКАННЯ МОВИ (показується ЗАВЖДИ: і на конверті, і на сайті) */}
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