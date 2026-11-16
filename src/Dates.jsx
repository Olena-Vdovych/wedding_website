import { RSVP_DEADLINE } from './config';

// Форматує дедлайн мовою гостя: «1 травня 2027 року», «1 mei 2027», «1. Mai 2027»
export const formatDeadline = (lang) => {
    const date = new Date(`${RSVP_DEADLINE}T12:00:00`);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    if (lang === 'ua') {
        const parts = new Intl.DateTimeFormat('uk-UA', options).formatToParts(date);
        const get = (type) => parts.find((p) => p.type === type).value;
        return `${get('day')} ${get('month')} ${get('year')} року`;
    }
    return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'nl-NL', options).format(date);
};

// true, коли дедлайн минув (кінець дня за локальним часом гостя)
export const isDeadlinePassed = () => new Date() > new Date(`${RSVP_DEADLINE}T23:59:59`);