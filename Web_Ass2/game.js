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
let out; 
let username;

window.onload = function(){
    store = document.getElementsByClassName("boundary example");
    let flag = true;
    username = prompt("Enter Username: ");
    const user_veri = JSON.parse(localStorage.getItem(username));
    if(user_veri != null){
        let password = String(prompt("Enter Password: "));
        while(flag){
            if(String(user_veri.pass) != password){
                password = String(prompt("Enter Password: "));
            }else{
                flag = false;
            }
        }
        store[0].innerHTML = "<span><strong>Score: </strong></span>" + user_veri.score; 
    }else{
        let password = prompt("Enter Password: ");
        const users = {name: username, pass: password, score: 0};
        localStorage.setItem(username, JSON.stringify(users));
        store[0].innerHTML = "<span><strong>Score: </strong></span>" + users.score;
    }
// ---------------------------------------------------------------------------------------
    start = document.getElementById("start"); //access the element that has id = start
    start.onmouseover = hover_start; //check if the mouse hovered over S to start the game
    start.onclick = sClick; //check if the user click on S to reset settings
    out = document.getElementById("game");
    out.onmouseleave = overBoundary; //disable cheating
    end = document.getElementById("end"); //access the element that has id = end
    end.onmouseover = end_game; //check if the mouse hovered over E to end the game
    bounds = document.getElementsByClassName("boundary"); //array that stores elements that have className = boundary
    stat = document.getElementById("status"); //access h2 tag to check the status of the user
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
            let user_score_dec = JSON.parse(localStorage.getItem(username));
            user_score_dec.score -= 10;
            localStorage.setItem(username, JSON.stringify(user_score_dec));
            score = JSON.parse(localStorage.getItem(username));
            store[0].innerHTML = "<span><strong>Score: </strong></span>" + score.score;
            i++;
            hover_e = false;
        }
    }
}

//Start the game when we hover over S
function hover_start(){
    if(hover_e){
        hover = true;
    }
}

//refresh/restart when clicking on S
function sClick(){
    hover = true;
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
    if((!lost) && (hover_e == true)){
        stat.textContent = "YOU WON!";
        hover = false;
        let user_score_inc = JSON.parse(localStorage.getItem(username));
        user_score_inc.score += 5;
        localStorage.setItem(username, JSON.stringify(user_score_inc));
        score = JSON.parse(localStorage.getItem(username));
        store[0].innerHTML = "<span><strong>Score: </strong></span>" + score.score;
        hover_e = false;
    }
}




