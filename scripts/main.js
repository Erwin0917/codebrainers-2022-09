//1. Losowanie liczb 0-10
//2. Zapytanie usera o wynik mnożenia dwóch wylosowanych wcześniej liczb

//3. 10 pytań z mnożenia
//4. Wyświetlenie wyniku testu - 50%+ test zdany

// Math.random(); 0 - 0.9(999);
//
// Math.round(1.5) => 2
//
// Math.floor()
// Math.ceil()

// liczba pytań zależna od użytkownika
// licza pytań jako zmienna

function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isValueNumber(value) {
  return isNaN(parseInt(value));
}

let correctAnswer = 0;
let incorrectAnswer = 0;
// let isValueNumber;
let numberOfQuestions;
const percentPassed = 0.5;

numberOfQuestions = prompt("How many questions?");

if (!isValueNumber(numberOfQuestions)) {
  process.exit();
}

for (let i = 0; i < numberOfQuestions; i++) {
  const firstNumber = between(0, 10);
  const secondNumber = between(0, 10);

  do {
    multResult = prompt(`What's the result? ${firstNumber} * ${secondNumber}`);
    // isValueNumber = isNaN(parseInt(multResult));

    if (multResult === null) {
      alert("Thank you!");
      process.exit();
    }

    if (isValueNumber(multResult) && multResult !== null) {
      alert("Value not a number");
    } else if (firstNumber * secondNumber === parseInt(multResult)) {
      {
        correctAnswer = parseInt(correctAnswer) + 1;
      }
    } else {
      incorrectAnswer = parseInt(incorrectAnswer) + 1;
    }
  } while (isValueNumber(multResult) && multResult !== null);
}

if (correctAnswer / numberOfQuestions >= percentPassed) {
  alert(`Test passed! ${correctAnswer} / ${numberOfQuestions}`);
} else {
  alert(
    `Test failed, score below 50%: ${correctAnswer} / ${numberOfQuestions}`
  );
}

console.log(correctAnswer);
console.log(incorrectAnswer);
console.log(`${(correctAnswer / numberOfQuestions) * 100}%`);
