// const simpleObj = {
//   name: "Antek",
//   printName: function () {
//     console.log("Justyna");
//   },
// };

// console.log("obj ", simpleObj.name);

// simpleObj.printName();

// function isvalue(value) {
//   if (typeof value === "string") {
//     return parseInt(value);
//   }
//   if (value !== undefined && value > 0 && typeof value === "number") {
//     return true;
//   } else {
//     return false;
//   }
// }

const isCorectNumber = function (value) {
  if (typeof value === "string") {
    // console.log("WAS STRING");
    // return (value = parseInt(value));
    return true;
  } else if (value !== undefined && value > 0 && typeof value === "number") {
    return true;
  } else {
    return false;
  }
};

// const isCorectNumber = (value) =>
//   value !== undefined && value > 0 && typeof value === "number" ? true : false;

const isCorrectColor = (color) =>
  color !== null && typeof color !== "number" ? true : false;

class Car {
  constructor(color = "blue", maxSpeed, numberOfGears) {
    if (isCorrectColor(color)) {
      this.color = color;
    } else {
      console.log("Color must be a string");
      process.exit();
    }

    this.speed = 0;

    if (isCorectNumber(maxSpeed) && maxSpeed <= 300) {
      this.maxSpeed = parseInt(maxSpeed);
    } else {
      console.log("Wrong data, maxSpeed set to 250", { maxSpeed });
      this.maxSpeed = 250;
    }

    if (isCorectNumber(numberOfGears) && numberOfGears <= 6) {
      this.numberOfGears = parseInt(numberOfGears);
    } else {
      console.log("Wrong data, numberOfGears set to 6", { numberOfGears });
      this.numberOfGears = 6;
    }
  }

  getColor(color) {
    console.log(`Current color of car: ${this.color}`);
  }

  setColor(color) {
    isCorrectColor(color)
      ? console.log(`Color updated to ${(this.color = color)}`)
      : console.log(
          `Color not updated, must be a string, you entered: ${color}`
        );
  }

  getSpeed(speed) {
    console.log(`Current speed of car: ${this.speed}`);
  }

  setSpeed(speed) {
    isCorectNumber(speed) && speed <= 300
      ? console.log(
          `Speed updated, current speed ${(this.speed = parseInt(speed))}`
        )
      : console.log(
          `Speed not updated, must be a number and/or max Speed <=300, current speed ${this.speed}`
        );
  }

  getNumberOfGears(numberOfGears) {
    console.log(`Current no of gears: ${this.numberOfGears}`);
  }

  setNumberOfGears(numberOfGears) {
    isCorectNumber(numberOfGears) && numberOfGears <= 6
      ? console.log(
          `No of gears updated, current no: ${(this.numberOfGears =
            parseInt(numberOfGears))}`
        )
      : console.log(
          `No of gears not updated, must be a number, current no: ${this.numberOfGears}`
        );
  }

  setAccelerate(howMuch) {
    isCorectNumber(howMuch) && this.speed + howMuch <= this.maxSpeed
      ? console.log(
          `Speed updated, current speed ${(this.speed =
            this.speed + parseInt(howMuch))}`
        )
      : console.log(`Speed not updated, current speed ${this.speed}`);
  }

  setDecelerate(howMuch) {
    isCorectNumber(howMuch) && this.speed - howMuch >= 0
      ? console.log(
          `Speed updated, current speed ${(this.speed =
            this.speed - parseInt(howMuch))}`
        )
      : console.log(`Speed not updated, current speed ${this.speed}`);
  }
}

const car1 = new Car("blue", "50", "4", false); //true
const car2 = new Car("black", -150, "8", false); //true
const car3 = new Car("red", 500, "one", true); //false
const car4 = new Car("yellow", -20, -2, true); //false

// car3.setSpeed(500);
// car4.setSpeed(null);
// car2.setAccelerate(250);
// car3.setAccelerate("left");

const cars = [car1, car2, car3, car4];

console.log("cars ", cars);

// console.log("car4: ", car4);

// car4.getColor();
// car4.setColor("violet");
// car4.getColor();

// car4.getSpeed();
// car4.setSpeed(100);
// car4.getSpeed();

// car4.getNumberOfGears();
// car4.setNumberOfGears(10);
// car4.getNumberOfGears();

// car4.setAccelerate(50);
// car4.setDecelerate(90);

// console.log("car4: ", car4);
// console.log("car1: ", car1);
// car1.setSpeed("70");
// console.log("car1: ", car1);
// car1.setNumberOfGears("3");
// console.log("car1: ", car1);
