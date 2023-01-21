function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Person {
  constructor(hitPoints) {
    this.hitPoints = hitPoints;
  }
}

class Character {
  constructor(hitPoints, strength) {
    this.hitPoints = hitPoints;
    this.strength = strength;
  }

  isAlive() {
    return this.hitPoints > 0;
  }

  attack(victim) {
    if (victim instanceof Character) {
      victim.hitPoints -= between(1, 100);
      victim.strength -= between(1, 50);
      return;
    }
    throw new Error(`(victim) not instance of Character`, victim);
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

const hero = new Hero(100, 100);
const criminal = new Criminal(90, 90);

const duel = () => {
  do {
    hero.attack(criminal);
    if (criminal.isAlive()) {
      criminal.attack(hero);
    }
    console.log("criminal", criminal);
    console.log("hero", hero);
  } while (criminal.isAlive() && hero.isAlive());
};
