import React from "react";
import {
  Heart,
  Calendar,
  MapPin,
  Shirt,
  Clock,
  GlassWater,
  Camera,
  Utensils,
  Users,
  Cake,
  Gift,
  Music,
  Sparkles,
  Sun,
  Waves,
  Car, 
  Mail
} from "lucide-react";
import couplePhoto from "./assets/couple.webp";
import ScrollReveal from "./ScrollReveal";
import Rsvp from "./Rsvp";
import CountdownTimer from "./CountdownTimer";

const translations = {
  ua: {
    names: "Денніс & Олена",
    date: "10 Липня 2027",
    location: "Katwijk, Нідерланди",
    storyTitle: "Як усе починалося",
    storyText:
      "Часом доля обирає найнесподіваніші маршрути, щоб з'єднати серця українки та нідерландця. Ми знайшли один в одному свій дім. І для нас немає більшої радості, ніж зібрати найрідніших людей на солоному узбережжі Північного моря, щоб разом розпочати нову главу нашого життя.",
    programTitle: "Програма Дня",
    locationTitle: "Де все відбуватиметься",
    venueName: "Пляжний павільйон «Surf and Beach»",
    venueAddress: "Katwijk aan Zee, Нідерланди",
    parkingTitle: "Паркування",
    parkingText:
      "Рекомендований підземний паркінг прямо біля пляжу: Parkeergarage Boulevard Zeezijde. Звідти до павільйону всього кілька хвилин пішки.",
    googleMapsBtn: "Відкрити в Google Maps",
    calendarBtn: "Додати в Календар",
    dressCodeTitle: "Дрес-код & Палітра",
    dressCodeText:
      "Стиль: Beach Boho Chic. Оскільки церемонія буде прямо на піску, залиште підбори вдома! Обирайте легкі тканини та зручне взуття.",
  },
  nl: {
    names: "Dennis & Olena",
    date: "10 Juli 2027",
    location: "Katwijk aan Zee, Nederland",
    storyTitle: "Hoe het allemaal begon",
    storyText:
      "Soms kiest het lot de meest onverwachte wegen om de harten van een Oekraïense en een Nederlander te verbinden. We hebben ons thuis in elkaar gevonden. Er is voor ons geen groter geluk dan onze dierbaarsten te verzamelen aan de kust van de Noordzee om samen aan dit nieuwe hoofdstuk van ons leven te beginnen.",
    programTitle: "Programma van de Dag",
    locationTitle: "Locatie & Parkeren",
    venueName: "Strandpaviljoen «Surf and Beach»",
    venueAddress: "Katwijk aan Zee, Nederland",
    parkingTitle: "Parkeergelegenheid",
    parkingText:
      "We raden aan om te parkeren in 'Parkeergarage Boulevard Zeezijde', die direct aan het strand ligt. Vanaf daar is het slechts een paar minuten lopen naar het paviljoen.",
    googleMapsBtn: "Open in Google Maps",
    calendarBtn: "In Agenda zetten",
    dressCodeTitle: "Dresscode & Palet",
    dressCodeText:
      "Stijl: Beach Boho Chic. Omdat de ceremonie direct op het strand plaatsvindt, laat de hakken thuis! Kies voor luchtige stoffen en comfortabele schoenen.",
  },
  de: {
    names: "Dennis & Olena",
    date: "10 Juli 2027",
    location: "Katwijk aan Zee, Niederlande",
    storyTitle: "Wie alles begann",
    storyText:
      "Manchmal wählt das Schicksal die unerwartetsten Wege, um die Herzen einer Ukrainerin und eines Niederländers zu verbinden. Wir haben ineinander unser Zuhause gefunden. Es gibt für uns kein größeres Glück, als unsere Liebsten an der Nordseeküste zu versammeln, um gemeinsam dieses neue Kapitel unseres Lebens zu beginnen.",
    programTitle: "Tagesprogramm",
    locationTitle: "Ort & Parken",
    venueName: "Strandpavillon «Surf and Beach»",
    venueAddress: "Katwijk aan Zee, Niederlande",
    parkingTitle: "Parkmöglichkeiten",
    parkingText:
      "Wir empfehlen das Parken im Parkhaus 'Parkeergarage Boulevard Zeezijde' direkt am Strand. Von dort sind es nur wenige Gehminuten zum Pavillon.",
    googleMapsBtn: "In Google Maps öffnen",
    calendarBtn: "In Kalender eintragen",
    dressCodeTitle: "Dresscode & Palette",
    dressCodeText:
      "Stil: Beach Boho Chic. Da die Zeremonie direkt am Strand stattfindet, lassen Sie die Stöckelschuhe bitte zu Hause! Wählen Sie luftige Stoffe und bequeme Schuhe.",
  }
};

const colors = [
  { name: "Sage Green", hex: "bg-[#8A9A86]" },
  { name: "Sand Beige", hex: "bg-[#D8C2A8]" },
  { name: "Soft Olive", hex: "bg-[#71826D]" },
  { name: "Warm Linen", hex: "bg-[#E2D8C9]" },
  { name: "Dusty Beige", hex: "bg-[#C2B29F]" }
];

export default function WeddingSite({ lang = "ua", setLang }) {
  const t = translations[lang] || translations.ua;
  const searchParams = new URLSearchParams(window.location.search);
  const isPartyOnly = searchParams.get('type') === 'party';

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#2C352B] font-sans antialiased selection:bg-[#8A9A86] selection:text-white relative overflow-x-hidden">
      
      {/* М'які бохо-плями з плавним мерехтінням вздовж усього сайту */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-[#D8C2A8]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[35%] right-[-10%] w-[30rem] h-[30rem] bg-[#8A9A86]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[70%] left-[-10%] w-[28rem] h-[28rem] bg-[#D4B26F]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12 max-w-6xl mx-auto py-12 gap-8 md:gap-4 bg-gradient-to-b from-[#E2E8E1]/40 via-transparent to-transparent z-10">
        
        {/* Анімовані падаючі та покачувані пелюстки */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(10)].map((_, i) => {
            const randomLeft = [8, 22, 35, 48, 62, 73, 88, 15, 55, 80][i];
            const randomDelay = i * 2.2;
            const randomDuration = 9 + (i % 3) * 3;
            const petalShape = i % 2 === 0 ? "rounded-[100%_0_60%_30%]" : "rounded-[50%_0_50%_0]";

            return (
              <div
                key={i}
                className={`absolute top-[-10%] bg-[#8A9A86]/35 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-[0.5px] ${petalShape}`}
                style={{
                  left: `${randomLeft}%`,
                  width: `${(i % 3) * 4 + 12}px`,
                  height: `${(i % 3) * 6 + 18}px`,
                  transform: `rotate(${(i * 35) % 90}deg)`,
                  animation: `fall ${randomDuration}s linear infinite`,
                  animationDelay: `${randomDelay}s`,
                }}
              />
            );
          })}
        </div>

        <div className="space-y-6 text-center md:text-left md:flex-1 flex flex-col items-center md:items-start z-20 md:-mr-12 lg:-mr-16">
          <div className="flex items-center gap-2 text-[#8A9A86] opacity-0 animate-[fadeInElegant_1.5s_cubic-bezier(0.25,1,0.5,1)_0.2s_both]">
            <Sparkles size={18} className="animate-spin-slow opacity-70" />
            <div className="animate-bounce">
              <Heart size={28} strokeWidth={1.2} fill="currentColor" />
            </div>
            <Sparkles size={18} className="animate-spin-slow opacity-70" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide text-[#2C352B] font-light leading-tight drop-shadow-sm overflow-hidden flex flex-wrap justify-center md:justify-start gap-x-4">
            {t.names.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block overflow-hidden py-1">
                <span
                  className="inline-block opacity-0 animate-[slideUpElegant_1.8s_cubic-bezier(0.25,1,0.5,1)_both]"
                  style={{ animationDelay: `${0.4 + wordIdx * 0.3}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <div className="flex items-center gap-3 my-2 opacity-0 animate-[fadeInElegant_2s_cubic-bezier(0.25,1,0.5,1)_both]" style={{ animationDelay: "1.2s" }}>
            <span className="h-[1px] w-12 bg-[#8A9A86]/60"></span>
            <span className="text-xs uppercase tracking-widest text-[#8A9A86] font-serif italic">Beach Boho Wedding</span>
            <span className="h-[1px] w-12 bg-[#8A9A86]/60"></span>
          </div>

          <div
            className="flex flex-col items-center md:items-start gap-2.5 text-xs md:text-sm tracking-widest uppercase text-gray-600 font-medium opacity-0 animate-[fadeInElegant_2s_cubic-bezier(0.25,1,0.5,1)_both]"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="flex items-center gap-2.5 bg-white/60 px-3.5 py-1.5 rounded-full border border-[#CBD5CC]/40 backdrop-blur-xs shadow-xs hover:scale-105 transition-transform">
              <Calendar size={16} className="text-[#556652]" /> {t.date}
            </p>
            <p className="flex items-center gap-2.5 bg-white/60 px-3.5 py-1.5 rounded-full border border-[#CBD5CC]/40 backdrop-blur-xs shadow-xs hover:scale-105 transition-transform">
              <MapPin size={16} className="text-[#556652]" /> {t.location}
            </p>
          </div>
        </div>

        {/* ФОТО ЗАЛИШЕНО У ПОЧАТКОВОМУ ПРИБЛИЖЕНОМУ МАСШТАБІ */}
        <div
          className="md:flex-1 w-full max-w-[340px] md:max-w-[420px] lg:max-w-[460px] z-10 flex justify-center opacity-0 animate-[scaleUpElegant_2.2s_cubic-bezier(0.25,1,0.5,1)_both]"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white group transform transition-all duration-700 hover:scale-[1.02]">
            <img
              src={couplePhoto}
              alt="Dennis & Olena"
              className="w-full h-full object-cover object-center scale-125 md:scale-125 transform transition-transform duration-1000 group-hover:scale-130"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C352B]/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-[#556652] animate-bounce flex items-center gap-1 font-medium">
          <span>Scroll down</span>
        </div>
      </header>

      {/* OUR STORY — ПЛАВНЕ ПРОЯВЛЕННЯ ТА ВИПЛИВАННЯ */}
      <ScrollReveal>
        <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6 relative">
          <div className="relative inline-block">
            <div className="p-3 rounded-full bg-[#E2E8E1]/60 text-[#556652] mb-2 shadow-xs animate-pulse">
              <Heart size={20} strokeWidth={1.5} />
            </div>
            <Sparkles size={16} className="absolute -top-1 -right-2 text-[#D4B26F] animate-spin-slow" />
          </div>

          <h2 className="text-3xl font-serif text-[#2C352B] tracking-wide">{t.storyTitle}</h2>
          
          <p className="text-gray-600 leading-relaxed font-light md:text-lg italic px-4">
            "{t.storyText}"
          </p>

          <div className="flex justify-center items-center gap-2 text-[#D8C2A8] pt-2">
            <Waves size={24} className="animate-pulse" />
          </div>
        </section>
      </ScrollReveal>

      {/* PROGRAM (TIMELINE) */}
      <ScrollReveal>
        <section className="bg-white/70 backdrop-blur-md py-20 border-y border-[#E2E8E1] relative shadow-xs">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center text-[#2C352B] mb-12 flex justify-center items-center gap-3">
              <Clock size={24} className="text-[#556652] animate-spin-slow" /> {t.programTitle}
            </h2>

            <div className="relative border-l-2 border-[#CBD5CC] ml-6 md:ml-32 space-y-10">
              <div className="absolute top-0 -left-[2px] w-[2px] h-full bg-gradient-to-b from-[#8A9A86] via-[#D8C2A8] to-transparent animate-pulse" />

              {[
                {
                  time: "14:00",
                  title: lang === "de" ? "Empfang der Gäste" : lang === "nl" ? "Ontvangst van gasten" : "Збір гостей на терасі",
                  icon: GlassWater,
                  forPartyOnly: false
                },
                {
                  time: "14:30",
                  title: lang === "de" ? "Hochzeitszeremonie am Strand" : lang === "nl" ? "Huwelijksceremonie op het strand" : "Весільна церемонія на піску",
                  icon: Heart,
                  forPartyOnly: false
                },
                {
                  time: "15:30",
                  title: lang === "de" ? "Glückwünsche, Fotos & Borrel" : lang === "nl" ? "Felicitaties, foto's & Borrel" : "Привітання, спільні фото & Borrel",
                  icon: Camera,
                  forPartyOnly: false
                },
                {
                  time: "17:30",
                  title: lang === "de" ? "Festliches Strand-BBQ" : lang === "nl" ? "Feestelijk Beach BBQ" : "Святковий Beach BBQ",
                  icon: Utensils,
                  forPartyOnly: false
                },
                {
                  time: "19:30",
                  title: lang === "de" ? "Empfang der Abendgäste" : lang === "nl" ? "Ontvangst avondgasten" : "Збір вечірніх гостей",
                  icon: Users,
                  forPartyOnly: true
                },
                {
                  time: "20:00",
                  title: lang === "de" ? "Anschnitt der Hochzeitstorte" : lang === "nl" ? "Aansnijden van de bruidstaart" : "Урочистий торт",
                  icon: Cake,
                  forPartyOnly: true
                },
                {
                  time: "20:45",
                  title: lang === "de" ? "Eröffnungstanz & Party" : lang === "nl" ? "Openingsdans & Feest" : "Перший танець & Вечірка",
                  icon: Music,
                  forPartyOnly: true
                },
                {
                  time: "00:00",
                  title: lang === "de" ? "Abschluss der Feier" : lang === "nl" ? "Afsluiting van de feest" : "Завершення святкування",
                  icon: Clock,
                  forPartyOnly: true
                }
              ]
                .filter(item => isPartyOnly ? item.forPartyOnly : true)
                .map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="relative pl-8 md:pl-10 group">
                      <div className="absolute -left-[17px] top-0.5 bg-[#F7F8F6] p-1.5 border border-[#8A9A86] rounded-full text-[#556652] shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:bg-[#8A9A86] group-hover:text-white group-hover:shadow-md">
                        <IconComponent size={16} />
                      </div>

                      <time className="block md:absolute md:-left-28 md:top-1 text-sm font-mono tracking-wider font-semibold text-[#8A9A86] mb-1 md:mb-0 md:text-right md:w-20 group-hover:text-[#2C352B] transition-colors">
                        {item.time}
                      </time>

                      <h3 className="text-lg font-serif text-[#2C352B] group-hover:translate-x-1 transition-transform">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* VENUE & MAP SECTION */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-serif text-[#2C352B] flex items-center justify-center md:justify-start gap-2">
                <Sun size={24} className="text-[#D4B26F] animate-spin-slow" />
                {t.locationTitle}
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-serif text-[#556652] font-semibold">
                  {t.venueName}
                </h3>
                <p className="text-gray-600 font-light">{t.venueAddress}</p>
              </div>

             <div className="p-5 bg-white/80 rounded-2xl border border-[#E2E8E1] shadow-xs space-y-2 text-left backdrop-blur-xs hover:shadow-md transition-shadow group">
  <h4 className="text-sm font-medium tracking-wide text-[#2C352B] uppercase flex items-center gap-2">
    <Car size={18} className="text-[#556652] group-hover:scale-110 transition-transform" />
    {t.parkingTitle}
  </h4>
  <p className="text-xs text-gray-500 leading-relaxed font-light group-hover:text-gray-700 transition-colors">
    {t.parkingText}
  </p>
</div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=Strandpaviljoen+Surf+en+Beach+Katwijk&hl=${lang === 'de' ? 'de' : lang === 'nl' ? 'nl' : 'uk'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2C352B] border border-[#CBD5CC] px-5 py-3 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#F4F6F4] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
                >
                  <MapPin size={14} className="text-[#556652]" />
                  {t.googleMapsBtn}
                </a>

                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dennis+%26+Olena+Wedding&dates=20270710T120000Z/20270710T220000Z&details=Beach+Boho+Wedding!&location=Strandpaviljoen+Surf+en+Beach,+Boulevard+Zeezijde+9,+2225+BB+Katwijk+aan+Zee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#556652] text-white px-5 py-3 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#435241] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                >
                  <Calendar size={14} />
                  {t.calendarBtn}
                </a>
              </div>
            </div>

            <div className="w-full aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white hover:shadow-2xl transition-shadow">
              <iframe
                title="Google Maps Venue"
                src={`https://www.google.com/maps?q=Strandpaviljoen+Surf+en+Beach+Katwijk&output=embed&hl=${lang === 'de' ? 'de' : lang === 'nl' ? 'nl' : 'uk'}`}
                className="w-full h-full border-0 grayscale-[15%] contrast-[95%]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </ScrollReveal>

   {/* DRESS CODE */}
<ScrollReveal>
  <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8">
    <h2 className="text-3xl font-serif text-[#2C352B] flex justify-center items-center gap-3">
      <Shirt size={24} className="text-[#556652]" /> {t.dressCodeTitle}
    </h2>
    
    <p className="text-gray-600 leading-relaxed font-light max-w-xl mx-auto">
      {t.dressCodeText}
    </p>

    {/* Рівномірна сітка для кольорів із чітким вирівнюванням */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-6 max-w-2xl mx-auto justify-items-center">
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer w-24">
          <div
            className={`w-14 h-14 rounded-full relative overflow-hidden shadow-sm transform group-hover:scale-110 group-hover:shadow-md transition-all duration-300 border-2 border-white ring-1 ring-black/5 ${color.hex}`}
          >
            {/* Текстура льону поверх кольору */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay bg-repeat"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/linen.png')`
              }}
            />
          </div>
          <span className="text-xs tracking-wide text-gray-600 font-medium text-center leading-tight group-hover:text-[#2C352B] transition-colors">
            {color.name}
          </span>
        </div>
      ))}
    </div>

    {/* Прохання від нареченої з оновленою тонкою акцентною лінією */}
    <div className="mt-10 p-6 bg-white/90 rounded-2xl border border-[#E2E8E1] max-w-lg mx-auto shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8A9A86]" />
      <p className="text-sm text-[#2C352B] font-normal leading-relaxed text-center">
        {lang === 'nl' 
          ? "Verzoek van de bruid: laat wit, ivory en lichte crèmetinten alsjeblieft exclusief voor de bruid 🤍"
          : lang === 'de'
            ? "Bitte der Braut: Bitte überlasst Weiß, Ivory und helle Cremetöne ausschließlich der Braut 🤍"
            : "Прохання від нареченої: будь ласка, залишіть білий, айворі (Ivory) та світло-кремові відтінки виключно для головної героїні свята 🤍"
        }
      </p>
    </div>
  </section>
</ScrollReveal>

      {/* COUNTDOWN TIMER */}
      <ScrollReveal>
        <section className="text-center py-12 relative">
          <div className="max-w-xl mx-auto px-6 py-8 bg-white/60 rounded-3xl border border-[#E2E8E1] backdrop-blur-xs shadow-xs hover:shadow-md transition-shadow">
            <h2 className="font-serif text-3xl text-[#2C352B]">Olena &amp; Dennis</h2>
            <p className="text-xs text-gray-500 tracking-widest uppercase mt-2">10.07.2027 • Beach Wedding</p>
            <div className="mt-6">
              <CountdownTimer lang={lang} targetDate="2027-07-10T14:00:00" />
            </div>
          </div>
        </section>
      </ScrollReveal>

  {/* GIFTS SECTION */}
<ScrollReveal>
  <section className="max-w-xl mx-auto px-6 py-12 text-center space-y-4">
    
    {/* Подвійна бохо-іконка: Подарунок та Конверт */}
    <div className="flex justify-center items-center gap-3">
      <div className="w-12 h-12 bg-[#E2E8E1]/70 border border-[#CBD5CC] rounded-full flex items-center justify-center text-[#556652] shadow-xs hover:rotate-12 hover:scale-110 transition-transform duration-300">
        <Gift size={22} strokeWidth={1.8} />
      </div>
      <div className="w-10 h-10 bg-white border border-[#CBD5CC] rounded-full flex items-center justify-center text-[#8A9A86] shadow-xs hover:-rotate-12 hover:scale-110 transition-transform duration-300">
        <Mail size={18} strokeWidth={1.8} />
      </div>
    </div>

    <h3 className="text-2xl font-serif text-[#2C352B]">
      {lang === 'nl' ? 'Cadeautip' : lang === 'de' ? 'Geschenkwunsch' : 'Побажання щодо подарунків'}
    </h3>

    {/* Текст без стандартного кольорового емодзі 💌 */}
    <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed max-w-lg mx-auto">
      {lang === 'nl'
        ? 'Jullie aanwezigheid op onze bruiloft is voor ons het mooiste cadeau! Mocht je ons toch een cadeau willen geven, dan stellen wij een bijdrage in een enveloppe voor onze toekomst erg op prijs.'
        : lang === 'de'
          ? 'Eure Anwesenheit ist für uns das größte Geschenk! Wenn ihr uns dennoch eine Freude machen möchtet, freuen wir uns über einen Beitrag in einem Umschlag für unsere gemeinsame Zukunft.'
          : 'Ваша присутність — це найбільший подарунок для нас! Якщо ви бажаєте привітати нас подарунком, ми будемо щиро вдячні за внесок у конверті в наш сімейний бюджет та майбутні подорожі.'
      }
    </p>
  </section>
</ScrollReveal>

      {/* RSVP FORM */}
      <ScrollReveal>
        <Rsvp lang={lang} />
      </ScrollReveal>

      {/* FOOTER */}
      <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-200/60 relative z-10 flex flex-col items-center gap-2">
        <div className="flex gap-2 text-[#8A9A86] opacity-60">
          <Sparkles size={12} className="animate-spin-slow" />
          <Heart size={12} fill="currentColor" />
          <Sparkles size={12} className="animate-spin-slow" />
        </div>
        <p>© 2027 • Made with ♥ for Dennis &amp; Olena</p>
      </footer>
    </div>
  );
}