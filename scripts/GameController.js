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

        this.randomPersonButton = this.gamePanel.querySelector('#randomPerson');
        this.startBattleButton = this.gamePanel.querySelector('#startBattle')
    }
}
