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
  let index = 0;
  if (array1.length !== array2.length) {
    return false
  }

  do {
    if (array1[index] !== array2[index]){
      return false
    }
    index++ 
  } while (index < array1.length)
  return true 
  
}

// console.log("should be true",compareArraysNumbers([2,4,6],[2,4,6]))
// console.log("should be false",compareArraysNumbers([2,4,6],[2,6,10]))
function comperator(a,b) {
  return a - b;

}


function drawingsNumbers() {
  const numberSelected = [2, 5, 15, 40, 41, 49].sort(comperator);
  let jackpot = false;
  let ticketsCount = 0;
  while (jackpot === false) {
    const numbersDrawn = getNumbersDrawn().sort(comperator);
    jackpot = compareArraysNumbers(numberSelected, numbersDrawn);
    ticketsCount = ticketsCount + 1;
    // ticketsCount++ tożsame z powyższym
  }
  return ticketsCount


}
console.log(drawingsNumbers())

