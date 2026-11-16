import React from 'react';
import { Car, TrainFront, Moon, BedDouble, MapPin } from 'lucide-react';
import ContactLinks from './ContactLinks';

const translations = {
    ua: {
        title: 'Як дістатися та де зупинитися',
        getThere: 'Як дістатися',
        carTitle: 'Автомобілем',
        carText:
            'Від аеропорту Schiphol близько 35 км, від Leiden близько 7 км. Паркінг біля павільйону описано вище (орієнтовно 10 € за день, точну ціну перевірте на місці).',
        trainTitle: 'Потягом і автобусом',
        trainText:
            'У Katwijk немає залізничної станції. Доїдьте потягом до Leiden Centraal (зі Schiphol це приблизно 15–20 хвилин), а далі автобусом R-net до Katwijk aan Zee, це ще приблизно 15–20 хвилин. Актуальний маршрут і розклад дивіться на 9292.nl.',
        nightTitle: 'Повертаючись пізно',
        nightText:
            'Свято триває до опівночі, а нічне сполучення з Katwijk обмежене. Заздалегідь перевірте останній рейс або домовтеся про таксі чи ночівлю неподалік.',
        stay: 'Де зупинитися',
        stayIntro:
            'Липень — високий сезон на узбережжі, тому житло краще бронювати заздалегідь. Кілька ідей поруч із бульваром:',
        stayMore:
            'Більше варіантів є в Leiden (близько 7 км) і сусідньому Noordwijk. Житло ми не бронюємо, тому наявність і ціни перевіряйте самостійно.',
        help: 'Потрібна порада? Зателефонуйте нам:',
        onMap: 'На карті',
        hotels: [
            { name: 'Hotel Noordzee', address: 'Boulevard 72', note: 'готель біля пляжу' },
            { name: 'Hotel Zee en Duin', address: 'Boulevard 5', note: 'готель на бульварі' },
            { name: 'Steeds aan Zee', address: 'Koningin Wilhelminastraat 14', note: 'номери й апартаменти в центрі, пішки до пляжу' },
            { name: 'Beach Hotel Katwijk', address: 'Badstraat 9', note: 'бюджетний варіант за 200 м від бульвару' },
        ],
    },
    nl: {
        title: 'Route & overnachten',
        getThere: 'Hoe kom je er?',
        carTitle: 'Met de auto',
        carText:
            'Vanaf Schiphol is het ongeveer 35 km, vanaf Leiden ongeveer 7 km. Parkeren bij het paviljoen staat hierboven beschreven (ongeveer € 10 per dag, controleer de prijs ter plekke).',
        trainTitle: 'Met trein en bus',
        trainText:
            'Katwijk heeft geen treinstation. Reis met de trein naar Leiden Centraal (vanaf Schiphol ongeveer 15–20 minuten) en neem daar de R-net bus naar Katwijk aan Zee, nog ongeveer 15–20 minuten. De actuele route en dienstregeling vind je op 9292.nl.',
        nightTitle: 'Laat terug',
        nightText:
            'Het feest duurt tot middernacht en het nachtvervoer vanuit Katwijk is beperkt. Check vooraf de laatste bus of regel een taxi of een slaapplek in de buurt.',
        stay: 'Overnachten',
        stayIntro:
            'Juli is hoogseizoen aan de kust, dus boek op tijd. Een paar ideeën vlak bij de boulevard:',
        stayMore:
            'Meer keuze vind je in Leiden (ongeveer 7 km) en in het naastgelegen Noordwijk. Wij boeken geen accommodatie, dus controleer zelf beschikbaarheid en prijzen.',
        help: 'Advies nodig? Bel ons:',
        onMap: 'Op de kaart',
        hotels: [
            { name: 'Hotel Noordzee', address: 'Boulevard 72', note: 'hotel bij het strand' },
            { name: 'Hotel Zee en Duin', address: 'Boulevard 5', note: 'hotel aan de boulevard' },
            { name: 'Steeds aan Zee', address: 'Koningin Wilhelminastraat 14', note: 'kamers en appartementen in het centrum, op loopafstand van het strand' },
            { name: 'Beach Hotel Katwijk', address: 'Badstraat 9', note: 'budgetoptie op 200 m van de boulevard' },
        ],
    },
    de: {
        title: 'Anreise & Übernachtung',
        getThere: 'Anreise',
        carTitle: 'Mit dem Auto',
        carText:
            'Vom Flughafen Schiphol sind es etwa 35 km, von Leiden etwa 7 km. Das Parken am Pavillon ist oben beschrieben (ca. 10 € pro Tag, bitte vor Ort prüfen).',
        trainTitle: 'Mit Zug und Bus',
        trainText:
            'Katwijk hat keinen Bahnhof. Fahrt mit dem Zug nach Leiden Centraal (ab Schiphol etwa 15–20 Minuten) und weiter mit dem R-net-Bus nach Katwijk aan Zee, das dauert nochmal etwa 15–20 Minuten. Die aktuelle Verbindung findet ihr auf 9292.nl.',
        nightTitle: 'Späte Rückfahrt',
        nightText:
            'Die Feier dauert bis Mitternacht und der Nachtverkehr ab Katwijk ist eingeschränkt. Prüft vorab die letzte Verbindung oder organisiert ein Taxi bzw. eine Unterkunft in der Nähe.',
        stay: 'Übernachten',
        stayIntro:
            'Der Juli ist Hochsaison an der Küste, bucht also rechtzeitig. Ein paar Ideen ganz in der Nähe der Strandpromenade:',
        stayMore:
            'Mehr Auswahl gibt es in Leiden (etwa 7 km) und im benachbarten Noordwijk. Wir buchen keine Unterkünfte, bitte prüft Verfügbarkeit und Preise selbst.',
        help: 'Brauchst du einen Tipp? Ruf uns an:',
        onMap: 'Auf der Karte',
        hotels: [
            { name: 'Hotel Noordzee', address: 'Boulevard 72', note: 'Hotel am Strand' },
            { name: 'Hotel Zee en Duin', address: 'Boulevard 5', note: 'Hotel an der Strandpromenade' },
            { name: 'Steeds aan Zee', address: 'Koningin Wilhelminastraat 14', note: 'Zimmer und Apartments im Zentrum, zu Fuß zum Strand' },
            { name: 'Beach Hotel Katwijk', address: 'Badstraat 9', note: 'günstige Option, 200 m von der Promenade' },
        ],
    },
};

const mapsLink = (hotel) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${hotel.name} ${hotel.address} Katwijk aan Zee`
    )}`;

export default function Travel({ lang = 'ua' }) {
    const t = translations[lang] || translations.ua;

    const ways = [
        { icon: Car, title: t.carTitle, text: t.carText },
        { icon: TrainFront, title: t.trainTitle, text: t.trainText },
        { icon: Moon, title: t.nightTitle, text: t.nightText },
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-16" aria-labelledby="travel-title">
            <h2 id="travel-title" className="text-3xl font-serif text-[#2C352B] text-center mb-10">
                {t.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Як дістатися */}
                <div className="p-6 bg-white/80 rounded-2xl border border-[#E2E8E1] shadow-xs space-y-5">
                    <h3 className="text-xl font-serif text-[#556652] font-semibold">{t.getThere}</h3>
                    {ways.map(({ icon: Icon, title, text }) => (
                        <div key={title} className="flex gap-3">
                            <Icon size={20} className="text-[#556652] mt-0.5 shrink-0" aria-hidden="true" />
                            <div>
                                <h4 className="text-sm font-medium text-[#2C352B]">{title}</h4>
                                <p className="text-sm text-gray-600 font-light leading-relaxed">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Де зупинитися */}
                <div className="p-6 bg-white/80 rounded-2xl border border-[#E2E8E1] shadow-xs space-y-4">
                    <h3 className="text-xl font-serif text-[#556652] font-semibold flex items-center gap-2">
                        <BedDouble size={20} aria-hidden="true" /> {t.stay}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{t.stayIntro}</p>

                    <ul className="space-y-3">
                        {t.hotels.map((hotel) => (
                            <li key={hotel.name} className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-sm font-medium text-[#2C352B]">{hotel.name}</p>
                                    <p className="text-xs text-gray-600 font-light">
                                        {hotel.address} · {hotel.note}
                                    </p>
                                </div>
                                <a
                                    href={mapsLink(hotel)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-medium text-[#556652] underline underline-offset-2 shrink-0"
                                    aria-label={`${t.onMap}: ${hotel.name}`}
                                >
                                    <MapPin size={12} aria-hidden="true" /> {t.onMap}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="text-xs text-gray-600 font-light leading-relaxed">{t.stayMore}</p>
                    <p className="text-xs text-[#2C352B]">
                        {t.help} <ContactLinks />
                    </p>
                </div>
            </div>
        </section>
    );
}