function goodTime(){
    let input = document.getElementById("goodTimeInput");
    let message = input.value;
    alert(message);
}

let coinProgram = document.getElementById("coinProgram");
let colorProgram = document.getElementById("colorProgram");
coinProgram.hidden = true;
colorProgram.hidden = true;

function showCoinProgram(){
    coinProgram.hidden = false;
    colorProgram.hidden = true;
}

function showColorProgram(){
    coinProgram.hidden = true;
    colorProgram.hidden = false;
}