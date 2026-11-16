import React from 'react';
import { ChevronDown } from 'lucide-react';
import ContactLinks from './ContactLinks';
import { formatDeadline } from './dates';
import { PHOTO_UPLOAD_URL } from './config';

const translations = {
    ua: {
        title: 'Часті питання',
        items: [
            {
                id: 'dress',
                q: 'Що вдягнути?',
                a: 'Стиль — Beach Boho Chic. Церемонія буде на піску, тому підбори краще залишити вдома: обирайте легкі тканини й зручне взуття. Білий, айворі та світло-кремові відтінки залишаємо нареченій. Увечері біля моря прохолодніше, тож візьміть светр чи шаль.',
            },
            {
                id: 'schedule',
                q: 'О котрій починається і коли закінчується свято?',
                a: 'Збір гостей о 13:30 на терасі, церемонія на пляжі о 14:00. Далі привітання, фото й borrel, а о 17:00 святковий beach BBQ. Свято завершується о 00:00.',
                aParty:
                    'Вечірні гості збираються о 19:30, о 20:00 різання торта, о 20:45 перший танець і вечірка. Завершення о 00:00.',
            },
            { id: 'travel', q: 'Як дістатися та де заночувати?', a: 'Усе потрібне — у розділі «Як дістатися та де зупинитися» вище.' },
            {
                id: 'kids',
                q: 'Чи можна прийти з дітьми?',
                a: 'Ми вирішили зробити це весілля святом лише для дорослих, дякуємо за розуміння. Якщо у вас особлива ситуація, будь ласка, напишіть або зателефонуйте нам:',
                contact: true,
            },
            { id: 'food', q: 'Я вегетаріанець або маю алергію. Що робити?', a: 'Напишіть про це в полі з побажаннями у формі RSVP, і ми це врахуємо.' },
            { id: 'gifts', q: 'Що подарувати?', a: 'Ваша присутність — найкращий подарунок. Якщо захочете нас привітати, ми будемо вдячні за внесок у конверті.' },
            { id: 'photos', q: 'Куди завантажити фото з весілля?', a: 'Скануйте QR-код у розділі «Поділіться фото» або натисніть кнопку «Завантажити фото». Ми дуже хочемо побачити свято вашими очима.' },
            { id: 'weather', q: 'Яка буде погода і що взяти з собою?', a: 'Це узбережжя Північного моря, тому погода й вітер можуть змінитися за годину. Візьміть легку куртку чи светр, сонцезахисні окуляри й крем.' },
            {
                id: 'change',
                q: 'Мої плани змінились. Що робити?',
                a: 'Дайте нам знати якнайшвидше. Відповідь у формі RSVP потрібна до {deadline}. Якщо щось змінилося, напишіть або зателефонуйте:',
                contact: true,
            },
        ],
    },
    nl: {
        title: 'Veelgestelde vragen',
        items: [
            {
                id: 'dress',
                q: 'Wat trek ik aan?',
                a: 'Stijl: Beach Boho Chic. De ceremonie vindt plaats op het zand, dus laat de hakken thuis en kies voor luchtige stoffen en comfortabele schoenen. Wit, ivoor en lichte crèmetinten laten we graag aan de bruid. ’s Avonds is het aan zee frisser, neem dus een vest of sjaal mee.',
            },
            {
                id: 'schedule',
                q: 'Hoe laat begint en eindigt het feest?',
                a: 'Ontvangst om 13:30 op het terras, ceremonie op het strand om 14:00. Daarna felicitaties, foto’s en borrel, en om 17:00 een feestelijke beach BBQ. Het feest eindigt om 00:00.',
                aParty:
                    'Avondgasten worden om 19:30 verwacht, om 20:00 wordt de bruidstaart aangesneden en om 20:45 volgen de openingsdans en het feest. Einde om 00:00.',
            },
            { id: 'travel', q: 'Hoe kom ik er en waar kan ik slapen?', a: 'Alles staat in het onderdeel “Route & overnachten” hierboven.' },
            {
                id: 'kids',
                q: 'Mogen er kinderen mee?',
                a: 'We hebben ervoor gekozen om van deze bruiloft een feest voor volwassenen te maken, bedankt voor je begrip. Heb je een bijzondere situatie? Stuur of bel ons gerust:',
                contact: true,
            },
            { id: 'food', q: 'Ik ben vegetariër of heb een allergie. Wat nu?', a: 'Vul het in bij het veld voor wensen in het RSVP-formulier, dan houden we er rekening mee.' },
            { id: 'gifts', q: 'Wat kan ik cadeau doen?', a: 'Jullie aanwezigheid is het mooiste cadeau. Willen jullie ons toch iets geven, dan stellen we een bijdrage in een enveloppe erg op prijs.' },
            { id: 'photos', q: 'Waar kan ik foto’s van de bruiloft uploaden?', a: 'Scan de QR-code bij “Deel je foto’s” of klik op de knop “Foto’s uploaden”. We zien het feest graag door jullie ogen.' },
            { id: 'weather', q: 'Hoe wordt het weer en wat neem ik mee?', a: 'Dit is de Noordzeekust, dus weer en wind kunnen binnen een uur omslaan. Neem een lichte jas of vest, een zonnebril en zonnebrand mee.' },
            {
                id: 'change',
                q: 'Mijn plannen zijn veranderd. Wat nu?',
                a: 'Laat het ons zo snel mogelijk weten. Je reactie in het RSVP-formulier hebben we nodig voor {deadline}. Is er iets veranderd, stuur of bel ons dan:',
                contact: true,
            },
        ],
    },
    de: {
        title: 'Häufige Fragen',
        items: [
            {
                id: 'dress',
                q: 'Was ziehe ich an?',
                a: 'Stil: Beach Boho Chic. Die Zeremonie findet im Sand statt, lasst also die hohen Schuhe zu Hause und wählt luftige Stoffe und bequeme Schuhe. Weiß, Ivory und helle Cremetöne überlassen wir der Braut. Abends ist es am Meer kühler, nehmt deshalb eine Strickjacke oder einen Schal mit.',
            },
            {
                id: 'schedule',
                q: 'Wann beginnt und endet die Feier?',
                a: 'Empfang um 13:30 auf der Terrasse, Zeremonie am Strand um 14:00. Danach Glückwünsche, Fotos und Borrel, um 17:00 folgt ein festliches Beach-BBQ. Die Feier endet um 00:00.',
                aParty:
                    'Die Abendgäste werden um 19:30 erwartet, um 20:00 wird die Hochzeitstorte angeschnitten, um 20:45 folgen Eröffnungstanz und Party. Ende um 00:00.',
            },
            { id: 'travel', q: 'Wie komme ich hin und wo kann ich übernachten?', a: 'Alles Wichtige steht oben unter „Anreise & Übernachtung“.' },
            {
                id: 'kids',
                q: 'Dürfen Kinder mitkommen?',
                a: 'Wir haben uns entschieden, unsere Hochzeit nur für Erwachsene zu feiern, danke für euer Verständnis. Habt ihr eine besondere Situation? Schreibt oder ruft uns einfach an:',
                contact: true,
            },
            { id: 'food', q: 'Ich bin Vegetarier oder habe eine Allergie. Was tun?', a: 'Tragt es im Wunschfeld des RSVP-Formulars ein, wir berücksichtigen es gern.' },
            { id: 'gifts', q: 'Was kann ich schenken?', a: 'Eure Anwesenheit ist das schönste Geschenk. Wenn ihr uns trotzdem etwas schenken möchtet, freuen wir uns über einen Beitrag im Umschlag.' },
            { id: 'photos', q: 'Wo kann ich Fotos von der Hochzeit hochladen?', a: 'Scannt den QR-Code im Bereich „Teilt eure Fotos“ oder klickt auf „Fotos hochladen“. Wir sehen das Fest gern durch eure Augen.' },
            { id: 'weather', q: 'Wie wird das Wetter und was nehme ich mit?', a: 'Das ist die Nordseeküste, Wetter und Wind können sich innerhalb einer Stunde ändern. Nehmt eine leichte Jacke oder Strickjacke, Sonnenbrille und Sonnencreme mit.' },
            {
                id: 'change',
                q: 'Meine Pläne haben sich geändert. Was nun?',
                a: 'Sagt uns bitte so schnell wie möglich Bescheid. Wir brauchen eure Antwort im RSVP-Formular bis zum {deadline}. Hat sich etwas geändert, schreibt oder ruft uns an:',
                contact: true,
            },
        ],
    },
};

export default function Faq({ lang = 'ua', isPartyOnly = false }) {
    const t = translations[lang] || translations.ua;
    const deadline = formatDeadline(lang);

    // Питання про фото показуємо лише коли налаштовано альбом (PHOTO_UPLOAD_URL у config.js)
    const items = t.items.filter((item) => item.id !== 'photos' || PHOTO_UPLOAD_URL);

    return (
        <section className="max-w-2xl mx-auto px-6 py-16" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-3xl font-serif text-[#2C352B] text-center mb-8">
                {t.title}
            </h2>

            <div className="space-y-3">
                {items.map((item) => {
                    const answer = (isPartyOnly && item.aParty ? item.aParty : item.a).replace('{deadline}', deadline);
                    return (
                        <details
                            key={item.id}
                            className="group bg-white/80 rounded-2xl border border-[#E2E8E1] shadow-xs open:shadow-md transition-shadow"
                        >
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-sm font-medium text-[#2C352B] [&::-webkit-details-marker]:hidden">
                                {item.q}
                                <ChevronDown
                                    size={18}
                                    className="text-[#556652] shrink-0 transition-transform group-open:rotate-180"
                                    aria-hidden="true"
                                />
                            </summary>
                            <div className="px-5 pb-4 text-sm text-gray-600 font-light leading-relaxed">
                                {answer}
                                {item.contact && (
                                    <>
                                        {' '}
                                        <ContactLinks className="text-[#2C352B]" />
                                    </>
                                )}
                            </div>
                        </details>
                    );
                })}
            </div>
        </section>
    );
}