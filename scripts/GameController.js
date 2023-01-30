import { Criminal, Hero } from "./Character.js";
import { between } from "./main.js";
import { weaponDraw } from "./Weapon.js";


export class GameController {

    constructor(gameHtmlWrapper) {
        this.gameWrapper = gameHtmlWrapper;

        if (gameHtmlWrapper.querySelector('#gameBoard')) {
            this.boardController = new BoardController(gameHtmlWrapper.querySelector('#gameBoard'))
        }

        if (gameHtmlWrapper.querySelector('#gameControlWrapper')) {
            this.controlPanel = new GameControlPanel(gameHtmlWrapper.querySelector('#gameControlWrapper'), this.boardController.addMemberToTeam)
        }

    }
}

class BoardController {

    constructor(boardHtmlWrapper) {
        this.boardWrapper = boardHtmlWrapper;
        this.teamWrapperA = this.boardWrapper.querySelector('#team-wrapper-a');
        this.teamWrapperB = this.boardWrapper.querySelector('#team-wrapper-b');
        this.teamA = [];
        this.teamB = [];
    }

    // team == 0 - porównanie bez porównania typu
    // team === 0 - porównanie z porównaniem typów
    // parseInt(team) === 0 - z porównaniem typów i wartości, ale wtedy string bedzie initem
    // team === '0' - zero staje sie stringiem i mozna porownac z team bo team jest stringiem
    addMemberToTeam = (member, team) => {
        team == 0 ? this.teamA.push(member) : this.teamB.push(member);
        console.log('thisTeams', this.teamA, this.teamB);
        //console.log('team', team, typeof(team))
    }

}

class GameControlPanel {
    constructor(gamePanelHtml, addToTeamCallback) {
        this.gamePanel = gamePanelHtml;

        this.nameInput = this.gamePanel.querySelector('#name');
        this.strengthInput = this.gamePanel.querySelector('#strength');
        this.weaponInput = this.gamePanel.querySelector('#weapon');
        this.teamSelect = this.gamePanel.querySelector('#default_select');


        this.randomPersonButton = this.gamePanel.querySelector('#randomPerson');
        this.startBattleButton = this.gamePanel.querySelector('#startBattle');
        this.addToTeamButton = this.gamePanel.querySelector('#addToTeam');

        this.newMember = null


        this.randomPersonButton.addEventListener('click', () => {
            this.newMember = this.drawPerson();
            this.setInputs(this.newMember);

        })

        // Wylosowanie nowej postaci po dodaniu aktualnej do teamu
        this.addToTeamButton.addEventListener('click', () => {
            if (this.newMember !== null) {
                addToTeamCallback(this.newMember, this.teamSelect.value);
            }
            this.newMember = this.drawPerson();
            this.setInputs(this.newMember);
        })

    }

    drawPerson() {
        const personClass = Math.random() > 0.5 ? Hero : Criminal;
        const minMaxHP = {
            HP: between(120, 250),
            strength: between(50, 80),
        };
        const member = new personClass(minMaxHP.HP, minMaxHP.strength);
        const weapon = weaponDraw();
        member.setWeapon(weapon);
        return member;
    }

    setInputs = (member) => {
        this.nameInput.value = member.name
        this.strengthInput.value = member.strength
        this.weaponInput.value = member.weapon.name
        this.teamSelect.value = Math.random() > 0.5 ? 0 : 1
    }

}