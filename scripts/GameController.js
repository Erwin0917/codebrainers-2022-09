import { Criminal, Hero, Character } from "./Character.js";
import { between } from "./main.js";
import { weaponDraw } from "./Weapon.js";

// TODO: dlaczego do jednego teamu dodaje

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

export class GameController {
  constructor(gameHtmlWrapper) {
    this.gameWrapper = gameHtmlWrapper;

    if (gameHtmlWrapper.querySelector("#gameBoard")) {
      this.boardController = new BoardController(
        gameHtmlWrapper.querySelector("#gameBoard")
      );
    }

    if (gameHtmlWrapper.querySelector("#gameControlWrapper")) {
      this.controlPanel = new GameControlPanel(gameHtmlWrapper.querySelector("#gameControlWrapper"),this.boardController.addMemberToTeam);
      this.controlPanel.startBattleButton.addEventListener('click',this.battle)
    }
  }
  battle = () => {
    do {
      this.boardController.teamA.forEach((heroInBattle, index) => {
        let criminalInBattle = this.boardController.teamB[index];
        if (criminalInBattle.isAlive() === false) {
          criminalInBattle = this.boardController.teamB.find((person) => person.isAlive());
        }
        if (criminalInBattle !== undefined) {
          const opponents = [heroInBattle, criminalInBattle].sort(
            () => 0.5 - Math.random()
          );
          duel(opponents[0], opponents[1]);
        }

        this.boardController.updateTeamsView();
      });
    } while ((isTeamDead(this.boardController.teamA) || isTeamDead(this.boardController.teamB)) === false);
    console.log(this.boardController.teamA);
    console.log(this.boardController.teamB);
  };
}

class BoardController {
  constructor(boardHtmlWrapper) {
    this.boardWrapper = boardHtmlWrapper;
    this.teamWrapperA = this.boardWrapper.querySelector("#team-wrapper-a");
    this.teamWrapperB = this.boardWrapper.querySelector("#team-wrapper-b");
    this.teamA = [];
    this.teamB = [];
  }

  createPersonCard = (member) => {
    console.log('member: ', member)
    if (member instanceof Character === false) {
      console.error("member not instance of Character");
      return;
    }

    const personWrapper = document.createElement("div");
    personWrapper.classList.add("personWrapper");
    personWrapper.innerHTML = `
    <div class='avatar'><img src='${member.imageUrl}'></div>
    <div class='personName'>Name: ${member.name}</div>
    <div class='personWeapon'>Weapon: ${member.weapon.name}</div>
    <div class='personStrength'>Strength: ${member.strength}</div>
    <div class='personHitPoints'>Hit Points: ${member.hitPoints}</div>
    <progress class='nes-progress is-error' value='${member.hitPoints}' max='${member.hitPoints}'></progress>
    `;
    return personWrapper;
  };

  addMemberToTeam = (member, team) => {
    const personCard = this.createPersonCard(member);
    if (team === "0") {
      this.teamA.push(member);
      this.teamWrapperA.appendChild(personCard);
    } else {
      this.teamB.push(member);
      this.teamWrapperB.appendChild(personCard);
    }
  };

  updateTeamsView = () => {
    this.clearTeamWrapper(this.teamWrapperA);
    this.clearTeamWrapper(this.teamWrapperB);

    const newTeamAView = this.createTeamView(this.teamA);
    const newTeamBView = this.createTeamView(this.teamB);

    newTeamAView.forEach(memberCard => this.teamWrapperA.appendChild(memberCard));
    newTeamBView.forEach(memberCard => this.teamWrapperB.appendChild(memberCard));
  }

  createTeamView = (team) => {
    return team.map(member => this.createPersonCard(member));
  }

  clearTeamWrapper = (teamWrapper) => {
    teamWrapper.innerHTML = '';
  }

}

class GameControlPanel {
  constructor(gamePanelHtml, addToTeamCallback) {
    this.gamePanel = gamePanelHtml;

    this.nameInput = this.gamePanel.querySelector("#name");
    this.strengthInput = this.gamePanel.querySelector("#strength");
    this.weaponInput = this.gamePanel.querySelector("#weapon");
    this.teamSelect = this.gamePanel.querySelector("#default_select");

    this.randomPersonButton = this.gamePanel.querySelector("#randomPerson");
    this.startBattleButton = this.gamePanel.querySelector("#startBattle");
    this.addToTeamButton = this.gamePanel.querySelector("#addToTeam");

    this.newMember = null;

    this.randomPersonButton.addEventListener(
      "click",
      this.randomPersonAndSetInputs
    );

    this.addToTeamButton.addEventListener("click", () => {
      if (this.newMember !== null) {
        addToTeamCallback(this.newMember, this.teamSelect.value); /// !!!!!!
      }
      this.randomPersonAndSetInputs();
    });
  }

randomPersonAndSetInputs = async () => {
    this.newMember = await this.drawPerson();
    this.setInputs(this.newMember);
  };

  async drawPerson() {
    const characterId = between(1,826)
    const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    const characterData = await response.json()
    const personClass = Math.random() > 0.5 ? Hero : Criminal;
    const minMaxHP = {
      HP: between(120, 250),
      strength: between(50, 80),
    };
    const member = new personClass(minMaxHP.HP, minMaxHP.strength);
    member.name = characterData.name
    member.imageUrl = characterData.image
    const weapon = weaponDraw();
    member.setWeapon(weapon);
    return member;
  }

  setInputs = (member) => {
    this.nameInput.value = member.name;
    this.strengthInput.value = member.strength;
    this.weaponInput.value = member.weapon.name;
    this.teamSelect.value = Math.random() > 0.5 ? 0 : 1;
  };
}

