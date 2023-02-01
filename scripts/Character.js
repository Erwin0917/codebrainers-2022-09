import { Weapon } from "./Weapon.js";
import { between } from "./main.js";

export class Character {
  constructor(hitPoints, strength) {
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.weapon = null;
    this.name = null;
  }

  isAlive() {
    return this.hitPoints > 0;
  }

  updateStrength() {
    let strengthDiv = document.querySelector(`.personWrapper#${this.getClassName()} > .personStrength`);
    strengthDiv.innerText = `Strength: ${this.strength}`
  }

  getClassName() {
    return this.name.replaceAll(' ', '');
  }

  updateHP() {
    let hitPointDiv = document.querySelector(`.personWrapper#${this.getClassName()} > .personHitPoints`);
    hitPointDiv.innerText = `Hit Points: ${this.hitPoints}`

    let progress = document.querySelector(`.personWrapper#${this.getClassName()} > .nes-progress`);
    progress.setAttribute('value', this.hitPoints);
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
      victim.updateStrength();
      victim.updateHP();
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