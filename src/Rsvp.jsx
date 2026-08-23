import React, { useState } from 'react';
import { Plus, Trash2, Send, Check } from 'lucide-react';

const translations = {
    ua: {
        title: "Підтвердження присутності",
        subtitle: "Будь ласка, дайте відповідь до 1 травня 2027 року",
        nameLabel: "Ваше ім'я та прізвище (Головний гість)",
        namePlaceholder: "напр. Тарас Шевченко",
        attendingLabel: "Чи зможете ви бути з нами?",
        attendingYes: "Так, із задоволенням!",
        attendingNo: "Ні, на жаль, не можу",
        adultsLabel: "Загальна кількість дорослих",
        guestNameLabel: "Ім'я та прізвище супроводжуючого гостя",
        guestNamePlaceholder: "напр. Олена Шевченко",
        hasChildrenLabel: "Чи буде з вами дитина?",
        hasChildrenYes: "Так, будемо з дитиною",
        hasChildrenNo: "Ні, без дітей",
        childrenTitle: "Відомості про дітей (для ресторану)",
        addChildBtn: "+ Додати дитину",
        childName: "Ім'я дитини",
        childAge: "Вік",
        dietLabelFull: "Обмеження в харчуванні, алергії або особливі побажання (необов'язково)",
        dietLabelParty: "Особливі побажання щодо напоїв або алергії (необов'язково)",
        dietPlaceholder: "напр. Вегетаріанство, алергія на горіхи, веган...",
        submitBtn: "Надіслати",
        sendingBtn: "Надсилання...",
        successMsg: "Дякуємо! Вашу відповідь успішно збережено ❤️"
    },
    nl: {
        title: "Aanwezigheid bevestigen",
        subtitle: "Laat het ons weten voor 1 mei 2027",
        nameLabel: "Volledige naam (Hoofdgast)",
        namePlaceholder: "bijv. Jan de Vries",
        attendingLabel: "Ben je erbij?",
        attendingYes: "Ja, ik ben erbij!",
        attendingNo: "Nee, ik kan helaas niet",
        adultsLabel: "Totaal aantal volwassenen",
        guestNameLabel: "Naam extra volwassene",
        guestNamePlaceholder: "bijv. Anna de Vries",
        hasChildrenLabel: "Komen er kinderen mee?",
        hasChildrenYes: "Ja, er komen kinderen mee",
        hasChildrenNo: "Nee, geen kinderen",
        childrenTitle: "Gegevens van de kinderen (voor de locatie)",
        addChildBtn: "+ Kind toevoegen",
        childName: "Naam kind",
        childAge: "Leeftijd",
        dietLabelFull: "Dieetwensen, allergieën of speciale verzoeken (optioneel)",
        dietLabelParty: "Speciale drankwensen of allergieën (optioneel)",
        dietPlaceholder: "bijv. Vegetarisch, glutenvrij, nootallergie...",
        submitBtn: "Versturen",
        sendingBtn: "Versturen...",
        successMsg: "Bedankt! Je reactie is succesvol verzonden ❤️"
    },
    de: {
        title: "Anwesenheit bestätigen",
        subtitle: "Bitte antworten Sie bis zum 1. Mai 2027",
        nameLabel: "Vollständiger Name (Hauptgast)",
        namePlaceholder: "z.B. Max Mustermann",
        attendingLabel: "Wirst du dabei sein?",
        attendingYes: "Ja, ich bin dabei!",
        attendingNo: "Nein, ich kann leider nicht",
        adultsLabel: "Gesamtzahl der Erwachsenen",
        guestNameLabel: "Name des begleitenden Gastes",
        guestNamePlaceholder: "z.B. Erika Mustermann",
        hasChildrenLabel: "Bringen Sie Kinder mit?",
        hasChildrenYes: "Ja, mit Kindern",
        hasChildrenNo: "Nein, ohne Kinder",
        childrenTitle: "Angaben zu den Kindern (für das Restaurant)",
        addChildBtn: "+ Kind hinzufügen",
        childName: "Name des Kindes",
        childAge: "Alter",
        dietLabelFull: "Diätetische Einschränkungen, Allergien oder besondere Wünsche (optional)",
        dietLabelParty: "Besondere Getränkewünsche oder Allergien (optional)",
        dietPlaceholder: "z.B. Vegetarisch, Glutenfrei, Nussallergie...",
        submitBtn: "Absenden",
        sendingBtn: "Wird gesendet...",
        successMsg: "Vielen Dank! Ihre Antwort wurde erfolgreich gesendet ❤️"
    }
};

export default function Rsvp({ lang = 'ua' }) {
    const t = translations[lang] || translations.ua;

    const searchParams = new URLSearchParams(window.location.search);
    const isPartyOnly = searchParams.get('type') === 'party';

    const [formData, setFormData] = useState({
        mainName: '',
        attending: 'yes',
        adultsCount: 1,
        additionalAdults: [], // Масив для імен додаткових дорослих
        hasChildren: 'no',
        dietary: ''
    });

    const [children, setChildren] = useState([{ name: '', age: '' }]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // Зміна кількості дорослих
    const handleAdultsCountChange = (count) => {
        const newCount = Math.max(1, count);
        const currentAdditional = [...formData.additionalAdults];
        
        if (newCount - 1 > currentAdditional.length) {
            // Додаємо порожні поля для нових дорослих
            while (currentAdditional.length < newCount - 1) {
                currentAdditional.push('');
            }
        } else {
            // Обрізаємо масив якщо кількість зменшилась
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

    const addChild = () => {
        setChildren([...children, { name: '', age: '' }]);
    };

    const removeChild = (index) => {
        setChildren(children.filter((_, i) => i !== index));
    };

    const handleChildChange = (index, field, value) => {
        const updated = [...children];
        updated[index][field] = value;
        setChildren(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScWInPJ5435Cg5H7uzOitjAsuyI5u5Mn_EbZ3GRUFqaAb-uag/formResponse";

        // Формуємо повний список імен дорослих
        const allAdultsNames = [
            formData.mainName,
            ...formData.additionalAdults.filter(name => name.trim() !== '')
        ].join(', ');

        // Інформація про дітей
        const childrenCount = formData.hasChildren === 'yes' ? children.length : 0;
        const childrenDetails = formData.hasChildren === 'yes'
            ? children.map(c => `${c.name} (${c.age} y.o.)`).join(', ')
            : '0';

        const childrenString = childrenCount > 0 ? `${childrenCount} (${childrenDetails})` : '0';

        const formPayload = new URLSearchParams();
        formPayload.append("entry.280550367", allAdultsNames);                                            // Full name (Усі дорослі)
        formPayload.append("entry.1728895548", formData.attending === 'yes' ? 'Yes' : 'No');             // Will you join us?
        formPayload.append("entry.655186030", formData.attending === 'yes' ? formData.adultsCount : 0); // Number of Adults
        formPayload.append("entry.1289813742", formData.attending === 'yes' ? childrenString : '0');      // Number of Children
        formPayload.append("entry.15760116", formData.dietary || 'None');                                // Alergie / Proposal

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
            <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl border border-[#E6D5BC] shadow-md text-center space-y-4">
                <div className="w-12 h-12 bg-[#C17A63]/10 text-[#C17A63] rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                </div>
                <h3 className="text-xl font-serif text-[#3D3433]">{t.successMsg}</h3>
            </div>
        );
    }

    return (
        <section className="max-w-2xl mx-auto px-6 py-12">
            <div className="bg-white rounded-2xl border border-[#E6D5BC]/60 p-6 md:p-10 shadow-sm space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-serif text-[#3D3433]">
                        {t.title}
                    </h2>
                    <p className="text-xs text-gray-500">{t.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Main Guest Name */}
                    <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                            {t.nameLabel} *
                        </label>
                        <input
                            type="text"
                            required
                            placeholder={t.namePlaceholder}
                            value={formData.mainName}
                            onChange={(e) => setFormData({ ...formData, mainName: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E6D5BC] focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                        />
                    </div>

                    {/* Attendance */}
                    <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                            {t.attendingLabel} *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, attending: 'yes' })}
                                className={`py-2.5 px-4 text-xs font-medium rounded-lg border transition ${formData.attending === 'yes'
                                        ? 'bg-[#C17A63] text-white border-[#C17A63]'
                                        : 'bg-white text-gray-600 border-[#E6D5BC] hover:bg-gray-50'
                                    }`}
                            >
                                {t.attendingYes}
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, attending: 'no' })}
                                className={`py-2.5 px-4 text-xs font-medium rounded-lg border transition ${formData.attending === 'no'
                                        ? 'bg-[#3D3433] text-white border-[#3D3433]'
                                        : 'bg-white text-gray-600 border-[#E6D5BC] hover:bg-gray-50'
                                    }`}
                            >
                                {t.attendingNo}
                            </button>
                        </div>
                    </div>

                    {/* Additional fields if attending */}
                    {formData.attending === 'yes' && (
                        <>
                            {/* Number of Adults */}
                            <div>
                                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                                    {t.adultsLabel} *
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    required
                                    value={formData.adultsCount}
                                    onChange={(e) => handleAdultsCountChange(parseInt(e.target.value) || 1)}
                                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E6D5BC] focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                />
                            </div>

                            {/* Additional Adults Names */}
                            {formData.additionalAdults.map((guestName, index) => (
                                <div key={index} className="pl-4 border-l-2 border-[#C17A63]/40 space-y-2">
                                    <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D]">
                                        {t.guestNameLabel} #{index + 2} *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t.guestNamePlaceholder}
                                        value={guestName}
                                        onChange={(e) => handleAdditionalAdultChange(index, e.target.value)}
                                        className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E6D5BC] focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                    />
                                </div>
                            ))}

                            {/* Has Children */}
                            <div>
                                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                                    {t.hasChildrenLabel}
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, hasChildren: 'yes' })}
                                        className={`py-2 px-4 text-xs font-medium rounded-lg border transition ${formData.hasChildren === 'yes'
                                                ? 'bg-[#C17A63] text-white border-[#C17A63]'
                                                : 'bg-white text-gray-600 border-[#E6D5BC]'
                                            }`}
                                    >
                                        {t.hasChildrenYes}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, hasChildren: 'no' })}
                                        className={`py-2 px-4 text-xs font-medium rounded-lg border transition ${formData.hasChildren === 'no'
                                                ? 'bg-[#C17A63] text-white border-[#C17A63]'
                                                : 'bg-white text-gray-600 border-[#E6D5BC]'
                                            }`}
                                    >
                                        {t.hasChildrenNo}
                                    </button>
                                </div>
                            </div>

                            {/* Children details */}
                            {formData.hasChildren === 'yes' && (
                                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E6D5BC]/60 space-y-4">
                                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#3D3433]">
                                        👶 {t.childrenTitle}
                                    </h4>

                                    {children.map((child, index) => (
                                        <div key={index} className="flex gap-2 items-center">
                                            <input
                                                type="text"
                                                placeholder={t.childName}
                                                required
                                                value={child.name}
                                                onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                                                className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#E6D5BC] bg-white focus:outline-none"
                                            />
                                            <input
                                                type="number"
                                                placeholder={t.childAge}
                                                required
                                                min="0"
                                                max="17"
                                                value={child.age}
                                                onChange={(e) => handleChildChange(index, 'age', e.target.value)}
                                                className="w-24 px-3 py-2 text-xs rounded-lg border border-[#E6D5BC] bg-white focus:outline-none"
                                            />
                                            {children.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeChild(index)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={addChild}
                                        className="inline-flex items-center gap-1 text-xs text-[#C17A63] font-medium hover:underline pt-1"
                                    >
                                        <Plus size={14} /> {t.addChildBtn}
                                    </button>
                                </div>
                            )}

                            {/* Dietary / Wishes */}
                            <div>
                                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                                    {isPartyOnly ? t.dietLabelParty : t.dietLabelFull}
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder={t.dietPlaceholder}
                                    value={formData.dietary}
                                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                                    className="w-full px-4 py-2 text-xs rounded-lg border border-[#E6D5BC] focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                ></textarea>
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-[#C17A63] text-white rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-[#A9644F] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <Send size={14} />
                        {loading ? t.sendingBtn : t.submitBtn}
                    </button>
                </form>
            </div>
        </section>
    );
}