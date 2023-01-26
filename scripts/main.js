import { Criminal, Hero } from "./Character.js";
import { weaponDraw } from "./Weapon.js";
import { GameController } from './GameController.js';

const noTeamMembers = 5;

const minMaxHP = {
  minHP: between(120, 250),
  maxHP: between(50, 80),
};

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
    const member = new name(minMaxHP.minHP, minMaxHP.maxHP);
    const weapon = weaponDraw();
    member.setWeapon(weapon);
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
        const opponents = [heroInBattle, criminalInBattle].sort(
          () => 0.5 - Math.random()
        );
        duel(opponents[0], opponents[1]);
      }
    });
  } while ((isTeamDead(heroTeam) || isTeamDead(criminalTeam)) === false);
  console.log(heroTeam);
  console.log(criminalTeam);
};




(function () {
  console.log('run');
  const gameHtmlWrapper = document.querySelector('#game-wrapper-one');
  const gameController = new GameController(gameHtmlWrapper);
  gameController.controlPanel.startBattleButton.addEventListener('click', () => {
    battle(noTeamMembers);
  })
  console.log('gameController ', gameController);
  gameController.controlPanel.randomPersonButton.addEventListener('click', () => {
    const personClass = Math.random() > 0.5 ? Hero : Criminal;
    const member = new personClass(minMaxHP.minHP, minMaxHP.maxHP);
    const weapon = weaponDraw();
    member.setWeapon(weapon);
    console.log('member', member);
  })

})();



