
//TODO: fix = car4.accelerate(5), car4.decelerate(200);
// accelerate => if over maxSpeed set maxSpeed,
// decelerate => if under 0 set 0


const isCorrectNumber = (value) => {
  //true => value === number && value !== NaN
  //   if (typeof value === 'number' && isNaN(value) === false) {
  //     return true;
  //   }
  //   return false;
  // };
  return typeof value === 'number' && isNaN(value) === false;
}

const setNumericValue = (value, defaultValue) => {
  const parsedValue = parseInt(value);
  if (isCorrectNumber(parsedValue) && parsedValue > 0) {
    return parsedValue;
  }
  return defaultValue;
}


const isCorrectColor = color => typeof color !== "number" && color !== null; 

  

class Car {
  constructor(color = "blue", maxSpeed, numberOfGears) {
    if (isCorrectColor(color)) {
      this.color = color;
    } else {
      throw new Error("Color must be a string")
    }

    this.speed = 0;
    this.maxSpeed = setNumericValue(maxSpeed, 250)
    this.numberOfGears = setNumericValue(numberOfGears, 6)

  }

  getColor(color) {
    console.log(`Current color of car: ${this.color}`);
  }

  setColor(color) {
    if (isCorrectColor(color)) {
      this.color = color;
      console.log(`Color updated to ${this.color}`);
    } else {
      console.error(
        `Color not updated, must be a string, you entered: ${color}`
      );
    }
  }

  getSpeed(speed) {
    console.log(`Current speed of car: ${this.speed}`);
  }

  setSpeed(speed) {
    if (isCorrectNumber(speed) && speed <= this.maxSpeed && speed >= 0) {
      this.speed = parseInt(speed);
      console.log(`Speed updated, current speed ${this.speed}`);
    } else {
      throw new Error(`Speed not updated, must be a number >=0 and/or <= max Speed, current speed ${this.speed}`);
    }
  }

  getNumberOfGears(numberOfGears) {
    console.log(`Current no of gears: ${this.numberOfGears}`);
  }

  setNumberOfGears(numberOfGears) {
    if (isCorrectNumber(numberOfGears) && numberOfGears <= 6) {
      this.numberOfGears = parseInt(numberOfGears);
      console.log(`No of gears updated, current no: ${this.numberOfGears}`);
    } else {
      console.error(
        `No of gears not updated, must be a number and/or no of gears <=6, current no: ${this.numberOfGears}`
      );
    }
  }
  accelerate(howMuch) {
    const newSpeed = parseInt(howMuch) + this.speed;
    if ( isCorrectNumber(newSpeed) === false){
      return
    }
    if ( newSpeed <= this.maxSpeed){
        this.speed = newSpeed;
        console.log(`Accelerate to ${this.speed}`)
    } else {
      console.error(`Speed not updated, current speed ${this.speed}`);
    }
  }

  decelerate(howMuch) {
    console.log('howMuch', howMuch)
    const newSpeed = this.speed - parseInt(howMuch);
    console.log('newSpeed', newSpeed)
    if ( isCorrectNumber(newSpeed) === false){
      return
    }
    if ( newSpeed >= 0){
        this.speed = newSpeed;
        console.log(`Decelerate to ${this.speed}`)
    } else {
      console.error(`Speed not updated, current speed ${this.speed}`);
    }
  }
}

const car1 = new Car("blue", "50", "4", false); //true
const car2 = new Car("black", -150, "8", false); //true
const car3 = new Car("red", 500, "one", true); //false
const car4 = new Car("yellow", -20, -2, true); //false

// car3.setSpeed(500);
// car4.setSpeed(100);
// car2.setAccelerate(250);
// car3.setAccelerate("left");

const cars = [car1, car2, car3, car4];

// console.log("cars ", cars);

// console.log("car4: ", car4);

// car4.getColor();
// car4.setColor("violet");
// car4.getColor();
car4.getSpeed();
car4.setSpeed(100);
car4.getSpeed();

console.log('-'.repeat(20));

car4.getNumberOfGears();
car4.setNumberOfGears(10);
car4.getNumberOfGears();

console.log('-'.repeat(20));

car4.getSpeed();
car4.accelerate(155);
car4.getSpeed();
car4.decelerate(200);
car4.getSpeed();

console.log("car4: ", car4);
console.log("car1: ", car1);
car1.accelerate("70");
console.log("car1: ", car1);
car1.setNumberOfGears("3");
console.log("car1: ", car1);


