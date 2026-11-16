// Налаштування, які можна змінювати в одному місці.

// Дедлайн RSVP (формат РРРР-ММ-ДД). Після цього дня (до 23:59 за часом гостя)
// форма замінюється повідомленням «Прийом відповідей завершено».
export const RSVP_DEADLINE = "2027-05-01";

// Контакти, які показуються в формі, FAQ і розділі «Як дістатися».
// tel — для кліку «зателефонувати» (міжнародний формат), display — як виглядає на сайті.
export const CONTACTS = [
    { name: "Olena", tel: "+380966440534", display: "+380 96 644 0534" },
    { name: "Dennis", tel: "+31622348217", display: "+31 6 22348217" },
];

// Посилання на спільний альбом для фото гостей (Google Photos, Dropbox, Google Drive тощо).
// Поки порожньо, розділ з QR-кодом на сайті НЕ показується.
export const PHOTO_UPLOAD_URL = "";

// Подія для кнопки «Додати в календар». Час у UTC; влітку Нідерланди = UTC+2.
// startUtc — збір гостей (13:30), partyStartUtc — збір вечірніх гостей (19:30), endUtc — завершення (00:00).
export const EVENT = {
    startUtc: "2027-07-10T11:30:00Z",
    partyStartUtc: "2027-07-10T17:30:00Z",
    endUtc: "2027-07-10T22:00:00Z",
    location:
        "Strandpaviljoen Surf en Beach, Boulevard Zeezijde 9, 2225 BB Katwijk aan Zee",
};
