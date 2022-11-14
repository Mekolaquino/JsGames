let botPick = ["Water","Fire","Lightning"];
let historyList = document.querySelector("#historyList");
let playerScore = document.querySelector("#playerScore");
let bootScore = document.querySelector("#bootScore");
let newPlayerScore = 0;
let newbootPlayerScore = 0;


let waterBtn = document.querySelector("#waterBtn");
waterBtn.addEventListener("click", waterFunction);

function waterFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");

    alert ("The Computer Pick " + botPick[i]);

    if ( i == 0) {
        historyItem.textContent ="Water v.s Water Its a Tie";
        historyList.appendChild(historyItem);

    }
