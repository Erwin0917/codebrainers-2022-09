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

let correctAnswer = 0;
let incorrectAnswer = 0;
let isValueNumber;
// const percentPassed = 50%;

for (let i = 0; i < 10; i++) {
  const firstNumber = between(0, 10);
  const secondNumber = between(0, 10);

  do {
    multResult = prompt(`What's the result? ${firstNumber} * ${secondNumber}`);
    isValueNumber = isNaN(parseInt(multResult));

    if (multResult === null) {
      alert("Thank you!");
      process.exit();
    }

    if (isValueNumber && multResult !== null) {
      alert("Value not a number");
    } else if (firstNumber * secondNumber === parseInt(multResult)) {
      {
        correctAnswer = parseInt(correctAnswer) + 1;
      }
    } else {
      incorrectAnswer = parseInt(incorrectAnswer) + 1;
    }
  } while (isValueNumber && multResult !== null);
}

if (correctAnswer >= 5) {
  alert(`Test passed! ${correctAnswer} / ${correctAnswer + incorrectAnswer}`);
} else {
  alert(
    `Test failed, score below 50%: ${correctAnswer} / ${
      correctAnswer + incorrectAnswer
    }`
  );
}

console.log(correctAnswer);
console.log(incorrectAnswer);
console.log(`${(correctAnswer / (correctAnswer + incorrectAnswer)) * 100}%`);
