// Player 1 Rolls
var randomNumber1 = Math.random();
var dice1 = Math.floor(randomNumber1 * 6);
var diceIndex1 = dice1 + 1;


var num1 = document.querySelector(".img1");
var value1 = "./images/dice" + diceIndex1 + ".png"

num1.setAttribute("src", value1);

// Player 2 Rolls
var randomNumber2 = Math.random();
var dice2 = Math.floor(randomNumber2 * 6);
var diceIndex2 = dice2 + 1;


var num2 = document.querySelector(".img2");
var value2 = "./images/dice" + diceIndex2 + ".png"

num2.setAttribute("src", value2);

// To change the title
var titleText = document.querySelector(".title");

// To decide the winner
if (diceIndex1 > diceIndex2) {
    titleText.innerHTML = "Player 1 Wins";
} else if (diceIndex1 < diceIndex2) {
    titleText.innerHTML = "Player 2 Wins"
} else {
    titleText.innerHTML = "It's a Draw!"
}
