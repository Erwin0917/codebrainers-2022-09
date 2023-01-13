// ---- sprawdzenie ile potrzeba losowań lotto żeby trafić 6 -----



function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const availableNumbers = [];

for (let i = 1; i <= 49; i++){
  availableNumbers.push(i)

}

console.log(availableNumbers)



const randomNumbers = [];

for (let i = 0; i < 6; i++){
  randomNumbers.push(availableNumbers[between(0, availableNumbers.length - 1)])
}

console.log(randomNumbers)

const sixNumbers = [12, 43, 29, 31, 1, 8];

