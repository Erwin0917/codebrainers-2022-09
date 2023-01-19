const simpleObj = {
  name: 'Antek',
  printName: function () {
    console.log('Justyna');
  }
}

console.log('obj ', simpleObj.name);

simpleObj.printName()


const isCorrectNumber = (value) => {
    if (value !== undefined && value > 0 && typeof value === 'number'){ 
        return true;
    }
    return false;
}

const isCorrectIsString = (value) => {
    if (value !== undefined && value > 0 && typeof value === 'string' && parseInt(value) !== null){
        return true;
    }
    return false;
}

const isCorrectColor = (value) => {
    if (value !== undefined && typeof value === 'string'){
        return true;
    }
    return false;
}




class Car {
  constructor(color = 'blue', maxSpeed, numberOfGears) {
    this.speed = 0;
    this.color = color;
    if (isCorrectColor(color)) {
        this.color = color;
    } else {
        this.color = 'blue';
    }

    if (isCorrectNumber(numberOfGears)) {
      this.numberOfGears = numberOfGears;
    } else {
      this.numberOfGears = 6;
    }
    if (isCorrectIsString(numberOfGears)){
        this.numberOfGears = parseInt(numberOfGears);
    }

    if (isCorrectNumber(maxSpeed)) {
      this.maxSpeed = maxSpeed;
    } else {
      this.maxSpeed = 250;
    }
    if (isCorrectIsString(maxSpeed)){
        this.maxSpeed = parseInt(maxSpeed);
    }

  }


  setPaint(colorNew){
    if (isCorrectColor(colorNew))
    this.color = colorNew;
  }

  getColor() {
    return this.color;
    //console.log(car2.getColor())
  }

  setSpeed(speed) {
    if (isCorrectNumber(speed) || isCorrectIsString(speed)){
        this.speed = parseInt(speed);
        if (this.speed >= this.maxSpeed) this.speed = this.maxSpeed;
    }
  }
  

  accelerate(howMuch) {
    if (isCorrectNumber(howMuch) || isCorrectIsString(howMuch)) {
        this.speed = this.speed + parseInt(howMuch);
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    }

  }

  decelerate(howMuch) {
    if (isCorrectNumber(howMuch) || isCorrectIsString(howMuch)) {
        this.speed = this.speed - parseInt(howMuch);
        if (this.speed < 0) this.speed = 0;
    }

  }

}

const car1 = new Car('red', 50, 4);
const car2 = new Car('black', '150', '7');
const car3 = new Car('red', 'fast', 'one');
const car4 = new Car('red', -20, -2);
const cars = [car1, car2, car3, car4];


console.log('before', cars);

car3.setSpeed(500);
car4.setSpeed(null);
car2.accelerate('250');
car3.accelerate('left');
car3.setPaint("orange");
car1.accelerate(100);

console.log('mods', cars);

car1.decelerate(150);
car1.setPaint('pink');
car3.accelerate('100');

console.log('mods2', cars);








// console.log('firstCar ', firstCar.color);

// secondCar.setPaint('black');
// console.log('secondCar ', secondCar);
