const simpleObj = {
  name: 'Antek',
  printName: function () {
    console.log('Justyna');
  }
}

console.log('obj ', simpleObj.name);

simpleObj.printName()

class Car {
  constructor(color = 'blue', maxSpeed, numberOfGears) {
    this.color = color;
    this.maxSpeed = maxSpeed === undefined ? 100 : maxSpeed;
    this.numberOfGears = numberOfGears;
  }

  setPaint(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  startEngine() {

  }

}

const firstCar = new Car('red', 250);
const secondCar = new Car();


console.log('firstCar ', firstCar.color);

// secondCar.setPaint('black');
console.log('secondCar ', secondCar);
