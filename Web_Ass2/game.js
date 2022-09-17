let bounds; 
let lost;
let start;
let hover;
let end;
let stat;
window.onload = function(){
    start = document.getElementById("start");
    start.onmouseover = hover_start;
    start.onclick = sClick;
    end = document.getElementById("end");
    end.onmouseover = end_game;
    bounds = document.getElementsByClassName("boundary");
    stat = document.getElementById("status");
    for(let i = 0; i < bounds.length - 1; i++){
        bounds[i].onmouseover = overBoundary;
    }
}

function overBoundary(){
    lost = true;

    if(hover){
        //this loop add a class to the boundaries without removing/affecting existing classes
        for (let i = 0; i < bounds.length - 1; i++) {
            bounds[i].className += " youlose";
        }
        stat.textContent = "YOU LOST!!";
    }
    //this loop add a class to the boundaries without removing/affecting existing classes
    // for (let i = 0; i < bounds.length - 1; i++) {
    //     bounds[i].className += " youlose";
    // }
    // stat.textContent = "YOU LOST!!"
    
}

function hover_start(){
    hover = true;
}

function sClick(){
    lost = false;
    //this loop remove a single class of the boundaries without affecting other classes
    /*regex:
    (?:^|\s): match the start of the string or any single whitespace character
    (?!\S): verifies if the class name is whole. also ensures there is no non-space character following
     */
    for (let i = 0; i < bounds.length - 1; i++) {
        bounds[i].className = bounds[i].className.replace(/(?:^|\s)youlose(?!\S)/g, '');
    }
    //document.location.reload(true);
    stat.textContent = "Begin by moving your mouse over the \"S\".";
}

function end_game(){
    stat = document.getElementById("status");
    if(!lost){
        stat.textContent = "YOU WON!";
    }
    // else{
    //     stat.textContent = "YOU WON!";
    // }
}


