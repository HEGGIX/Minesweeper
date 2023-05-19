var board = [];
var rows = 8;
var columns = 8;

var minesCount = 10;
var minesLocation = []; // "2-2", "3-4", "2-1"

var tilesClicked = 0; //goal to click all tiles except the ones containing mines
var flagEnabled = false;

var gameOver = false;

const mainBoard = document.createElement("div");
mainBoard.setAttribute("id", "board");
document.body.append(mainBoard);
const flag = document.createElement("button");
flag.setAttribute("id", "flag-button");
document.body.append(flag);
flag.textContent =  "🚩";

window.onload = function() {
    startGame();
}
