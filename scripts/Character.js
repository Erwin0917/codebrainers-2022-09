import { Weapon } from "./Weapon.js";
import { between } from "./main.js";

export class Character {
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
      console.log('currentDemage', currentDamage)
      victim.hitPoints = victim.hitPoints - currentDamage;
      const newVictimStrenth = victim.strength - between(1, 50)
      //victim.strength = newVictimStrenth < 1 ?  1 : newVictimStrenth;
      victim.strength =
        newVictimStrenth < 1
          ? 1
          : newVictimStrenth;

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
    this.name = 'Hero'
  }
}

export class Criminal extends Character {
  constructor(hitPoints, strength) {
    super(hitPoints, strength);
    this.name = 'Criminal'
  }
}