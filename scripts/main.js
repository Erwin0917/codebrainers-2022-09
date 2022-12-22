// 1. Zapytaj usera ile ma subskrybcji
// 2. Sprawdz jaki ma aktualni status - 100 - brąz, 1000 - złoty, 10000 - diament

// 3. Ile subskrybcji przybywa miesięcznie
// 4. Oblicz jaki status będzie miał w nastepne 12mc

const subscribersNumber = prompt("How many subscribers do you have?");

if (subscribersNumber >= 100 && subscribersNumber < 1000) {
    console.log('You have bronze status')
} else if (subscribersNumber >= 1000 && subscribersNumber < 10000) {
    console.log('You have gold status')
} else if (subscribersNumber >= 10000) {
    console.log('You have diamond status')
};
