// ---- sprawdzenie ile potrzeba losowań lotto żeby trafić 6 -----



function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// drawing 49 numbers

const availableNumbers = [];

for (let i = 1; i <= 49; i++){
  availableNumbers.push(i)

}

console.log(availableNumbers)



// drawing six random numbers

const randomNumbers = [];


for (let i = 0; i < 6; i++){
  const ballIndex = Math.floor(Math.random() * availableNumbers.length)
  const ballFromAvailableNumbers = availableNumbers.splice(ballIndex, 1)[0]
  randomNumbers.push(ballFromAvailableNumbers)
}

console.log(randomNumbers)
console.log(availableNumbers)



const sixNumbers = [6, 15, 22, 41, 48, 30];


