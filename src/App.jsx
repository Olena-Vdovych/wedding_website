import React, { useState, useEffect } from 'react';
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

  // Оновлюємо атрибут lang у <html> при зміні мови (для доступності та браузерів)
  useEffect(() => {
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
  }, [lang]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F7F8F6]">
      
      {/* 2. МЕНЮ ПЕРЕМИКАННЯ МОВИ */}
      <div
        role="group"
        aria-label="Language / Мова / Taal / Sprache"
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs border border-[#CBD5CC] flex gap-1.5 text-xs font-medium"
      >
        {[
          { code: 'ua', label: 'UA', name: 'Українська', htmlLang: 'uk' },
          { code: 'nl', label: 'NL', name: 'Nederlands', htmlLang: 'nl' },
          { code: 'de', label: 'DE', name: 'Deutsch', htmlLang: 'de' },
        ].map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => setLang(item.code)}
            aria-pressed={lang === item.code}
            aria-label={item.name}
            lang={item.htmlLang}
            className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
              lang === item.code
                ? 'bg-[#556652] text-white shadow-xs font-semibold'
                : 'text-[#2C352B] hover:bg-[#E2E8E1]/50'
            }`}
          >
            {item.label}
          </button>
        ))}
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