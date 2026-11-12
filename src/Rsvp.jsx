import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { RSVP_DEADLINE } from './config';

const translations = {
    ua: {
        title: "Підтвердження присутності",
        subtitle: (date) => `Будь ласка, дайте відповідь до ${date}`,
        nameLabel: "Ваше ім'я та прізвище (Головний гість)",
        namePlaceholder: "напр. Тарас Шевченко",
        attendingLabel: "Чи зможете ви бути з нами?",
        attendingYes: "Так, із задоволенням!",
        attendingNo: "Ні, на жаль, не можу",
        adultsLabel: "Загальна кількість дорослих",
        guestNameLabel: "Ім'я та прізвище супроводжуючого гостя",
        guestNamePlaceholder: "напр. Олена Шевченко",
        childFreeNote: "Ми дуже любимо маленьких гостей, але вирішили зробити наше весілля святом лише для дорослих, тому просимо вас прийти без дітей. Дякуємо за розуміння! Якщо у вас особлива ситуація, будь ласка, напишіть або зателефонуйте нам — ми обов'язково все обговоримо 🤍",
        childFreeContact: "Зв'язатися з нами:",
        dietLabelFull: "Обмеження в харчуванні, алергії або особливі побажання (необов'язково)",
        dietLabelParty: "Особливі побажання щодо напоїв або алергії (необов'язково)",
        dietPlaceholder: "напр. Вегетаріанство, алергія на горіхи, веган...",
        submitBtn: "Надіслати",
        sendingBtn: "Надсилання...",
        successMsg: "Дякуємо! Вашу відповідь успішно збережено ❤️"
    },
    nl: {
        title: "Aanwezigheid bevestigen",
        subtitle: (date) => `Laat het ons weten voor ${date}`,
        nameLabel: "Volledige naam (Hoofdgast)",
        namePlaceholder: "bijv. Jan de Vries",
        attendingLabel: "Ben je erbij?",
        attendingYes: "Ja, ik ben erbij!",
        attendingNo: "Nee, ik kan helaas niet",
        adultsLabel: "Totaal aantal volwassenen",
        guestNameLabel: "Naam extra volwassene",
        guestNamePlaceholder: "bijv. Anna de Vries",
        childFreeNote: "Wij zijn dol op de kleintjes, maar hebben ervoor gekozen om onze bruiloft een feest voor alleen volwassenen te maken. Daarom vragen we je om zonder kinderen te komen. Bedankt voor je begrip! Heb je een bijzondere situatie? Stuur of bel ons gerust, dan bespreken we het zeker samen 🤍",
        childFreeContact: "Contact:",
        dietLabelFull: "Dieetwensen, allergieën of speciale verzoeken (optioneel)",
        dietLabelParty: "Speciale drankwensen of allergieën (optioneel)",
        dietPlaceholder: "bijv. Vegetarisch, glutenvrij, nootallergie...",
        submitBtn: "Versturen",
        sendingBtn: "Versturen...",
        successMsg: "Bedankt! Je reactie is succesvol verzonden ❤️"
    },
    de: {
        title: "Anwesenheit bestätigen",
        subtitle: (date) => `Bitte antworte bis zum ${date}`,
        nameLabel: "Vollständiger Name (Hauptgast)",
        namePlaceholder: "z.B. Max Mustermann",
        attendingLabel: "Wirst du dabei sein?",
        attendingYes: "Ja, ich bin dabei!",
        attendingNo: "Nein, ich kann leider nicht",
        adultsLabel: "Gesamtzahl der Erwachsenen",
        guestNameLabel: "Name des begleitenden Gastes",
        guestNamePlaceholder: "z.B. Erika Mustermann",
        childFreeNote: "Wir lieben die Kleinen, haben uns aber entschieden, unsere Hochzeit nur für Erwachsene zu feiern, und bitten euch deshalb, ohne Kinder zu kommen. Danke für euer Verständnis! Habt ihr eine besondere Situation? Schreibt oder ruft uns einfach an – wir besprechen alles gern mit euch 🤍",
        childFreeContact: "Kontakt:",
        dietLabelFull: "Diätetische Einschränkungen, Allergien oder besondere Wünsche (optional)",
        dietLabelParty: "Besondere Getränkewünsche oder Allergien (optional)",
        dietPlaceholder: "z.B. Vegetarisch, Glutenfrei, Nussallergie...",
        submitBtn: "Absenden",
        sendingBtn: "Wird gesendet...",
        successMsg: "Vielen Dank! Deine Antwort wurde erfolgreich gesendet ❤️"
    }
};

// Форматує дедлайн (RSVP_DEADLINE з config.js) мовою гостя
const formatDeadline = (lang) => {
    const date = new Date(`${RSVP_DEADLINE}T12:00:00`);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    if (lang === 'ua') {
        const parts = new Intl.DateTimeFormat('uk-UA', options).formatToParts(date);
        const get = (type) => parts.find((p) => p.type === type).value;
        return `${get('day')} ${get('month')} ${get('year')} року`;
    }
    return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'nl-NL', options).format(date);
};

export default function Rsvp({ lang = 'ua' }) {
    const t = translations[lang] || translations.ua;

    const searchParams = new URLSearchParams(window.location.search);
    const isPartyOnly = searchParams.get('type') === 'party';

    const [formData, setFormData] = useState({
        mainName: '',
        attending: 'yes',
        adultsCount: 1,
        additionalAdults: [],
        dietary: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAdultsCountChange = (count) => {
        const newCount = Math.max(1, count);
        const currentAdditional = [...formData.additionalAdults];

        if (newCount - 1 > currentAdditional.length) {
            while (currentAdditional.length < newCount - 1) {
                currentAdditional.push('');
            }
        } else {
            currentAdditional.length = newCount - 1;
        }

        setFormData({
            ...formData,
            adultsCount: newCount,
            additionalAdults: currentAdditional
        });
    };

    const handleAdditionalAdultChange = (index, value) => {
        const updated = [...formData.additionalAdults];
        updated[index] = value;
        setFormData({ ...formData, additionalAdults: updated });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScWInPJ5435Cg5H7uzOitjAsuyI5u5Mn_EbZ3GRUFqaAb-uag/formResponse";

        const allAdultsNames = [
            formData.mainName,
            ...formData.additionalAdults.filter(name => name.trim() !== '')
        ].join(', ');

        const formPayload = new URLSearchParams();
        formPayload.append("entry.280550367", allAdultsNames);
        formPayload.append("entry.1728895548", formData.attending === 'yes' ? 'Yes' : 'No');
        formPayload.append("entry.655186030", formData.attending === 'yes' ? formData.adultsCount : 0);
        // Поле "діти" у Google Form залишаємо заповненим нулем (концепція без дітей)
        formPayload.append("entry.1289813742", '0');
        formPayload.append("entry.15760116", formData.dietary || 'None');

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formPayload
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting RSVP:", error);
            alert("Connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl border border-[#CBD5CC] shadow-md text-center space-y-4">
                <div className="w-12 h-12 bg-[#556652]/10 text-[#556652] rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                </div>
                <h3 className="text-xl font-serif text-[#2C352B]">{t.successMsg}</h3>
            </div>
        );
    }

    return (
        <section className="max-w-2xl mx-auto px-6 py-12">
            <div className="bg-white rounded-2xl border border-[#CBD5CC]/60 p-6 md:p-10 shadow-sm space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-[#2C352B]">
                        {t.title}
                    </h2>
                    <p className="text-xs text-[#2C352B]/60">{t.subtitle(formatDeadline(lang))}</p>
                    <div className="text-xs text-[#556652] leading-relaxed bg-[#F4F6F4] border border-[#CBD5CC]/60 rounded-lg px-4 py-3 mt-3 space-y-2">
                        <p className="italic">{t.childFreeNote}</p>
                        <p className="not-italic text-[#2C352B]">
                            {t.childFreeContact}{' '}
                            <a href="tel:+380966440534" className="font-medium underline underline-offset-2 hover:text-[#556652]">Olena +380 96 644 0534</a>
                            {' · '}
                            <a href="tel:+31622348217" className="font-medium underline underline-offset-2 hover:text-[#556652]">Dennis +31 6 22348217</a>
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Main Guest Name */}
                    <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#2C352B] mb-2">
                            {t.nameLabel} *
                        </label>
                        <input
                            type="text"
                            required
                            placeholder={t.namePlaceholder}
                            value={formData.mainName}
                            onChange={(e) => setFormData({ ...formData, mainName: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#CBD5CC] focus:outline-none focus:ring-1 focus:ring-[#556652]"
                        />
                    </div>

                    {/* Attendance */}
                    <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#2C352B] mb-2">
                            {t.attendingLabel} *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, attending: 'yes' })}
                                className={`py-2.5 px-4 text-xs font-medium rounded-lg border transition ${formData.attending === 'yes'
                                        ? 'bg-[#556652] text-white border-[#556652]'
                                        : 'bg-white text-gray-600 border-[#CBD5CC] hover:bg-gray-50'
                                    }`}
                            >
                                {t.attendingYes}
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, attending: 'no' })}
                                className={`py-2.5 px-4 text-xs font-medium rounded-lg border transition ${formData.attending === 'no'
                                        ? 'bg-[#2C352B] text-white border-[#2C352B]'
                                        : 'bg-white text-gray-600 border-[#CBD5CC] hover:bg-gray-50'
                                    }`}
                            >
                                {t.attendingNo}
                            </button>
                        </div>
                    </div>

                    {/* Additional fields if attending */}
                    {formData.attending === 'yes' && (
                        <>
                            {/* Кількість дорослих */}
                            <div>
                                <label className="block text-xs font-medium uppercase tracking-wider text-[#2C352B] mb-2">
                                    {t.adultsLabel} *
                                </label>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => handleAdultsCountChange(formData.adultsCount - 1)}
                                        disabled={formData.adultsCount <= 1}
                                        className="w-10 h-10 rounded-lg border border-[#CBD5CC] bg-white text-[#2C352B] flex items-center justify-center text-lg font-bold hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                    >
                                        –
                                    </button>
                                    <span className="w-8 text-center text-base font-semibold text-[#2C352B]">
                                        {formData.adultsCount}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleAdultsCountChange(formData.adultsCount + 1)}
                                        disabled={formData.adultsCount >= 10}
                                        className="w-10 h-10 rounded-lg border border-[#CBD5CC] bg-white text-[#2C352B] flex items-center justify-center text-lg font-bold hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Additional Adults Names */}
                            {formData.additionalAdults.map((guestName, index) => (
                                <div key={index} className="pl-4 border-l-2 border-[#556652]/40 space-y-2">
                                    <label className="block text-xs font-medium uppercase tracking-wider text-[#2C352B]">
                                        {t.guestNameLabel} #{index + 2} *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t.guestNamePlaceholder}
                                        value={guestName}
                                        onChange={(e) => handleAdditionalAdultChange(index, e.target.value)}
                                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#CBD5CC] focus:outline-none focus:ring-1 focus:ring-[#556652]"
                                    />
                                </div>
                            ))}

                            {/* Dietary / Wishes */}
                            <div>
                                <label className="block text-xs font-medium uppercase tracking-wider text-[#2C352B] mb-2">
                                    {isPartyOnly ? t.dietLabelParty : t.dietLabelFull}
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder={t.dietPlaceholder}
                                    value={formData.dietary}
                                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                                    className="w-full px-4 py-2 text-xs rounded-lg border border-[#CBD5CC] focus:outline-none focus:ring-1 focus:ring-[#556652]"
                                ></textarea>
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-[#556652] text-white rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-[#445242] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <Send size={14} />
                        {loading ? t.sendingBtn : t.submitBtn}
                    </button>
                </form>
            </div>
        </section>
    );
}