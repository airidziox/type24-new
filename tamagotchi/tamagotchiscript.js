"use strict";
const chooseTamagotchiScreen = document.querySelector(".chooseTamagotchi");
const gameScreen = document.querySelector(".gameScreen");
const gameOverScreen = document.querySelector(".gameOverScreen");
const tamagotchiImg = document.querySelectorAll(".tamagotchiImg");
const chosenTamagotchiImg = document.querySelector(".chosenTamagotchi");
const poopsOnScreen = document.querySelector(".poops");
const playAgain = document.querySelector(".playAgain");
const option = document.querySelectorAll(".option");
const happyBar = document.querySelector(".happyBar");
const foodBar = document.querySelector(".foodBar");
const sleepBar = document.querySelector(".sleepBar");
gameScreen.style.display = "none";
let happy = 100;
let food = 100;
let sleep = 100;
let gameOver = false;
gameOverScreen.style.display = "none";
/// CHOOSE CHARACTER
tamagotchiImg.forEach(image => {
    image.onclick = () => {
        chosenTamagotchiImg.src = image.src;
        chooseTamagotchiScreen.style.display = "none";
        gameScreen.style.display = "block";
        startGame();
    };
});
/// MAIN GAME
function rnd(num) {
    return Math.floor(Math.random() * num);
}
barColors();
option[0].onclick = () => {
    if (food < 100) {
        food += rnd(10);
        foodBar.style.width = food + "%";
    }
    if (food > 100) {
        food = 100;
        foodBar.style.width = food + "%";
    }
};
option[1].onclick = () => {
    if (happy < 100) {
        happy += rnd(10);
        happyBar.style.width = happy + "%";
    }
    if (happy > 100) {
        happy = 100;
        happyBar.style.width = happy + "%";
    }
};
option[2].onclick = () => {
    if (sleep < 100) {
        sleep += rnd(10);
        sleepBar.style.width = sleep + "%";
    }
    if (sleep > 100) {
        sleep = 100;
        sleepBar.style.width = sleep + "%";
    }
};
option[3].onclick = () => {
    poops = [];
    poopsOnScreen.innerHTML = "";
};
function startGame() {
    gameOver = false;
    happy = 100;
    food = 100;
    sleep = 100;
    happyBar.style.width = happy + "%";
    foodBar.style.width = food + "%";
    sleepBar.style.width = sleep + "%";
    let interval = setInterval(function gameLogic() {
        if (rnd(100) < 50) {
            happy -= 5;
            happyBar.style.width = happy + "%";
        }
        if (rnd(100) < 30) {
            food -= 5;
            foodBar.style.width = food + "%";
        }
        if (rnd(100) < 10) {
            sleep -= 5;
            sleepBar.style.width = sleep + "%";
        }
        if (rnd(100) < 10) {
            poopAppear();
        }
        if (happy < 0 || food < 0 || sleep < 0 || poops.length >= 5) {
            gameOver = true;
        }
        if (gameOver) {
            showGameOver();
            clearInterval(interval);
            return;
        }
        barColors();
    }, 500);
}
let poops = [];
// POOP APPEARANCE
function poopAppear() {
    poops.push(`<div class="poop display-1" style="left: ${rnd(80)}%; top: ${rnd(80)}%">💩</div>`);
    for (let i = 0; i < poops.length; i++) {
        poopsOnScreen.innerHTML += poops[i];
    }
}
function barColors() {
    if (food >= 50) {
        foodBar.style.backgroundColor = "#2edd00";
    }
    else if (food > 25) {
        foodBar.style.backgroundColor = "#ffe900";
    }
    else {
        foodBar.style.backgroundColor = "#ff0000";
    }
    if (sleep >= 50) {
        sleepBar.style.backgroundColor = "#2edd00";
    }
    else if (sleep > 25) {
        sleepBar.style.backgroundColor = "#ffe900";
    }
    else {
        sleepBar.style.backgroundColor = "#ff0000";
    }
    if (happy >= 50) {
        happyBar.style.backgroundColor = "#2edd00";
    }
    else if (happy > 25) {
        happyBar.style.backgroundColor = "#ffe900";
    }
    else {
        happyBar.style.backgroundColor = "#ff0000";
    }
}
// GAME OVER
function showGameOver() {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
}
playAgain.onclick = () => {
    chooseTamagotchiScreen.style.display = "flex";
    gameOverScreen.style.display = "none";
};
