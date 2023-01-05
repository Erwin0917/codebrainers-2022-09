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

function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const myNumber = between(0, 10);

for (let i = 0; i < 10; i++) {
  const firstNumber = between(0, 10);
  const secondNumber = between(0, 10);
  const multResult = prompt(
    `What's the result? ${firstNumber} * ${secondNumber}`
  );
}

// if (firstNumber * secondNumber === parseInt(multResult)) {
//   alert("Correct result");
// } else {
//   alert("Incorrect result");
// }
