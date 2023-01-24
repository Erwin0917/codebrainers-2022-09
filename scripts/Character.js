import { weaponsList } from './Weapon.js';
import { between } from './main.js';


class Character {
  constructor(hitPoints, strength) {
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.attackPower = strength + weaponsList[between(0, weaponsList.length - 1)].weaponPower;
  }

  isAlive() {
    return this.hitPoints > 0;
  }

  attack(victim) {
    if (victim instanceof Character) {
      victim.hitPoints -= this.attackPower;
      return;
    }
    throw new Error(`(victim) not instance of Character`, victim);
  }

  // setWeapon(weapon) {
  //   if (!(weapon instanceof Weapon)) {
  //     throw new Error('weapon should be instance of Weapon class');
  //   }

  //   this.weapon = weapon;

  // }
}

export class Hero extends Character {
  constructor(hitPoints, strength, attackPower) {
    super(hitPoints, strength, attackPower);
  }
}

export class Criminal extends Character {
  constructor(hitPoints, strength, attackPower) {
    super(hitPoints, strength, attackPower);
  }
}
