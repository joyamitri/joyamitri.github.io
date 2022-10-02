let origBoard;
const human_play = "red";
const ai_player = "yellow";
const win_comb = [["row1-cell1", "row1-cell2", "row1-cell3"], 
["row2-cell1", "row2-cell2", "row2-cell3"], 
["row3-cell1", "row3-cell2", "row3-cell3"],
["row1-cell1", "row2-cell1", "row3-cell1"],
["row1-cell2", "row2-cell2", "row3-cell2"],
["row1-cell3", "row2-cell3", "row3-cell3"],
["row1-cell1", "row2-cell2", "row3-cell3"],
["row1-cell3", "row2-cell2", "row3-cell1"]];
const occupied = [-1, -1, -1, -1, -1, -1, -1, -1];

const cells = document.querySelectorAll(".cell");
const start = document.getElementById("start");
start.addEventListener("click", startGame);

function startGame() {
    document.getElementById("sett").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for(let a in cells){
        cells[a].onclick = function(){turnClick(a)};
    }
}

// a.onclick = function (){turn(150, a.id)};

function turnClick(a) {
    if (typeof origBoard[a] == 'number') {
        turn(150, cells[a].id);
        // if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
    }
}

function turn(cell_pos, cell_id){
    const el = document.getElementById("coin");
    let pos = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == cell_pos){
        clearInterval(id);
        }else{
            pos++;
            if(cell_id == "row1-cell1"){
                el.style.top = 150 + "px";
                el.style.right = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row1-cell2"){
                el.style.top = 150 + "px";
                el.style.bottom = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row1-cell3"){
                el.style.top = 150 + "px";
                el.style.left = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row2-cell1"){
                el.style.top = 310 + "px";
                el.style.right = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row2-cell2"){
                el.style.top = 310 + "px";
                el.style.bottom = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row2-cell3"){
                el.style.top = 310 + "px";
                el.style.left = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row3-cell1"){
                el.style.top = 460 + "px";
                el.style.right = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row3-cell2"){
                el.style.top = 460 + "px";
                el.style.bottom = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            else if(cell_id == "row3-cell3"){
                el.style.top = 460 + "px";
                el.style.left = cell_pos + "px";
                el.style.opacity = 1; 
                
            }
            
        }
    }

}


