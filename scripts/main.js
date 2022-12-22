// 1. Zapytaj usera ile ma subskrybcji
// 2. Sprawdz jaki ma aktualni status - 100 - brąz, 1000 - złoty, 10000 - diament

// 3. Ile subskrybcji przybywa miesięcznie
// 4. Oblicz jaki status będzie miał w nastepne 12mc
// 5. Pytaj użytkownika tak dużo razy aż poda numer *
// 6. Dodaj obsługę przycisku anuluj *

const subscribersNumber = parseInt(prompt("How many subscribers do you have?"));

console.log(subscribersNumber)
if (isNaN(subscribersNumber)) {
    alert('value is not a number')
}

if (subscribersNumber >= 100 && subscribersNumber < 1000) {
    console.log('You have bronze status')
} else if (subscribersNumber >= 1000 && subscribersNumber < 10000) {
    console.log('You have gold status')
} else if (subscribersNumber >= 10000) {
    console.log('You have diamond status')
};

const subPerMonth = parseInt(prompt("How many subscribers do you have per month?"));

console.log(subPerMonth)
if (isNaN(subPerMonth)) {
    alert('value is not a number')
}

const subPerYear = subPerMonth * 12;

const subInNextYear = subscribersNumber + subPerYear;

if (subInNextYear >= 100 && subInNextYear < 1000) {
    console.log('You have bronze status')
} else if (subInNextYear >= 1000 && subInNextYear < 10000) {
    console.log('You have gold status')
} else if (subInNextYear >= 10000) {
    console.log('You have diamond status')
};

