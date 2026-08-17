import React, { useState } from 'react';
import { Plus, Trash2, Users, CheckCircle2 } from 'lucide-react';

export default function Rsvp() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [mainName, setMainName] = useState('');
    const [attendance, setAttendance] = useState('Yes');
    const [dietary, setDietary] = useState('');
    const [plusOnes, setPlusOnes] = useState([]);

    // Посилання на вашу Google Форму для відправки:
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScWInPJ5435Cg5H7uzOitjAsuyI5u5Mn_EbZ3GRUFqaAb-uag/formResponse";

    const handleAddPlusOne = () => setPlusOnes([...plusOnes, '']);
    const handleRemovePlusOne = (index) => setPlusOnes(plusOnes.filter((_, i) => i !== index));
    const handlePlusOneChange = (index, value) => {
        const updated = [...plusOnes];
        updated[index] = value;
        setPlusOnes(updated);
    };

    const totalGuests = attendance === 'Yes' ? 1 + plusOnes.filter(n => n.trim() !== '').length : 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Збираємо основне ім'я та всіх додаткових гостей у один рядок
        const allNamesList = attendance === 'Yes'
            ? [mainName, ...plusOnes.filter(n => n.trim() !== '')].map((name, i) => `${i + 1}. ${name}`).join(' | ')
            : mainName;

        const formData = new FormData();

        // 🎯 Ваші точні ID полів з pre-filled посилання:
        formData.append("entry.280550367", `${allNamesList} (Всього: ${totalGuests} осіб)`);
        formData.append("entry.1728895548", attendance);
        formData.append("entry.15760116", dietary);

        fetch(GOOGLE_FORM_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors",
        })
            .then(() => {
                setLoading(false);
                setSubmitted(true);
            })
            .catch((error) => {
                console.error("Error!", error);
                setLoading(false);
            });
    };

    return (
        <section className="max-w-lg mx-auto p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#E6D5BC]/50 my-8">
            <h2 className="text-2xl font-serif text-center text-[#3D3433] mb-6 flex justify-center items-center gap-2">
                <Users className="text-[#C17A63]" /> RSVP / Підтвердження
            </h2>

            {submitted ? (
                <div className="text-center p-6 bg-green-50 text-green-800 rounded-xl border border-green-200 space-y-2">
                    <CheckCircle2 size={40} className="mx-auto text-green-600 mb-2" />
                    <p className="font-serif text-xl font-semibold">Дякуємо! Відповідь збережено 🎉</p>
                    <p className="text-sm">
                        {attendance === 'Yes'
                            ? `З нетерпінням чекаємо на вас (${totalGuests} осіб)!`
                            : 'Дякуємо, що повідомили!'}
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-[#3D3433] mb-1">
                            Name & Surname / Ваше ім'я та прізвище *
                        </label>
                        <input
                            type="text"
                            required
                            value={mainName}
                            onChange={(e) => setMainName(e.target.value)}
                            placeholder="напр. Olena Vdovych"
                            className="w-full px-4 py-2 border border-[#E6D5BC] rounded-lg focus:ring-2 focus:ring-[#C17A63] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#3D3433] mb-1">
                            Are you coming? / Чи будете ви на весіллі? *
                        </label>
                        <select
                            value={attendance}
                            onChange={(e) => setAttendance(e.target.value)}
                            className="w-full px-4 py-2 border border-[#E6D5BC] rounded-lg focus:ring-2 focus:ring-[#C17A63] outline-none bg-white"
                        >
                            <option value="Yes">Yes / Так 🎉</option>
                            <option value="No">No / Ні 😔</option>
                        </select>
                    </div>

                    {attendance === 'Yes' && (
                        <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E6D5BC]/60 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-[#3D3433]">Додати супроводжуючих (+1, сім'я):</span>
                                <span className="text-xs bg-[#C17A63]/10 text-[#C17A63] px-2.5 py-1 rounded-full font-semibold">
                                    Всього: {totalGuests}
                                </span>
                            </div>

                            {plusOnes.map((guest, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <input
                                        type="text"
                                        required
                                        value={guest}
                                        onChange={(e) => handlePlusOneChange(index, e.target.value)}
                                        placeholder={`Ім'я та прізвище гостя №${index + 1}`}
                                        className="flex-1 px-3 py-1.5 text-sm border border-[#E6D5BC] rounded-lg focus:ring-2 focus:ring-[#C17A63] outline-none bg-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemovePlusOne(index)}
                                        className="p-1.5 text-red-500 hover:text-red-700 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={handleAddPlusOne}
                                className="w-full py-2 px-3 border border-dashed border-[#C17A63] text-[#C17A63] hover:bg-[#C17A63]/5 rounded-lg text-sm font-medium flex justify-center items-center gap-1.5"
                            >
                                <Plus size={16} /> + Додати ще гостя (партнера / дитину)
                            </button>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-[#3D3433] mb-1">
                            Alergie / Proposal / Побажання щодо їжі чи алергії
                        </label>
                        <textarea
                            rows="2"
                            value={dietary}
                            onChange={(e) => setDietary(e.target.value)}
                            placeholder="Алергії, вегетаріанство або коментарі..."
                            className="w-full px-4 py-2 border border-[#E6D5BC] rounded-lg focus:ring-2 focus:ring-[#C17A63] outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#C17A63] hover:bg-[#a86450] text-white font-medium py-3 rounded-xl transition duration-200 shadow-md disabled:opacity-50"
                    >
                        {loading ? "Надсилання..." : "Send / Надіслати"}
                    </button>
                </form>
            )}
        </section>
    );
}