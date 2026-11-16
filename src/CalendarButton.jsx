import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { EVENT } from './config';

const texts = {
    ua: {
        title: 'Весілля Денніса та Олени',
        description: 'Beach Boho Wedding. Збір гостей о 13:30, церемонія о 14:00.',
        descriptionParty: 'Beach Boho Wedding. Збір вечірніх гостей о 19:30.',
        google: 'Google Calendar',
        ics: 'Apple / Outlook (.ics)',
    },
    nl: {
        title: 'Bruiloft Dennis & Olena',
        description: 'Beach Boho Wedding. Ontvangst om 13:30, ceremonie om 14:00.',
        descriptionParty: 'Beach Boho Wedding. Ontvangst avondgasten om 19:30.',
        google: 'Google Agenda',
        ics: 'Apple / Outlook (.ics)',
    },
    de: {
        title: 'Hochzeit Dennis & Olena',
        description: 'Beach Boho Wedding. Empfang um 13:30, Zeremonie um 14:00.',
        descriptionParty: 'Beach Boho Wedding. Empfang der Abendgäste um 19:30.',
        google: 'Google Kalender',
        ics: 'Apple / Outlook (.ics)',
    },
};

// 2027-07-10T12:00:00Z -> 20270710T120000Z
const toCalendarStamp = (iso) => iso.replace(/[-:]/g, '').replace(/\.\d{3}/, '');

// Екранування спецсимволів за форматом iCalendar
const escapeIcs = (value) =>
    value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');

export default function CalendarButton({ lang = 'ua', label, isPartyOnly = false }) {
    const t = texts[lang] || texts.ua;
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Закриваємо меню кліком поза ним або клавішею Escape
    useEffect(() => {
        if (!open) return undefined;
        const onClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', onClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    // Вечірні гості (?type=party) отримують подію з 19:30, решта — з моменту збору гостей
    const start = toCalendarStamp(isPartyOnly ? EVENT.partyStartUtc : EVENT.startUtc);
    const end = toCalendarStamp(EVENT.endUtc);
    const description = isPartyOnly ? t.descriptionParty : t.description;

    const googleUrl =
        'https://calendar.google.com/calendar/render?action=TEMPLATE' +
        `&text=${encodeURIComponent(t.title)}` +
        `&dates=${start}/${end}` +
        `&details=${encodeURIComponent(description)}` +
        `&location=${encodeURIComponent(EVENT.location)}`;

    const downloadIcs = () => {
        const lines = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Dennis and Olena//Wedding//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            'UID:wedding-2027-07-10@dennis-olena',
            `DTSTAMP:${toCalendarStamp(new Date().toISOString())}`,
            `DTSTART:${start}`,
            `DTEND:${end}`,
            `SUMMARY:${escapeIcs(t.title)}`,
            `DESCRIPTION:${escapeIcs(description)}`,
            `LOCATION:${escapeIcs(EVENT.location)}`,
            'BEGIN:VALARM',
            'TRIGGER:-P1D',
            'ACTION:DISPLAY',
            `DESCRIPTION:${escapeIcs(t.title)}`,
            'END:VALARM',
            'END:VEVENT',
            'END:VCALENDAR',
        ];
        const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'dennis-olena-wedding.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setOpen(false);
    };

    const itemClass =
        'block w-full text-left px-4 py-2.5 text-xs font-medium text-[#2C352B] hover:bg-[#F4F6F4] transition-colors';

    return (
        <div ref={wrapperRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-haspopup="true"
                aria-expanded={open}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#556652] text-white px-5 py-3 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#435241] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
                <Calendar size={14} />
                {label}
                <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute left-0 top-full mt-2 z-30 min-w-full w-56 bg-white rounded-xl border border-[#CBD5CC] shadow-lg overflow-hidden">
                    <a
                        href={googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className={itemClass}
                    >
                        {t.google}
                    </a>
                    <button type="button" onClick={downloadIcs} className={`${itemClass} border-t border-[#E2E8E1]`}>
                        {t.ics}
                    </button>
                </div>
            )}
        </div>
    );
}