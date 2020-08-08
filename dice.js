let one = "images/dice1.png";
let two = "images/dice2.png";
let three = "images/dice3.png";
let four = "images/dice4.png";
let five = "images/dice5.png";
let six = "images/dice6.png";

function changePic() {
  let curImage = document.querySelector(".first");
  let nesImage = document.querySelector(".second");
  let playerOne = document.querySelector(".playone");
  let playerTwo = document.querySelector(".playtwo");
  let rannum = Math.round(Math.random() * 6 + 0.5);
  if (rannum == 1) {
    curImage.src = one;
    nesImage.src = three;
    playerTwo.innerHTML = "player 2 wins";
    playerOne.innerHTML = "player 1";
    playerTwo.style.color = "yellow";
    playerOne.style.color = "rgb(250, 250, 219)";
    playerOne.style.transform = "scale(1)";
    playerTwo.style.transform = "scale(1.4)";
  } else if (rannum == 2) {
    curImage.src = four;
    nesImage.src = two;
    playerTwo.innerHTML = "player 2";
    playerOne.innerHTML = "player 1 wins";
    playerOne.style.color = "yellow";
    playerTwo.style.color = "rgb(250, 250, 219)";
    playerOne.style.transform = "scale(1.4)";
    playerTwo.style.transform = "scale(1)";
  } else if (rannum == 3) {
    curImage.src = three;
    nesImage.src = five;
    playerTwo.innerHTML = "player 2 wins";
    playerOne.innerHTML = "player 1";
    playerTwo.style.color = "yellow";
    playerOne.style.color = "rgb(250, 250, 219)";
    playerOne.style.transform = "scale(1)";
    playerTwo.style.transform = "scale(1.4)";
  } else if (rannum == 4) {
    curImage.src = four;
    nesImage.src = two;
    playerOne.innerHTML = "player 1 wins";
    playerTwo.innerHTML = "player 2";
    playerOne.style.color = "yellow";
    playerTwo.style.color = "rgb(250, 250, 219)";
    playerOne.style.transform = "scale(1.4)";
    playerTwo.style.transform = "scale(1)";
  } else if (rannum == 5) {
    ccurImage.src = one;
    nesImage.src = three;
    playerOne.innerHTML = "player 1";
    playerTwo.innerHTML = "player 2 wins";
    playerTwo.style.color = "yellow";
    playerOne.style.color = "rgb(250, 250, 219)";
    playerOne.style.transform = "scale(1)";
    playerTwo.style.transform = "scale(1.4)";
  } else if (rannum == 6) {
    curImage.src = six;
    nesImage.src = three;
    playerOne.innerHTML = "player 1 wins";
    playerTwo.innerHTML = "player 2";
    playerOne.style.color = "yellow";
    playerTwo.style.color = "rgb(250, 250, 219)";
    playerOne.style.transform = "scale(1.4)";
    playerTwo.style.transform = "scale(1)";
  } else {
    return "no image";
  }
}

document.querySelector(".press").onclick = function () {
  changePic();
};
