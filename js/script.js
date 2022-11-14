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
    else if ( i == 1) {

        historyItem.textContent ="Water v.s Fire You Win";
        historyList.appendChild(historyItem);
        
        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

        
    }
    else {

        historyItem.textContent ="Water v.s Lightning You Lose";
        historyList.appendChild(historyItem);

        newbootPlayerScore++;
        bootScore.textContent = newbootPlayerScore;
        
    }

}

let fireBtn = document.querySelector("#fireBtn");
fireBtn.addEventListener("click", fireFunction);

function fireFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");

    alert ("The Computer Pick " + botPick[i]);

    if ( i == 1) {
        historyItem.textContent ="Fire v.s Fire Its a Tie";
        historyList.appendChild(historyItem);

    }
    else if ( i == 2) { 
        historyItem.textContent ="Fire v.s lightning You Win";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;
        
    }
    else {
        historyItem.textContent ="Fire v.s Water You Lose";
        historyList.appendChild(historyItem);

        newbootPlayerScore++;
        bootScore.textContent = newbootPlayerScore;
        
    }

}

let lightningBtn = document.querySelector("#lightningBtn");
lightningBtn.addEventListener("click", lightFunction);

function lightFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");

    alert ("The Computer Pick " + botPick[i]);
    

    if ( i == 2) {
        historyItem.textContent ="Lightning v.s Lightning Its a Tie";
        historyList.appendChild(historyItem);

    }
    else if ( i == 0) {
        historyItem.textContent ="Lightning v.s Water You Win";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;
        
        
    }
    else {
        historyItem.textContent ="Lightning v.s Fire You Lose";
        historyList.appendChild(historyItem);

        newbootPlayerScore++;
        bootScore.textContent = newbootPlayerScore;
        
    }

}
