let origBoard;
const human_player = "X";
const ai_player = "O";
const win_comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const cells = document.querySelectorAll(".cell");
const start = document.getElementById("start");
start.addEventListener("click", startGame);

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    document.getElementById("sett").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for(let a = 0; a < cells.length; a++){
        cells[a].innerText = '';
        cells[a].style.removeProperty('background-color');
        cells[a].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, human_player);
        if (!checkWin(origBoard, human_player) && !checkTie()){
            turn(bestSpot(), ai_player);
        }
    }
}

function turn(cell_id, player){
    origBoard[cell_id] = player;
    const cell = document.getElementById(cell_id);
    // cell.innerText = player;
    if(player == "X"){
        cell.className += " hold-red";
    }else{
        cell.className += " hold-yellow";
    }
    // let pos = 0;
    // let id = null;
    // clearInterval(id);
    // id = setInterval(frame, 5);
    // function frame(){
    //     if(pos == cell_pos){
    //     clearInterval(id);
    //     }else{
    //         pos++;
    //         if(cell_id == "0"){
    //             el.style.top = 150 + "px";
    //             el.style.right = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "1"){
    //             el.style.top = 150 + "px";
    //             el.style.bottom = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "2"){
    //             el.style.top = 150 + "px";
    //             el.style.left = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "3"){
    //             el.style.top = 310 + "px";
    //             el.style.right = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "4"){
    //             el.style.top = 310 + "px";
    //             el.style.bottom = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "5"){
    //             el.style.top = 310 + "px";
    //             el.style.left = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "6"){
    //             el.style.top = 460 + "px";
    //             el.style.right = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "7"){
    //             el.style.top = 460 + "px";
    //             el.style.bottom = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
    //         else if(cell_id == "8"){
    //             el.style.top = 460 + "px";
    //             el.style.left = cell_pos + "px";
    //             el.style.opacity = 1; 
    //         }
            
    //     }
    // }
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)

}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of win_comb.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of win_comb[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == human_player ? "blue" : "red";
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == human_player ? "You win!" : "You lose.");
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return minimax(origBoard, ai_player).index;
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}

function minimax(newBoard, player) {
    var availSpots = emptySquares();

    if (checkWin(newBoard, human_player)) {
        return { score: -10 };
    } else if (checkWin(newBoard, ai_player)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == ai_player) {
            var result = minimax(newBoard, human_player);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, ai_player);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    var bestMove;
    if (player === ai_player) {
        var bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

