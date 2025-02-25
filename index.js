let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.getElementById("diceImage1").src = `./images/dice${randomNumber1}.png`;
document.getElementById("diceImage2").src = `./images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player One Wins!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player Two Wins!! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw";
}
