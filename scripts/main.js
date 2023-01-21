class Person {
  constructor(hitPoints) {
    this.hitPoints = hitPoints;
  }

  isAlive() {
    return this.hitPoints > 0;
  }

}

class Character extends Person {
  constructor(hitPoints) {
    super(hitPoints);

    this.strength = 20;
  }

  // isAlive() {
  //   return super.isAlive() && this.strength > 0;
  // }

}


class Vehicle {

}


const firstChar = new Character(100);
const vehicle = new Vehicle();

firstChar.isAlive()

console.log(firstChar instanceof Character);
console.log(firstChar instanceof Person);
console.log(firstChar instanceof Vehicle);


