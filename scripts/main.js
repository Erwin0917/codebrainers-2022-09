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
    // if (maxSpeed !== undefined && numberOfGears !== undefined && typeof maxSpeed === 'number' && typeof numberOfGears === 'number'){
    //   this.maxSpeed = maxSpeed;
    //   this.numberOfGears = numberOfGears;
    // }
    this.speed = 0;

    if (numberOfGears !== undefined && numberOfGears !== 0 && typeof numberOfGears === 'number' ) {
        this.numberOfGears = numberOfGears;
    } else { 
      this.numberOfGears = 6;
    }
    
    if (maxSpeed !== undefined && maxSpeed !== 0 && typeof maxSpeed === 'number' ) {
      this.maxSpeed = maxSpeed;
    } else {
      this.maxSpeed = 250;
    }

  }
    

  setPaint(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setSpeed(speed) {

  }

  accelerate(howMuch) {

  }

  decelerate(howMuch) {

  }

}

const firstCar = new Car('red', 250);
const secondCar = new Car();


console.log('firstCar ', firstCar.color);

// secondCar.setPaint('black');
console.log('secondCar ', secondCar);
