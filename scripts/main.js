// ---- sprawdzenie ile potrzeba losowań lotto żeby trafić 6 -----



function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const availableNumbers = [];

for (let i = 1; i <= 49; i++) {
  availableNumbers.push(i)

}

console.log(availableNumbers)

function getNumbersDrawn() {
  const numbersDrawn = []
  for (let i = 0; i < 6; i++) {
    const ballIndex = Math.floor(Math.random() * availableNumbers.length);
    const removedNumbers = availableNumbers.splice(ballIndex, 1);
    const ballNumber = removedNumbers[0];
    numbersDrawn.push(ballNumber);
  }
  return numbersDrawn
}

function compareArraysNumbers(array1, array2) {

}

function drawingsNumbers() {
  const numberSelected = [2, 5, 15, 40, 41, 49];
  let jackpot = false;
  let ticketsCount = 0;
  while (jackpot === false) {
    const numbersDrawn = getNumbersDrawn();
    jackpot = compareArraysNumbers(numberSelected, numbersDrawn);
    ticketsCount = ticketsCount + 1;
    // ticketsCount++ tożsame z powyższym
  }
  return ticketsCount

}