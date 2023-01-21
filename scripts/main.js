import { Weapon } from './Weapon.js';
import { Criminal, Hero } from './Character.js';

//TODO: Ustaw nową broń przy tworzeniu postaniu, wykorzystaj ją podczas walki.

export function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
};

const isMemberDead = (member) => member.isAlive() === false;
const isTeamDead = (team) => team.every(isMemberDead);

const drawTeams = (noOfTeamMembers, name) => {
  const tempTeam = [];
  for (let i = 0; i < noOfTeamMembers; i++) {
    const member = new name(between(120, 250), between(50, 80));
    tempTeam.push(member);
  }
  return tempTeam;
};

const battle = (noOfTeamMembers) => {
  const heroTeam = drawTeams(noOfTeamMembers, Hero);
  const criminalTeam = drawTeams(noOfTeamMembers, Criminal);

  do {
    heroTeam.forEach((heroInBattle, index) => {
      let criminalInBattle = criminalTeam[index];
      if (criminalInBattle.isAlive() === false) {
        criminalInBattle = criminalTeam.find((person) => person.isAlive());
      }
      if (criminalInBattle !== undefined) {
        const opponents = [heroInBattle, criminalInBattle].sort(() => 0.5 - Math.random());
        duel(opponents[0], opponents[1]);
      }
    });
  } while ((isTeamDead(heroTeam) || isTeamDead(criminalTeam)) === false);
  console.log(heroTeam);
  console.log(criminalTeam);
};

battle(5);
