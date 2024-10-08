let name = prompt("Welkom speler! Wat is jouw username?", "Vul hier jouw username in...");
let player_score = 0;
let bot_score = 0;

function updateScore() {
    if (name && name.trim().length > 0) {
        document.getElementById("score").innerText = `${name}'s score: ${player_score} | Bot's score: ${bot_score}`;
    } else {
        document.getElementById("score").innerText = `Jouw score: ${player_score} | Bot's score: ${bot_score}`;
    }
}

updateScore();

let player_choice = 0;
let thinking = document.getElementById("thinking");
let won = document.getElementById("won");
let choose_id = document.getElementById("choose");

function choose(number) {
    player_choice = number;
    showThinkingAnimation();
}

function showThinkingAnimation() {
    choose_id.style.display = "none";
    thinking.style.display = "block";
    
    setTimeout(function() {
        thinking.style.display = "none";
        play(player_choice);
    }, 1000);
}

function play(number) {
    let computer_choice = Math.floor(Math.random() * 3) + 1;

    let choices = ["Steen", "Papier", "Schaar"];
    let player_choice_text = choices[number - 1];
    let bot_choice_text = choices[computer_choice - 1];

    won.style.display = "block";

    if ((number == 1 && computer_choice == 3) || 
        (number == 2 && computer_choice == 1) || 
        (number == 3 && computer_choice == 2)) {

        won.innerText = `${name} heeft gewonnen! ${player_choice_text} verslaat ${bot_choice_text}`;
        player_score++;
        updateScore();

    } else if (number == computer_choice) {
        won.innerText = `Gelijkspel! Zowel ${name} als de bot kozen ${player_choice_text}`;

    } else {
        won.innerText = `De bot heeft gewonnen! ${bot_choice_text} verslaat ${player_choice_text}`;
        bot_score++;
        updateScore();
    }

    setTimeout(function() {
        won.style.display = "none";
        choose_id.style.display = "block";
    }, 2000);
}
