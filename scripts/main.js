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

const duel = (attacker, victim) => {
  do {
    attacker.attack(victim);
    
    if (victim.isAlive()) {
      victim.attack(attacker);
    }
    
  } while (victim.isAlive() && attacker.isAlive());
}


const heroTeam = [] 

const criminalTeam = []

for (let i = 0; i<5; i++) {
  const hero = new Hero(between(80, 100), between(50,80));
  const criminal = new Criminal(between(80,100), between(50,80));
  heroTeam.push(hero);
  criminalTeam.push(criminal);
}

// heroTeam.forEach((heroInBattle,index) => {
//    duel(heroInBattle,criminalTeam[index]);
  
// })

const isTeamDead = (team) => {
  return team.every((teamMember) => {
    return teamMember.isAlive()
  })  
}

do {
  heroTeam.forEach((heroInBattle,index) => {
    duel(heroInBattle,criminalTeam[index])
  })

} while (isTeamDead(heroTeam) || isTeamDead(criminalTeam))

console.log(heroTeam);
console.log(criminalTeam);