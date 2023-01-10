// ---- sprawdzenie ile potrzeba losowań lotto żeby trafić 6 -----



function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const availableNumbers = [];

for (let i = 1; i <= 49; i++){ 
  availableNumbers.push(i) 

}

console.log(availableNumbers)