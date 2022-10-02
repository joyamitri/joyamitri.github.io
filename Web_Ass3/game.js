const row1 = document.querySelectorAll("div.row1 > div.cell");
const row2 = document.querySelectorAll("div.row2 > div.cell");
const row3 = document.querySelectorAll("div.row3 > div.cell");

function myMoveR1(x, y){
    const el = document.getElementById("coin");
    let pos = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == 150){
        clearInterval(id);
        }else{
            pos++;
            if(y == "row1-cell1"){
                el.style.top = pos + "px";
                el.style.right = 150 + "px";
                el.style.opacity = 1; 
            }
            else if(y == "row1-cell2"){
                el.style.top = pos + "px";
                el.style.bottom = pos + "px";
                el.style.opacity = 1; 
            }
            else if(y == "row1-cell3"){
                el.style.top = pos + "px";
                el.style.left = 150 + "px";
                el.style.opacity = 1; 
            }
            
        }
    }
}

function myMoveR2(x, y){
    const el = document.getElementById("red");
    let pos = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == x){
        clearInterval(id);
        }else{
            pos++;
            if(y == "row2-cell1"){
                el.style.top = pos + "px";
                el.style.right = 150 + "px";
                el.style.opacity = 1; 
            }
            else if(y == "row2-cell2"){
                el.style.top = pos + "px";
                el.style.bottom = pos + "px";
                el.style.opacity = 1; 
            }
            else if(y == "row2-cell3"){
                el.style.top = pos + "px";
                el.style.left = 150 + "px";
                el.style.opacity = 1; 
            }
            
        }
    }
}

function myMoveR3(x, y){
    const el = document.getElementById("red");
    let pos = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == x){
        clearInterval(id);
        }else{
            pos++;
            if(y == "row3-cell1"){
                el.style.top = pos + "px";
                el.style.right = 150 + "px";
                el.style.opacity = 1; 
            }
            else if(y == "row3-cell2"){
                el.style.top = pos + "px";
                el.style.bottom = pos + "px";
                el.style.opacity = 1; 
            }
            else if(y == "row3-cell3"){
                el.style.top = pos + "px";
                el.style.left = 150 + "px";
                el.style.opacity = 1; 
            }
            
        }
    }
}

for(let a of row1){
    a.onclick = function(){myMoveR1(150, a.id)};
}

for(let b of row2){
    b.onclick = function(){myMoveR2(310, b.id)};
}

for(let c of row3){
    c.onclick = function(){myMoveR3(460, c.id)};
}


