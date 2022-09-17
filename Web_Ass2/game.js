let bounds; //array used to store all the boundaries in the maze
let lost; //variable used to check if the user lost and display message
let start; //variable used to start the game 
let hover; //variable used to check if the user hovered over S to start counting scores 
let end; //where the game ends 
let stat; //display the status of the user (won or lost)
let score = 0; //keep track of the score
let store; //put score inside the element that has id = boundary example
let hover_e = true; //keep track of the hovers over E 
let i; //counter

window.onload = function(){
    start = document.getElementById("start"); //access the element that has id = start
    start.onmouseover = hover_start; //check if the mouse hovered over S to start the game
    start.onclick = sClick; //check if the user click on S ti reset settings
    end = document.getElementById("end"); //access the element that has id = end
    end.onmouseover = end_game; //check if the mouse hovered over E to end the game
    bounds = document.getElementsByClassName("boundary"); //array that stores elements that have className = boundary
    stat = document.getElementById("status"); //access h2 tag to check the status of the user
    store = document.getElementsByClassName("boundary example");
    for(i = 0; i < bounds.length - 1; i++){
        bounds[i].onmouseover = overBoundary; //check if the user touched the boundaries 
    }
    
}

//If the user touches the boundaries
function overBoundary(){
    lost = true;

    if(hover){
        //this loop add a class to the boundaries without removing/affecting existing classes
        for (let i = 0; i < bounds.length - 1; i++) {
            bounds[i].className += " youlose";
        }
        stat.textContent = "YOU LOST!!";
        if(i == bounds.length - 1){
            score -= 10;
            store[0].innerHTML = "<span>Score: </span>" + score;
            i++;
            hover_e = false;
        }
    }
}

//Start the game when we hover over S
function hover_start(){
    hover = true;
}

//refresh/restart when clicking on S
function sClick(){
    hover_e = true;
    lost = false;
    i = bounds.length - 1;
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

//Check if the user won when hover over the E
function end_game(){
    //stat = document.getElementById("status");
    if(!lost){
        stat.textContent = "YOU WON!";
        hover = false;
    }
    if(hover_e == true){
        score += 5;
        store[0].innerHTML = "<span>Score: </span>" + score;
        hover_e = false;
    }
}




