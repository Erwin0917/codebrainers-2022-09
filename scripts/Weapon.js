export class Weapon {
  constructor(weaponPower) {
    this.weaponPower = weaponPower;
  }
}

const revolver = new Weapon(5);
const shotgun = new Weapon(7);
const knife = new Weapon(3);
const stick = new Weapon(1);

export const weaponsList = [revolver, shotgun, knife, stick];
