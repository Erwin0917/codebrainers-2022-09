import { Weapon } from "./Weapon.js";
import { between } from "./main.js";

class Character {
  constructor(hitPoints, strength) {
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.weapon = null;
  }

  isAlive() {
    return this.hitPoints > 0;
  }

  attack(victim) {
    if (victim instanceof Character) {
      const defaultDamage = 5;

      const currentDamage =
        this.weapon !== null
          ? this.weapon.getDamage() * (this.strength / 10)
          : defaultDamage;

      victim.hitPoints -= currentDamage;
      victim.strength -= between(1, 50);

      return;
    }
    throw new Error(`(victim) not instance of Character`, victim);
  }

  setWeapon(weapon) {
    if (!(weapon instanceof Weapon)) {
      throw new Error("Weapon should be instance of Weapon class");
    }
    this.weapon = weapon;
  }
}

export class Hero extends Character {
  constructor(hitPoints, strength) {
    super(hitPoints, strength);
  }
}

export class Criminal extends Character {
  constructor(hitPoints, strength) {
    super(hitPoints, strength);
  }
}
