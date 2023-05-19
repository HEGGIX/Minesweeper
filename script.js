var board = [];
var rows = 8;
var columns = 8;

var minesCount = 10;
var minesLocation = [];

var tilesClicked = 0; 
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

function setMines() {
    let minesLeft = minesCount;
    while (minesLeft > 0) { 
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if (!minesLocation.includes(id)) {
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}


function startGame() {
    document.getElementById("mines-count").innerText = minesCount;
    flag.addEventListener("click", setFlag);
    setMines();

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            mainBoard.append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
}