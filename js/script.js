let botPick = ["Lamborghini","Mustang","Supra"];
let historyList = document.querySelector("#historyList");
let playerScore = document.querySelector("#playerScore");
let bootScore = document.querySelector("#bootScore");
let newPlayerScore = 0;
let newbootPlayerScore = 0;


let lamborghiniBtn = document.querySelector("#lamborghiniBtn");
lamborghiniBtn.addEventListener("click", lamboFunction);

function lamboFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");

    alert ("The Computer Pick " + botPick[i]);

    if ( i == 0) {
        historyItem.textContent ="Lamborghini v.s Lamborghini Its a Tie";
        historyList.appendChild(historyItem);

    }
    else if ( i == 1) {

        historyItem.textContent ="Lamborghini v.s Mustang You Win";
        historyList.appendChild(historyItem);
        
        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

        
    }
    else {

        historyItem.textContent ="Lamborghini v.s Supra You Lose";
        historyList.appendChild(historyItem);

        newbootPlayerScore++;
        bootScore.textContent = newbootPlayerScore;
        
    }

}

let mustangBtn = document.querySelector("#mustangBtn");
mustangBtn.addEventListener("click", mustangFunction);

function mustangFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");

    alert ("The Computer Pick " + botPick[i]);

    if ( i == 1) {
        historyItem.textContent ="Mustang v.s Mustang Its a Tie";
        historyList.appendChild(historyItem);

    }
    else if ( i == 2) { 
        historyItem.textContent ="Mustang v.s Supra You Win";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;
        
    }
    else {
        historyItem.textContent ="Mustang v.s Lamborghini You Lose";
        historyList.appendChild(historyItem);

        newbootPlayerScore++;
        bootScore.textContent = newbootPlayerScore;
        
    }

}

let supraBtn = document.querySelector("#supraBtn");
supraBtn.addEventListener("click", supraFunction);

function supraFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");

    alert ("The Computer Pick " + botPick[i]);
    

    if ( i == 2) {
        historyItem.textContent ="Supra v.s Supra Its a Tie";
        historyList.appendChild(historyItem);

    }
    else if ( i == 0) {
        historyItem.textContent ="Supra v.s Lamborghini You Win";
        historyList.appendChild(historyItem);

        newPlayerScore++;
        playerScore.textContent = newPlayerScore;
        
        
    }
    else {
        historyItem.textContent ="Supra v.s Mustang You Lose";
        historyList.appendChild(historyItem);

        newbootPlayerScore++;
        bootScore.textContent = newbootPlayerScore;
        
    }

}