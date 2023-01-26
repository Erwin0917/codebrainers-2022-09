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
            this.controlPanel = new GameControlPanel(gameHtmlWrapper.querySelector('#gameControlWrapper'))
        }

    }
}

class BoardController {

    constructor(boardHtmlWrapper) {
        this.boardWrapper = boardHtmlWrapper;
        this.teamWrapperA = this.boardWrapper.querySelector('#team-wrapper-a');
        this.teamWrapperB = this.boardWrapper.querySelector('#team-wrapper-b');
    }

}

class GameControlPanel {
    constructor(gamePanelHtml) {
        this.gamePanel = gamePanelHtml;

        this.nameInput = this.gamePanel.querySelector('#name');
        this.strengthInput = this.gamePanel.querySelector('#strength')
        this.weaponInput = this.gamePanel.querySelector('#weapon')
        this.teamSelect = this.gamePanel.querySelector('#default_select')


        this.randomPersonButton = this.gamePanel.querySelector('#randomPerson');
        this.startBattleButton = this.gamePanel.querySelector('#startBattle')

        this.randomPersonButton.addEventListener('click', () => {
            const newMember = this.drawPerson();
            this.setInputs(newMember);
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

