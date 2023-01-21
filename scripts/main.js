function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

const duel = (attacker, victim) => {
  do {
    if (attacker.isAlive() && victim.isAlive()) {
      attacker.attack(victim);
    }
    if (victim.isAlive() && attacker.isAlive()) {
      victim.attack(attacker);
    }
  } while (victim.isAlive() && attacker.isAlive());
}


const heroTeam = []
const criminalTeam = []

for (let i = 0; i < 5; i++) {
  const hero = new Hero(between(80, 100), between(50, 80));
  const criminal = new Criminal(between(80, 100), between(50, 80));
  heroTeam.push(hero);
  criminalTeam.push(criminal);
}

const isMemberDead = (member) => member.isAlive() === false;
const isTeamDead = (team) => team.every(isMemberDead);


do {
  heroTeam.forEach((heroInBattle, index) => {

    let criminalInBattle = criminalTeam[index];
    if (criminalInBattle.isAlive() === false) {
      criminalInBattle = criminalTeam.find((person) => person.isAlive());
    }
    if (criminalInBattle !== undefined) {
      duel(heroInBattle, criminalInBattle);
    }
  })
} while ((isTeamDead(heroTeam) || isTeamDead(criminalTeam)) === false)

console.log(heroTeam);
console.log(criminalTeam);
