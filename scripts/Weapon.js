import { between } from "./main.js";

export class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }

  getDamage() {
    return this.damage;
  }
}

export const weaponDraw = () => {
  const weaponsList = ["hatchet", "hammer", "sword"];
  const weaponAssigned = weaponsList[between(0, weaponsList.length - 1)];

  switch (weaponAssigned) {
    case "hatchet":
      return new Weapon(weaponAssigned, 20);
    case "hammer":
      return new Weapon(weaponAssigned, 10);
    case "sword":
      return new Weapon(weaponAssigned, 30);
    default:
      throw new Error("No such weapon");
  }
};
