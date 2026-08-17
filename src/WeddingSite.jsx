import React, { useState } from "react";
import {
    Heart,
    Calendar,
    MapPin,
    Shirt,
    Clock,
    CheckCircle2,
} from "lucide-react";
import couplePhoto from "./assets/couple.webp";
import ScrollReveal from "./ScrollReveal";

// Переклади (Контент сайту)
const translations = {
    ua: {
        names: "Денніс & Олена",
        date: "12 Червня 2027",
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
        rsvpTitle: "Підтвердження присутності",
        rsvpText:
            "Будь ласка, заповніть форму до 1 травня 2027 року, щоб ми могли узгодити меню з рестораном.",
        nameLabel: "Ваше Ім'я та Прізвище",
        attendingLabel: "Чи зможете ви прийти?",
        yes: "Так, з радістю!",
        no: "Ні, на жаль не зможу",
        guestsCountLabel: "Кількість осіб (включаючи вас)",
        guestOptions: [
            "1 (Я прийду сам/один)",
            "2 (Я + 1)",
            "3 (Я + 2)",
            "4 (Родина / група)",
        ],
        guestsNamesLabel: "Імена ваших супутників (+1 / діти)",
        guestsNamesPlaceholder: "Наприклад: Іван (чоловік), Софія (донька 5 років)",
        dietLabel: "Дієтичні вподобання / Алергії",
        dietPlaceholder: "Наприклад: вегетаріанець, алергія на горіхи...",
        submitBtn: "Надіслати відповідь",
        successMsg: "Дякуємо! Ваша відповідь успішно збережена.",
    },
    nl: {
        names: "Dennis & Olena",
        date: "12 Juni 2027",
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
        rsvpTitle: "Aanmelden (RSVP)",
        rsvpText:
            "Vul alstublieft het formulier in voor 1 mei 2027, zodat we het menu kunnen afstemmen met het strandpaviljoen.",
        nameLabel: "Uw Voornaam en Achternaam",
        attendingLabel: "Bent u aanwezig?",
        yes: "Ja, ik ben er bij!",
        no: "Nee, helaas kan ik niet",
        guestsCountLabel: "Aantal personen (inclusief uzelf)",
        guestOptions: [
            "1 (Alleen ik)",
            "2 (Ik + 1)",
            "3 (Ik + 2)",
            "4 (Gezin / groep)",
        ],
        guestsNamesLabel: "Namen van uw partner / kinderen",
        guestsNamesPlaceholder: "Bijv: Jan (partner), Sophie (dochter 5 jaar)",
        dietLabel: "Dieetwensen / Allergieën",
        dietPlaceholder: "Bijv: vegetariër, notenallergie...",
        submitBtn: "Antwoord versturen",
        successMsg: "Bedankt! Je reactie is succesvol opgeslagen.",
    },
};

const colors = [
    { name: "Terracotta", hex: "bg-[#C17A63]" },
    { name: "Sage", hex: "bg-[#9CAF88]" },
    { name: "Sand", hex: "bg-[#E6D5BC]" },
    { name: "Dusty Pink", hex: "bg-[#D2A7A1]" },
    { name: "Ivory", hex: "bg-[#F9F6F0] border border-gray-300" },
];

export default function WeddingSite({ lang = "ua", setLang }) {
    const [formData, setFormData] = useState({
        name: "",
        attending: "yes",
        guestsCount: 1,
        guestNames: "",
        diet: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const t = translations[lang] || translations.ua;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // важливо для Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbz5yKZq4rLg3cfUBuksKv0zZQiwz5ftHJ7B2nQnQoCYfyskzOsIVXyoezmHRJcYCvx1/exec";
    const [loading, setLoading] = useState(false);

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
            <ScrollReveal>
                <section className="bg-white/50 backdrop-blur-sm py-20 border-y border-[#E6D5BC]/40">
                    <div className="max-w-xl mx-auto px-6">
                        <h2 className="text-3xl font-serif text-center text-[#3D3433] mb-12 flex justify-center items-center gap-3">
                            <Clock size={24} className="text-[#C17A63]" /> {t.programTitle}
                        </h2>

                        <div className="relative border-l-2 border-[#E6D5BC] ml-4 md:ml-32 space-y-10">
                            {[
                                {
                                    time: "15:30",
                                    title:
                                        lang === "ua"
                                            ? "Збір гостей на терасі"
                                            : "Ontvangst van gasten",
                                },
                                {
                                    time: "16:00",
                                    title:
                                        lang === "ua"
                                            ? "Весільна церемонія на піску"
                                            : "Huwelijksceremonie op het strand",
                                },
                                {
                                    time: "16:45",
                                    title:
                                        lang === "ua"
                                            ? "Привітання, торт & Borrel"
                                            : "Felicitaties, taart & Borrel",
                                },
                                {
                                    time: "18:30",
                                    title: lang === "ua" ? "Beach BBQ Вечеря" : "Beach BBQ Diner",
                                },
                                {
                                    time: "21:00",
                                    title:
                                        lang === "ua"
                                            ? "Багаття на піску & Танці"
                                            : "Kampvuur & Feest",
                                },
                            ].map((item, index) => (
                                <div key={index} className="relative pl-6 md:pl-8">
                                    <div className="absolute -left-[9px] top-1 bg-[#FAF7F2] p-0.5 border-2 border-[#C17A63] rounded-full w-4 h-4 z-10"></div>

                                    <time className="block md:absolute md:-left-28 md:top-0 text-sm font-mono tracking-wider font-semibold text-[#C17A63] mb-1 md:mb-0 md:text-right md:w-20">
                                        {item.time}
                                    </time>

                                    <h3 className="text-lg font-medium font-serif text-[#3D3433]">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
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
                                <a
                                    href="https://maps.google.com/?q=Surf+and+Beach+Katwijk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-[#4A3E3D] border border-[#E6D5BC] px-5 py-3 rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-[#FAF7F2] transition shadow-sm"
                                >
                                    <MapPin size={14} className="text-[#C17A63]" />
                                    {t.googleMapsBtn}
                                </a>

                                <a
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dennis+%26+Olena+Wedding&dates=20270612T133000Z/20270612T220000Z&details=Wedding+at+the+beach!&location=Surf+and+Beach,+Katwijk"
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
                            <iframe
                                title="Google Maps Venue"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.5637213459974!2d4.385412977051465!3d52.20588235889246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c052e4a64097%3A0xa6182c6de3845b65!2sStrandpaviljoen%20Surf%20en%20Beach!5e0!3m2!1suk!2snl!4v1700000000000!5m2!1suk!2snl"
                                className="w-full h-full border-0 grayscale-[20%] contrast-[95%]"
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
                <section className="max-w-xl mx-auto px-6 py-20 bg-white shadow-xl rounded-2xl mb-24 border border-[#E6D5BC]/30">
                    <h2 className="text-3xl font-serif text-center text-[#3D3433] mb-3">
                        {t.rsvpTitle}
                    </h2>
                    <p className="text-gray-500 text-sm font-light text-center mb-8">
                        {t.rsvpText}
                    </p>

                    {submitted ? (
                        <div className="text-center p-8 bg-[#9CAF88]/10 text-[#546246] rounded-xl flex flex-col items-center gap-3">
                            <CheckCircle2 size={40} />
                            <p className="font-medium">{t.successMsg}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#4A3E3D]">
                                    {t.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#4A3E3D]">
                                    {t.attendingLabel}
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className={`py-2.5 px-4 rounded-lg border text-sm font-medium transition ${formData.attending === "yes"
                                                ? "bg-[#C17A63] text-white border-[#C17A63]"
                                                : "bg-[#FAF7F2] border-[#E6D5BC] text-[#4A3E3D]"
                                            }`}
                                        onClick={() =>
                                            setFormData({ ...formData, attending: "yes" })
                                        }
                                    >
                                        {t.yes}
                                    </button>
                                    <button
                                        type="button"
                                        className={`py-2.5 px-4 rounded-lg border text-sm font-medium transition ${formData.attending === "no"
                                                ? "bg-[#C17A63] text-white border-[#C17A63]"
                                                : "bg-[#FAF7F2] border-[#E6D5BC] text-[#4A3E3D]"
                                            }`}
                                        onClick={() =>
                                            setFormData({ ...formData, attending: "no" })
                                        }
                                    >
                                        {t.no}
                                    </button>
                                </div>
                            </div>

                            {formData.attending === "yes" && (
                                <div className="space-y-6 animate-[fadeInElegant_0.5s_ease-out]">
                                    {/* Перекладений список кількості осіб */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-[#4A3E3D]">
                                            {t.guestsCountLabel}
                                        </label>
                                        <select
                                            className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                            value={formData.guestsCount}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    guestsCount: Number(e.target.value),
                                                })
                                            }
                                        >
                                            <option value={1}>{t.guestOptions[0]}</option>
                                            <option value={2}>{t.guestOptions[1]}</option>
                                            <option value={3}>{t.guestOptions[2]}</option>
                                            <option value={4}>{t.guestOptions[3]}</option>
                                        </select>
                                    </div>

                                    {formData.guestsCount > 1 && (
                                        <div className="flex flex-col gap-1.5 animate-[fadeInElegant_0.3s_ease-out]">
                                            <label className="text-sm font-medium text-[#4A3E3D]">
                                                {t.guestsNamesLabel}
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder={t.guestsNamesPlaceholder}
                                                className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                                value={formData.guestNames}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        guestNames: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#4A3E3D]">
                                    {t.dietLabel}
                                </label>
                                <textarea
                                    rows="2"
                                    placeholder={t.dietPlaceholder}
                                    className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                    value={formData.diet}
                                    onChange={(e) =>
                                        setFormData({ ...formData, diet: e.target.value })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#C17A63] text-white py-3 rounded-lg font-medium shadow-md hover:bg-[#A9644F] transition tracking-wider uppercase text-xs disabled:opacity-50"
                            >
                                {loading ? "Sending..." : t.submitBtn}
                            </button>
                        </form>
                    )}
                </section>
            </ScrollReveal>

            {/* FOOTER */}
            <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-200">
                <p>© 2027 • Made with ♥ for Dennis & Olena</p>
            </footer>
        </div>
    );
}
