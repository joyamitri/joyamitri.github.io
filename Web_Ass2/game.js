let bounds; 
let lost;
let start;
let end;
window.onload = function(){
    start = document.getElementById("start");
    start.onclick = sClick;
    end = document.getElementById("end");
    end.onmouseover = lost_game();
    bounds = document.getElementsByClassName("boundary");
    for(let i = 0; i < bounds.length - 1; i++){
        bounds[i].onmouseover = overBoundary;
    }
}

function overBoundary(){
    lost = true;
    //this loop add a class to the boundaries without removing/affecting existing classes
    for (var i = 0; i < bounds.length - 1; i++) {
        bounds[i].className += " youlose";
    }
}

function sClick(){
    lost = false;
    //this loop remove a single class of the boundaries without affecting other classes
    /*regex:
    (?:^|\s): match the start of the string or any single whitespace character
    (?!\S): verifies if the class name is whole. also ensures there is no non-space character following
     */
    for (var i = 0; i < bounds.length - 1; i++) {
        bounds[i].className = bounds[i].className.replace(/(?:^|\s)youlose(?!\S)/g, '');
    }
}

function lost_game(){
    if(lost){
        alert("You lost")
    }else{
        alert("You won!")
    }
}

