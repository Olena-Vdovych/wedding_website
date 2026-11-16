import React from 'react';
import { Camera } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { PHOTO_UPLOAD_URL } from './config';

const translations = {
    ua: {
        title: 'Поділіться фото',
        text: 'Зробили гарні кадри на святі? Скануйте QR-код камерою телефона або натисніть кнопку й додайте фото до нашого спільного альбому. Ми дуже хочемо побачити свято вашими очима.',
        button: 'Завантажити фото',
        qrLabel: 'QR-код для завантаження фото до спільного альбому',
    },
    nl: {
        title: 'Deel je foto’s',
        text: 'Mooie foto’s gemaakt tijdens het feest? Scan de QR-code met je telefoon of klik op de knop en voeg je foto’s toe aan ons gedeelde album. We zien het feest graag door jullie ogen.',
        button: 'Foto’s uploaden',
        qrLabel: 'QR-code om foto’s te uploaden naar het gedeelde album',
    },
    de: {
        title: 'Teilt eure Fotos',
        text: 'Schöne Fotos auf der Feier gemacht? Scannt den QR-Code mit dem Handy oder klickt auf den Button und fügt eure Fotos unserem gemeinsamen Album hinzu. Wir sehen das Fest gern durch eure Augen.',
        button: 'Fotos hochladen',
        qrLabel: 'QR-Code zum Hochladen von Fotos in das gemeinsame Album',
    },
};

export default function PhotoShare({ lang = 'ua' }) {
    // Поки в config.js немає посилання на альбом, розділ не показуємо
    if (!PHOTO_UPLOAD_URL) return null;

    const t = translations[lang] || translations.ua;

    return (
        <section className="max-w-xl mx-auto px-6 py-12 text-center space-y-5" aria-labelledby="photos-title">
            <div className="w-12 h-12 bg-[#E2E8E1]/70 border border-[#CBD5CC] rounded-full flex items-center justify-center text-[#556652] shadow-xs mx-auto">
                <Camera size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 id="photos-title" className="text-2xl font-serif text-[#2C352B]">
                {t.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed max-w-lg mx-auto">{t.text}</p>

            <div className="inline-block p-3 bg-white rounded-2xl border border-[#CBD5CC] shadow-sm">
                <QRCodeSVG
                    value={PHOTO_UPLOAD_URL}
                    size={176}
                    level="M"
                    marginSize={1}
                    fgColor="#2C352B"
                    bgColor="#FFFFFF"
                    title={t.qrLabel}
                />
            </div>

            <div>
                <a
                    href={PHOTO_UPLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#556652] text-white px-5 py-3 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#435241] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                >
                    <Camera size={14} aria-hidden="true" />
                    {t.button}
                </a>
            </div>
        </section>
    );
}