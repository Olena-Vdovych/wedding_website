// Персональні посилання: https://сайт/?guest=Ivan  або  ?guest=Ivan+Petrenko
// Імʼя підставляється у форму RSVP та на конверт.
export const getGuestName = () => {
    const raw = new URLSearchParams(window.location.search).get('guest') || '';
    return raw.trim().slice(0, 80);
};
