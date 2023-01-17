const simpleObj = {
  name: 'Antek',
  printName: function () {
    console.log('Justyna');
  }
}

console.log('obj ', simpleObj.name);

simpleObj.printName()

class Car {
  constructor(color = 'blue', maxSpeed, numberOfGears, shouldBeDef ) {
    this.color = color;
    this.speed = 0;
    this.shouldBeDef = shouldBeDef;

    if (numberOfGears !== undefined && numberOfGears !== 0 && typeof numberOfGears === 'number' ) {
      this.numberOfGears = numberOfGears;
      this.nDef = false;
    } else { 
      this.numberOfGears = 6;
      this.nDef = true;
    }
    
    if (maxSpeed !== undefined && maxSpeed !== 0 && typeof maxSpeed === 'number' ) {
      this.maxSpeed = maxSpeed;
      this.sDef = false;
    } else {
      this.maxSpeed = 250;
      this.sDef = true;
    }

  }
    

  setPaint(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  accelerate(howMuch) {

  }

  decelerate(howMuch) {

  }

}

const car1 = new Car('red', 250, 4, false); //true
const car2 = new Car('black', '150', '8', false); //true
const car3 = new Car('red', 'fast', 'one', true); //false
const car4 = new Car('red', -20, -2, true); //false


car3.setSpeed(500);
car4.setSpeed(null);
car2.accelerate(250);
car3.accelerate('left');

const cars = [car1, car2, car3, car4];


console.log('cars ', cars);


// console.log('firstCar ', firstCar.color);

// secondCar.setPaint('black');
// console.log('secondCar ', secondCar);
