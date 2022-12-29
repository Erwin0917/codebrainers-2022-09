// 1. Zapytaj usera ile ma subskrybcji
// 2. Sprawdz jaki ma aktualni status - 100 - brąz, 1000 - złoty, 10000 - diament

// 3. Ile subskrybcji przybywa miesięcznie
// 4. Oblicz jaki status będzie miał w nastepne 12mc
// 5. Pytaj użytkownika tak dużo razy aż poda numer *
// 6. Dodaj obsługę przycisku anuluj *

let subscribersNumber;
let isValueNumber;

console.log(subscribersNumber);

document.write(subscribersNumber + "<br>");

do {
  subscribersNumber = prompt("How many subscribers do you have?");
  isValueNumber = isNaN(parseInt(subscribersNumber));
  if (isValueNumber && subscribersNumber !== null) {
    alert("Value not a number");
  }
} while (isValueNumber && subscribersNumber !== null);

if (subscribersNumber !== null) {
  console.log(subscribersNumber);

  document.write(subscribersNumber + "<br>");

  if (subscribersNumber >= 100 && subscribersNumber < 1000) {
    console.log("You have bronze status");
    document.write("You have bronze status");
  } else if (subscribersNumber >= 1000 && subscribersNumber < 10000) {
    console.log("You have gold status");
    document.write("You have gold status");
  } else if (subscribersNumber >= 10000) {
    console.log("You have diamond status");
    document.write("You have diamond status");
  }

  let subPerMonth;

  console.log(subPerMonth);
  document.write("<br>" + subPerMonth + "<br>");

  do {
    subPerMonth = prompt("Hon many subscribers increase monthly?");
    if (isNaN(parseInt(subPerMonth))) {
      alert("Value not a number");
    }
  } while (isNaN(parseInt(subPerMonth)));

  const subPerYear = subPerMonth * 12;
  const subInNextYear = parseInt(subscribersNumber) + subPerYear;

  if (subInNextYear >= 100 && subInNextYear < 1000) {
    console.log("You will have bronze status");
    document.write("You will have bronze status");
  } else if (subInNextYear >= 1000 && subInNextYear < 10000) {
    console.log("You will have gold status");
    document.write("You will have gold status");
  } else if (subInNextYear >= 10000) {
    console.log("You will have diamond status");
    document.write("You will have diamond status");
  }
}
