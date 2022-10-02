const cell1 = document.getElementById("row1-cell1");
function myMove(){
    let id = null;
    const el = document.getElementById("red");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == 150){
        clearInterval(id);
        }else{
            pos++
            el.style.top = pos + "px";
            el.style.right = pos + "px";
            el.style.opacity = 1;
        }
    }
}

cell1.onclick = myMove;