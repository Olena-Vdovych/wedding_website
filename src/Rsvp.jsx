import React, { useState } from 'react';
import { Plus, Trash2, Send, Check } from 'lucide-react';

const translations = {
    ua: {
        title: "Підтвердження присутності",
        subtitle: "Будь ласка, дайте відповідь до 1 травня 2027 року",
        nameLabel: "Ваше ім'я та прізвище",
        attendingLabel: "Чи зможете ви прийти?",
        attendingYes: "Так, із задоволенням!",
        attendingNo: "На жаль, не зможу",
        hasChildrenLabel: "Чи будуть з вами діти?",
        hasChildrenYes: "Так, будемо з дітьми",
        hasChildrenNo: "Ні, без дітей",
        childrenTitle: "Інформація про дітей (для ресторану)",
        addChildBtn: "+ Додати дитину",
        childName: "Ім'я дитини",
        childAge: "Вік (років)",
        dietLabel: "Харчові обмеження або алергії (необов'язково)",
        submitBtn: "Надіслати відповідь",
        successMsg: "Дякуємо! Вашу відповідь успішно надіслано ❤️"
    },
    nl: {
        title: "Aanwezigheid bevestigen",
        subtitle: "Gelieve te reageren vóór 1 mei 2027",
        nameLabel: "Uw voor- en achternaam",
        attendingLabel: "Kunt u aanwezig zijn?",
        attendingYes: "Ja, heel graag!",
        attendingNo: "Helaas kan ik niet",
        hasChildrenLabel: "Komen er kinderen mee?",
        hasChildrenYes: "Ja, we nemen kinderen mee",
        hasChildrenNo: "Nee, zonder kinderen",
        childrenTitle: "Informatie over kinderen (voor het restaurant)",
        addChildBtn: "+ Kind toevoegen",
        childName: "Naam van het kind",
        childAge: "Leeftijd (jaar)",
        dietLabel: "Dieetwensen of allergieën (optioneel)",
        submitBtn: "Antwoord versturen",
        successMsg: "Bedankt! Uw antwoord is succesvol verzonden ❤️"
    },
    de: {
        title: "Bestätigung der Teilnahme",
        subtitle: "Bitte antworten Sie bis zum 1. Mai 2027",
        nameLabel: "Ihr Vor- und Nachname",
        attendingLabel: "Können Sie kommen?",
        attendingYes: "Ja, sehr gerne!",
        attendingNo: "Leider kann ich nicht",
        hasChildrenLabel: "Kommen Kinder mit?",
        hasChildrenYes: "Ja, mit Kindern",
        hasChildrenNo: "Nein, ohne Kinder",
        childrenTitle: "Informationen zu Kindern (für das Restaurant)",
        addChildBtn: "+ Kind hinzufügen",
        childName: "Name des Kindes",
        childAge: "Alter (Jahre)",
        dietLabel: "Diätetische Einschränkungen oder Allergien (optional)",
        submitBtn: "Antwort senden",
        successMsg: "Vielen Dank! Ihre Antwort wurde erfolgreich gesendet ❤️"
    }
};

export default function Rsvp({ lang = 'ua' }) {
    const t = translations[lang] || translations.ua;

    const [formData, setFormData] = useState({
        name: '',
        attending: 'yes',
        hasChildren: 'no',
        dietary: ''
    });

    const [children, setChildren] = useState([{ name: '', age: '' }]);
    const [submitted, setSubmitted] = useState(false);

    // Додати нове поле для дитини
    const addChild = () => {
        setChildren([...children, { name: '', age: '' }]);
    };

    // Видалити поле дитини
    const removeChild = (index) => {
        setChildren(children.filter((_, i) => i !== index));
    };

    // Зміна даних дитини
    const handleChildChange = (index, field, value) => {
        const updated = [...children];
        updated[index][field] = value;
        setChildren(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Тут формуються підсумкові дані
        const finalData = {
            ...formData,
            children: formData.hasChildren === 'yes' ? children : []
        };

        console.log("Відправка RSVP:", finalData);
        setSubmitted(true);
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
                    {/* Ім'я гостя */}
                    <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                            {t.nameLabel} *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E6D5BC] focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                        />
                    </div>

                    {/* Чи прийде */}
                    <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                            {t.attendingLabel}
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

                    {/* Якщо прийде — запитуємо про дітей */}
                    {formData.attending === 'yes' && (
                        <>
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

                            {/* Секція додавання дітей */}
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

                            {/* Особливі дієтичні побажання */}
                            <div>
                                <label className="block text-xs font-medium uppercase tracking-wider text-[#4A3E3D] mb-2">
                                    {t.dietLabel}
                                </label>
                                <textarea
                                    rows={2}
                                    value={formData.dietary}
                                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                                    className="w-full px-4 py-2 text-xs rounded-lg border border-[#E6D5BC] focus:outline-none focus:ring-1 focus:ring-[#C17A63]"
                                ></textarea>
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#C17A63] text-white rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-[#A9644F] transition shadow-md flex items-center justify-center gap-2"
                    >
                        <Send size={14} />
                        {t.submitBtn}
                    </button>
                </form>
            </div>
        </section>
    );
}