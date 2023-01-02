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

let trueAnswer = 0;
let falseAnswer = 0;
console.log(trueAnswer);
console.log(falseAnswer);

// const myNumber = between(0, 10);
for (let num = 1; num <= 10; num ++) {

  const firstNumber = between(0, 10);
  const secondNumber = between(0, 10);

  do {
    multResult = prompt(`What's the result? ${firstNumber} * ${secondNumber}`);
    isResultNumber = isNaN(parseInt(multResult));
    if (isResultNumber && multResult !== null) {
      alert("Walue not a number!");
    }
  } while (isResultNumber && multResult !== null);

  if (firstNumber * secondNumber === parseInt(multResult)) {
    alert("Correct result");
    console.log("Prawidłowa odpowiedź")
    trueAnswer = trueAnswer + 1;
  } else {
    alert("Incorrect result");
    console.log("Nieprawidłowa odpowiedź")
    falseAnswer = falseAnswer + 1;
  }
}

console.log(trueAnswer);
console.log(falseAnswer);


if (trueAnswer >= 5) {
  alert("Test passed");
  console.log("Test zaliczony");
  document.write("Prawidłowe odpowiedzi: " + trueAnswer + "/10" + "</br>" );
  document.write("Gratulacje! Test zaliczony.")
} else {
  alert("Test failed");
  console.log("Test niezaliczony");
  document.write("Prawidłowe odpowiedzi: " + trueAnswer + "/10" + "</br>" );
  document.write("Test niezaliczony.");
}
