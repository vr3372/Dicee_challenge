let images = [
  "",
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function changePic() {
  let curImage = document.querySelector(".first");
  let nesImage = document.querySelector(".second");
  let winner = document.querySelector(".caseone");
  let firstDice = Math.round(Math.random() * 6 + 0.5);
  let secondDice = Math.round(Math.random() * 6 + 0.5);
  if (firstDice == secondDice) {
    winner.textContent = "🎲 Draw! 🎲";
    curImage.src = images[firstDice];
    nesImage.src = images[secondDice];
  } else if (firstDice > secondDice) {
    winner.textContent = "😎 Player 1 wins! 😷";
    curImage.src = images[firstDice];
    nesImage.src = images[secondDice];
    document.querySelector(".applause").play();
  } else if (secondDice > firstDice) {
    winner.textContent = "😷 Player 2 wins! 😎";
    curImage.src = images[firstDice];
    nesImage.src = images[secondDice];
    document.querySelector(".applause").play();
  }
}

document.querySelector(".press").onclick = function () {
  changePic();
};
