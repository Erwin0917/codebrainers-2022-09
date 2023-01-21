class Person {
  constructor(hitPoints) {
    this.hitPoints = hitPoints;
  }



}

class Character {
  constructor(hitPoints, strength) {
    this.hitPoints = hitPoints
    this.strength = strength;
  }

  isAlive() {
    return this.hitPoints > 0;
  }

  attack() {

  }

}

class Hero extends Character {
  constructor(hitPoints, strength) {
    super(hitPoints, strength);
  }
}

class Criminal extends Character {
  constructor(hitPoints, strength) {
    super(hitPoints, strength);
  }
}



