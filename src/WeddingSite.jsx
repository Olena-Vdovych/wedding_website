import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Shirt, Clock, CheckCircle2 } from 'lucide-react';

// Переклади (Контент сайту)
const translations = {
    ua: {
        names: "Денніс & Олена",
        date: "12 Червня 2027",
        location: "Katwijk, Нідерланди",
        storyTitle: "Наша Історія",
        storyText: "Один випадок змінив усе. Українка та нідерландець знайшли один одного, і тепер ми неймовірно щасливі запросити вас розділити з нами початок нашої нової подорожі на березі Північного моря.",
        programTitle: "Програма Дня",
        dressCodeTitle: "Дрес-код & Палітра",
        dressCodeText: "Стиль: Beach Boho Chic. Оскільки церемонія буде прямо на піску, залиште підбори вдома! Обирайте легкі тканини та зручне взуття.",
        rsvpTitle: "Підтвердження присутності",
        rsvpText: "Будь ласка, заповніть форму до 1 травня 2027 року, щоб ми могли узгодити меню з рестораном.",
        nameLabel: "Ваше Ім'я та Прізвище",
        attendingLabel: "Чи зможете ви прийти?",
        yes: "Так, з радістю!",
        no: "Ні, на жаль не зможу",
        dietLabel: "Дієтичні вподобання / Алергії",
        dietPlaceholder: "Наприклад: вегетаріанець, алергія на горіхи...",
        submitBtn: "Надіслати відповідь",
        successMsg: "Дякуємо! Ваша відповідь успішно збережена.",
    },
    nl: {
        names: "Dennis & Olena",
        date: "12 Juni 2027",
        location: "Katwijk aan Zeen , Nederland",
        storyTitle: "Ons Verhaal",
        storyText: "Eén moment veranderde alles. Een Oekraïense en een Nederlander vonden elkaar, and we zijn ontzettend blij om jullie uit te nodigen om het begin van onze nieuwe reis te vieren aan de Noordzeekust.",
        programTitle: "Programma van de Dag",
        dressCodeTitle: "Dresscode & Palet",
        dressCodeText: "Stijl: Beach Boho Chic. Omdat de ceremonie direct op het strand plaatsvindt, laat de hakken thuis! Kies voor luchtige stoffen en comfortabele schoenen.",
        rsvpTitle: "Aanmelden (RSVP)",
        rsvpText: "Vul alstublieft het formulier in voor 1 mei 2027, zodat we het menu kunnen afstemmen met het strandpaviljoen.",
        nameLabel: "Uw Voornaam en Achternaam",
        attendingLabel: "Bent u aanwezig?",
        yes: "Ja, ik ben er bij!",
        no: "Nee, helaas kan ik niet",
        dietLabel: "Dieetwensen / Allergieën",
        dietPlaceholder: "Bijv: vegetariër, notenallergie...",
        submitBtn: "Antwoord versturen",
        successMsg: "Bedankt! Je reactie is succesvol opgeslagen.",
    }
};

const colors = [
    { name: 'Terracotta', hex: 'bg-[#C17A63]' },
    { name: 'Sage', hex: 'bg-[#9CAF88]' },
    { name: 'Sand', hex: 'bg-[#E6D5BC]' },
    { name: 'Dusty Pink', hex: 'bg-[#D2A7A1]' },
    { name: 'Ivory', hex: 'bg-[#F9F6F0] border border-gray-300' }
];

export default function WeddingSite() {
    const [lang, setLang] = useState('ua');
    const [formData, setFormData] = useState({ name: '', attending: 'yes', diet: '', music: '' });
    const [submitted, setSubmitted] = useState(false);

    const t = translations[lang];

    const handleSubmit = (e) => {
        e.preventDefault();
        // ТУТ ТВІЙ FETCH ЗАПИТ НА БЕКЕНД (наприклад, Formspree або Google Sheets)
        console.log('RSVP Data submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#4A3E3D] font-sans antialiased selection:bg-[#E6D5BC]">

            {/* МЕНЮ ПЕРЕМИКАННЯ МОВИ */}
            <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-[#E6D5BC] flex gap-2 text-xs font-medium">
                <button onClick={() => setLang('ua')} className={`px-2 py-1 rounded-full transition ${lang === 'ua' ? 'bg-[#C17A63] text-white' : 'hover:bg-gray-100'}`}>UA</button>
                <button onClick={() => setLang('nl')} className={`px-2 py-1 rounded-full transition ${lang === 'nl' ? 'bg-[#C17A63] text-white' : 'hover:bg-gray-100'}`}>NL</button>
            </div>

            {/* HERO SECTION */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#E6D5BC]/30 to-transparent">
                <div className="animate-fade-in space-y-4">
                    <div className="flex justify-center text-[#C17A63] animate-pulse">
                        <Heart size={36} strokeWidth={1} fill="currentColor" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-[#3D3433] font-light">{t.names}</h1>
                    <div className="h-[1px] w-24 bg-[#C17A63] mx-auto my-6"></div>
                    <div className="flex flex-col items-center gap-2 text-sm md:text-base tracking-widest uppercase text-gray-600">
                        <p className="flex items-center gap-2"><Calendar size={16} /> {t.date}</p>
                        <p className="flex items-center gap-2"><MapPin size={16} /> {t.location}</p>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-gray-400 animate-bounce">
                    Scroll down
                </div>
            </header>

            {/* OUR STORY */}
            <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6">
                <h2 className="text-3xl font-serif text-[#3D3433]">{t.storyTitle}</h2>
                <p className="text-gray-600 leading-relaxed font-light md:text-lg">{t.storyText}</p>
            </section>

            {/* PROGRAM (TIMELINE) */}
            <section className="bg-white/50 backdrop-blur-sm py-20 border-y border-[#E6D5BC]/40">
                <div className="max-w-xl mx-auto px-6">
                    <h2 className="text-3xl font-serif text-center text-[#3D3433] mb-12 flex justify-center items-center gap-3">
                        <Clock size={24} className="text-[#C17A63]" /> {t.programTitle}
                    </h2>
                    <div className="relative border-l border-[#E6D5BC] ml-4 md:ml-32 space-y-12">
                        {[
                            { time: '15:30', title: lang === 'ua' ? 'Збір гостей на терасі' : 'Ontvangst van gasten' },
                            { time: '16:00', title: lang === 'ua' ? 'Весільна церемонія на піску' : 'Huwelijksceremonie op het strand' },
                            { time: '16:45', title: lang === 'ua' ? 'Привітання, торт & Borrel' : 'Felicitaties, taart & Borrel' },
                            { time: '18:30', title: lang === 'ua' ? 'Beach BBQ Вечеря' : 'Beach BBQ Diner' },
                            { time: '21:00', title: lang === 'ua' ? 'Багаття на піску & Танці' : 'Kampvuur & Feest' },
                        ].map((item, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute -left-[9px] top-1.5 bg-[#FAF7F2] p-1 border-2 border-[#C17A63] rounded-full w-4 h-4"></div>
                                <time className="absolute -left-20 md:-left-28 top-1 text-sm font-mono tracking-wider font-semibold text-[#C17A63]">{item.time}</time>
                                <h3 className="text-lg font-medium font-serif">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DRESS CODE */}
            <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-8">
                <h2 className="text-3xl font-serif text-[#3D3433] flex justify-center items-center gap-3">
                    <Shirt size={24} className="text-[#C17A63]" /> {t.dressCodeTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed font-light">{t.dressCodeText}</p>
                <div className="flex justify-center gap-4 flex-wrap pt-4">
                    {colors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div className={`w-14 h-14 rounded-full shadow-inner transform hover:scale-110 transition ${color.hex}`}></div>
                            <span className="text-xs tracking-wider text-gray-500">{color.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* RSVP FORM */}
            <section className="max-w-xl mx-auto px-6 py-20 bg-white shadow-xl rounded-2xl mb-24 border border-[#E6D5BC]/30">
                <h2 className="text-3xl font-serif text-center text-[#3D3433] mb-3">{t.rsvpTitle}</h2>
                <p className="text-gray-500 text-sm font-light text-center mb-8">{t.rsvpText}</p>

                {submitted ? (
                    <div className="text-center p-8 bg-[#9CAF88]/10 text-[#546246] rounded-xl flex flex-col items-center gap-3">
                        <CheckCircle2 size={40} />
                        <p className="font-medium">{t.successMsg}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium">{t.nameLabel}</label>
                            <input
                                type="text" required
                                className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium">{t.attendingLabel}</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className={`py-2.5 px-4 rounded-lg border text-sm font-medium transition ${formData.attending === 'yes' ? 'bg-[#C17A63] text-white border-[#C17A63]' : 'bg-[#FAF7F2] border-[#E6D5BC]'}`}
                                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                                >
                                    {t.yes}
                                </button>
                                <button
                                    type="button"
                                    className={`py-2.5 px-4 rounded-lg border text-sm font-medium transition ${formData.attending === 'no' ? 'bg-[#C17A63] text-white border-[#C17A63]' : 'bg-[#FAF7F2] border-[#E6D5BC]'}`}
                                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                                >
                                    {t.no}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium">{t.dietLabel}</label>
                            <textarea
                                rows="2" placeholder={t.dietPlaceholder}
                                className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                value={formData.diet} onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium">{t.musicLabel}</label>
                            <input
                                type="text"
                                className="w-full bg-[#FAF7F2] border border-[#E6D5BC] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                value={formData.music} onChange={(e) => setFormData({ ...formData, music: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#C17A63] text-white py-3 rounded-lg font-medium shadow-md hover:bg-[#A9644F] transition tracking-wider uppercase text-xs"
                        >
                            {t.submitBtn}
                        </button>
                    </form>
                )}
            </section>

            {/* FOOTER */}
            <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-200">
                <p>© 2027 • Made with ♥ for Dennis & Olena</p>
            </footer>
        </div>
    );
}