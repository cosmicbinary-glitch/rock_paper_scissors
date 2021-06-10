let player
let computer

function computerPlay() {
    let gameArray = ["rock", "paper", "scissors"];
    let targetIndex = Math.floor(Math.random() * gameArray.length);
    let target = gameArray[targetIndex]
    return target
}

function reply_click() {
    player = event.srcElement.id;
    computer = computerPlay();

    if (playerScore === 5 || computerScore === 5 ) {
        let img = document.querySelector("img");
        img.setAttribute("onClick", " ");
        return;
    }

    playRound(player, computer)
    console.log(player, computer);
}

let computerScore = 0;
let playerScore = 0;
let scoreHeading = document.getElementById("score-heading");
let showPlayerScore = document.getElementById("player-score");
let showComputerScore = document.getElementById("computer-score");


function playRound(player, computer) {

    if (player === "rock" && computer === "paper" || player === "scissors" && computer === "rock" || player === "paper" && computer === "scissors") {
        computerScore++;
        scoreHeading.textContent = "You lost!";
        showComputerScore.textContent = "com: " + computerScore;
        loseRound (player);
        } else if (player === "scissors" && computer === "paper" || player === "paper" && computer === "rock" || player === "rock" && computer === "scissors") {
        playerScore++;
        scoreHeading.textContent = "You won!";
        showPlayerScore.textContent = "you: " + playerScore;
        winRound (player);
    } else {
        scoreHeading.textContent = "It's a tie!";  
        Draw (player);
    } 
}

let flavorText = document.getElementById("flavor-text");

function winRound (a) {

    switch (true) {
        case (player === "rock"):
        flavorText.textContent = "you draw your sword and attack, the flimsy thief cannot get close without losing a limb."
        checkScore(playerScore, computerScore);
        break;
        case (player === "paper"):
        flavorText.textContent = "you lift your staff and summon a mighty meteor, the mortal knight is no match for the aetheric realm."
        checkScore(playerScore, computerScore);
        break;
        case (player === "scissors"):
        flavorText.textContent = "before the mage can complete their incantation, you quickly liquify their health bar."
        checkScore(playerScore, computerScore);
        break;
    }
}

function loseRound (a) {

    switch (true) {
        case (player === "rock"):
        flavorText.textContent = "you waste time telling your squad where to stand. meanwhile, the mage has summoned a black hole."
        checkScore(playerScore, computerScore);
        break;
        case (player === "paper"):
        flavorText.textContent = "you try to cast your quickest spell, but the thief is twice as fast. maybe you should have put down ley-lines."
        checkScore(playerScore, computerScore);
        break;
        case (player === "scissors"):
        flavorText.textContent = "you try to outsmart the knight, but your dollar store knife doesn't even scratch his full-body mythrix armor."
        checkScore(playerScore, computerScore);
        break;
    }
}

function Draw (a) {

    switch (true) {
        case (player === "rock"):
        flavorText.textContent = "from friend, to ally, to practically a blood relative, you have been through everything with the one who stands before you. but now you are enemies, their blade drawn and brandished in your direction. you are equals in almost every way, but after today only one of you will live."
        checkScore(playerScore, computerScore);
        break;
        case (player === "paper"):
        flavorText.textContent = "one mage from the academy of arcane magick, the other from the university of aetheric studies.. a millenia has passed, and still you cannot banish your equal. however, they cannot destroy you either. the world, your battlefield, lies in ruin, but you still live another day to summon another meteor."
        checkScore(playerScore, computerScore);
        break;
        case (player === "scissors"):
        flavorText.textContent = "you never liked this punk, so what if they're your uncle. they're always trying to stab you under the table. you built up the reflexes to dodge whatever attack they throw at you, which they claim was their goal to begin with. but what if you just, react one day without thinking and hurt them? what will they do then?"
        checkScore(playerScore, computerScore);
        break;
    }
}

function checkScore(a, b) {
    let results = document.getElementById("results");
    let reset = document.getElementById("reset-button");
    let img = document.querySelector("img");

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            results.textContent = "rejoice! you prevailed!";
            reset.style.display = "block";
            img.setAttribute("onClick", " ");
        } else if (computerScore > playerScore) {
            results.textContent = "sadface. you have failed.";
            reset.style.display = "block";
            img.setAttribute("onClick", " ");
        } else {
            alert("you both died valiantly in combat")
        }   
    }
}