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
    Music
} from "lucide-react";
import couplePhoto from "./assets/couple.webp";
import ScrollReveal from "./ScrollReveal";
import Rsvp from "./Rsvp";

// Переклади (Контент сайту)
const translations = {
    ua: {
        names: "Денніс & Олена",
        date: "10 Липня 2027",
        location: "Katwijk, Нідерланди",
        storyTitle: "Наша Історія",
        storyText:
            "Один випадок змінив усе. Українка та нідерландець знайшли один одного, і тепер ми неймовірно щасливі запросити вас розділити з нами початок нашої нової подорожі на березі Північного моря.",
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
        date: "10 July 2027",
        location: "Katwijk aan Zee, Nederland",
        storyTitle: "Ons Verhaal",
        storyText:
            "Eén moment veranderde alles. Een Oekraïense en een Nederlander vonden elkaar, en we zijn ontzettend blij om jullie uit te nodigen om het begin van onze nieuwe reis te vieren aan de Noordzeekust.",
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
        date: "10 July 2027",
        location: "Katwijk aan Zee, Niederlande",
        storyTitle: "Unsere Geschichte",
        storyText: "Ein Moment hat alles verändert. Eine Ukrainerin und ein Niederländer haben sich gefunden, und wir freuen uns riesig, Sie einzuladen, den Beginn unserer gemeinsamen Reise an der Nordseeküste zu feiern.",
        programTitle: "Tagesprogramm",
        locationTitle: "Ort & Parken",
        venueName: "Strandpavillon «Surf and Beach»",
        venueAddress: "Katwijk aan Zee, Niederlande",
        parkingTitle: "Parkmöglichkeiten",
        parkingText: "Wir empfehlen das Parken im Parkhaus 'Parkeergarage Boulevard Zeezijde' direkt am Strand. Von dort sind es nur wenige Gehminuten zum Pavillon.",
        googleMapsBtn: "In Google Maps öffnen",
        calendarBtn: "In Kalender eintragen",
        dressCodeTitle: "Dresscode & Palette",
        dressCodeText: "Stil: Beach Boho Chic. Da die Zeremonie direkt am Strand stattfindet, lassen Sie die Stöckelschuhe bitte zu Hause! Wählen Sie luftige Stoffe und bequeme Schuhe.",
    }
};

const colors = [
    { name: "Terracotta", hex: "bg-[#C17A63]" },
    { name: "Sage", hex: "bg-[#9CAF88]" },
    { name: "Sand", hex: "bg-[#E6D5BC]" },
    { name: "Dusty Pink", hex: "bg-[#D2A7A1]" },
    { name: "Ivory", hex: "bg-[#F9F6F0] border border-gray-300" },
];

export default function WeddingSite({ lang = "ua", setLang }) {
    const t = translations[lang] || translations.ua;

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#4A3E3D] font-sans antialiased selection:bg-[#E6D5BC]">
            {/* HERO SECTION */}
            <header className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12 max-w-6xl mx-auto py-12 gap-8 md:gap-4 bg-gradient-to-b from-[#E6D5BC]/30 to-transparent overflow-hidden">
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => {
                        const randomLeft = [8, 22, 35, 48, 62, 73, 88, 15, 55, 80][i];
                        const randomDelay = i * 2.2;
                        const randomDuration = 9 + (i % 3) * 3;

                        const petalShape =
                            i % 2 === 0
                                ? "rounded-[100%_0_60%_30%]"
                                : "rounded-[50%_0_50%_0]";

                        return (
                            <div
                                key={i}
                                className={`absolute top-[-10%] bg-[#C17A63]/20 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3)] backdrop-blur-[0.5px] ${petalShape}`}
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
                    <div className="flex justify-center md:justify-start text-[#C17A63] opacity-0 animate-[fadeInElegant_1.5s_cubic-bezier(0.25,1,0.5,1)_0.2s_both]">
                        <div className="animate-pulse">
                            <Heart size={32} strokeWidth={1} fill="currentColor" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide text-[#3D3433] font-light leading-tight drop-shadow-sm overflow-hidden flex flex-wrap justify-center md:justify-start gap-x-4">
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

                    <div
                        className="h-[1px] w-20 bg-[#C17A63] mx-auto md:mx-0 my-4 opacity-0 animate-[fadeInElegant_2s_cubic-bezier(0.25,1,0.5,1)_both]"
                        style={{ animationDelay: "1.2s" }}
                    ></div>

                    <div
                        className="flex flex-col items-center md:items-start gap-2.5 text-xs md:text-sm tracking-widest uppercase text-gray-600 font-medium opacity-0 animate-[fadeInElegant_2s_cubic-bezier(0.25,1,0.5,1)_both]"
                        style={{ animationDelay: "1.5s" }}
                    >
                        <p className="flex items-center gap-2.5">
                            <Calendar size={16} className="text-[#C17A63]" /> {t.date}
                        </p>
                        <p className="flex items-center gap-2.5">
                            <MapPin size={16} className="text-[#C17A63]" /> {t.location}
                        </p>
                    </div>
                </div>

                <div
                    className="md:flex-1 w-full max-w-[340px] md:max-w-[420px] lg:max-w-[460px] z-10 flex justify-center opacity-0 animate-[scaleUpElegant_2.2s_cubic-bezier(0.25,1,0.5,1)_both]"
                    style={{ animationDelay: "0.6s" }}
                >
                    <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-xl border-[6px] md:border-[10px] border-white bg-white">
                        <img
                            src={couplePhoto}
                            alt="Dennis & Olena"
                            className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-[#C17A63]/5 mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-gray-400 animate-bounce">
                    Scroll down
                </div>
            </header>

            {/* OUR STORY */}
            <ScrollReveal>
                <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6">
                    <h2 className="text-3xl font-serif text-[#3D3433]">{t.storyTitle}</h2>
                    <p className="text-gray-600 leading-relaxed font-light md:text-lg">
                        {t.storyText}
                    </p>
                </section>
            </ScrollReveal>

            {/* PROGRAM (TIMELINE) */}
{/* 
  ВНУТРІШНІЙ ТАЙМІНГ ДЛЯ НАРЕЧЕНИХ:
  14:00 - 14:30 | Збір гостей
  14:30 - 15:15 | Церемонія
  15:15 - 16:15 | Тост & Фото з гостями
  16:15 - 17:15 | ПРИВАТНА ФОТОСЕСІЯ НА ПЛЯЖІ (Поки гості відпочивають)
  17:30 - 19:30 | Вечеря
  20:00 - ...   | Вечірка & Торт
*/}
<ScrollReveal>
    <section className="bg-white/50 backdrop-blur-sm py-20 border-y border-[#E6D5BC]/40">
        <div className="max-w-xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center text-[#3D3433] mb-12 flex justify-center items-center gap-3">
                <Clock size={24} className="text-[#C17A63]" /> {t.programTitle}
            </h2>

            <div className="relative border-l-2 border-[#E6D5BC] ml-6 md:ml-32 space-y-10">
                {[
                    {
                        time: "14:00",
                        title: lang === "de" ? "Empfang der Gäste" : lang === "nl" ? "Ontvangst van gasten" : "Збір гостей на терасі",
                        icon: GlassWater
                    },
                    {
                        time: "14:30",
                        title: lang === "de" ? "Hochzeitszeremonie am Strand" : lang === "nl" ? "Huwelijksceremonie op het strand" : "Весільна церемонія на піску",
                        icon: Heart
                    },
                    {
                        time: "15:15",
                        title: lang === "de" ? "Glückwünsche, Fotos & Borrel" : lang === "nl" ? "Felicitaties, foto's & Borrel" : "Привітання, спільні фото & Borrel",
                        icon: Camera
                    },
                    {
                        time: "17:30",
                        title: lang === "de" ? "Festliches Strand-BBQ" : lang === "nl" ? "Feestelijk Beach BBQ" : "Святковий Beach BBQ",
                        icon: Utensils
                    },
                    {
                        time: "20:00",
                        title: lang === "de" ? "Empfang der Abendgäste" : lang === "nl" ? "Ontvangst avondgasten" : "Збір вечірніх гостей",
                        icon: Users
                    },
                    {
                        time: "20:30",
                        title: lang === "de" ? "Anschnitt der Hochzeitstorte" : lang === "nl" ? "Aansnijden van de bruidstaart" : "Урочистий торт",
                        icon: Cake
                    },
                    {
                        time: "20:45",
                        title: lang === "de" ? "Eröffnungstanz & Party" : lang === "nl" ? "Openingsdans & Feest" : "Перший танець & Вечірка",
                        icon: Music
                    },
                ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="relative pl-8 md:pl-10 group">
                            {/* Анімована іконка замість кружечка */}
                            <div className="absolute -left-[17px] top-0.5 bg-[#FAF7F2] p-1.5 border border-[#C17A63] rounded-full text-[#C17A63] shadow-sm transition-transform duration-300 group-hover:scale-125">
                                <IconComponent size={16} className="animate-pulse" />
                            </div>

                            <time className="block md:absolute md:-left-28 md:top-1 text-sm font-mono tracking-wider font-semibold text-[#C17A63] mb-1 md:mb-0 md:text-right md:w-20">
                                {item.time}
                            </time>

                            <h3 className="text-lg font-medium font-serif text-[#3D3433]">
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
                            <h2 className="text-3xl font-serif text-[#3D3433]">
                                {t.locationTitle}
                            </h2>

                            <div className="space-y-2">
                                <h3 className="text-xl font-serif text-[#C17A63] font-medium">
                                    {t.venueName}
                                </h3>
                                <p className="text-gray-600 font-light">{t.venueAddress}</p>
                            </div>

                            <div className="p-5 bg-white rounded-xl border border-[#E6D5BC]/40 shadow-sm space-y-2 text-left">
                                <h4 className="text-sm font-medium tracking-wide text-[#3D3433] uppercase flex items-center gap-2">
                                    🚗 {t.parkingTitle}
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    {t.parkingText}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                {/* Динамічне посилання на Google Maps з точним місцем та мовою */}
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=Strandpaviljoen+Surf+en+Beach+Katwijk&hl=${lang === 'de' ? 'de' : lang === 'nl' ? 'nl' : 'uk'}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-[#4A3E3D] border border-[#E6D5BC] px-5 py-3 rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-[#FAF7F2] transition shadow-sm"
                                >
                                    <MapPin size={14} className="text-[#C17A63]" />
                                    {t.googleMapsBtn}
                                </a>

                                <a
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dennis+%26+Olena+Wedding&dates=20270612T133000Z/20270612T220000Z&details=Wedding+at+the+beach!&location=Strandpaviljoen+Surf+en+Beach,+Boulevard+Zeezijde+9,+2225+BB+Katwijk+aan+Zee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C17A63] text-white px-5 py-3 rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-[#A9644F] transition shadow-md"
                                >
                                    <Calendar size={14} />
                                    {t.calendarBtn}
                                </a>
                            </div>
                        </div>

                        <div className="w-full aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#E6D5BC]/50">
                            {/* Динамічна карта з точними координатами Surf and Beach */}
                            <iframe
                                title="Google Maps Venue"
                                src={`https://www.google.com/maps?q=Strandpaviljoen+Surf+en+Beach+Katwijk&output=embed&hl=${lang === 'de' ? 'de' : lang === 'nl' ? 'nl' : 'uk'}`}
                                className="w-full h-full border-0 grayscale-[20%] contrast-[95%]"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>            </div>
                    </div>
                </section>
            </ScrollReveal>
            {/* DRESS CODE */}
            <ScrollReveal>
                <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-8">
                    <h2 className="text-3xl font-serif text-[#3D3433] flex justify-center items-center gap-3">
                        <Shirt size={24} className="text-[#C17A63]" /> {t.dressCodeTitle}
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-light">
                        {t.dressCodeText}
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap pt-4">
                        {colors.map((color, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div
                                    className={`w-14 h-14 rounded-full shadow-inner transform hover:scale-110 transition ${color.hex}`}
                                ></div>
                                <span className="text-xs tracking-wider text-gray-500">
                                    {color.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            {/* RSVP FORM */}
            <ScrollReveal>
                <Rsvp lang={lang} />
            </ScrollReveal>

            {/* FOOTER */}
            <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-200">
                <p>© 2027 • Made with ♥ for Dennis & Olena</p>
            </footer>
        </div>
    );
}