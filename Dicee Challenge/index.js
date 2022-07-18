var dice = document.querySelectorAll("img");
var randomnumber1 = 1 + Math.floor(Math.random() * 6);
var image1src = "images/dice" + randomnumber1 + ".png";
dice[0].setAttribute("src", image1src);

var randomnumber2 = 1 + Math.floor(Math.random() * 6);
var image2src = "images/dice" + randomnumber2 + ".png";
dice[1].setAttribute("src", image2src);

var title = document.querySelector("h1");
if (randomnumber1 === randomnumber2) {
  title.innerHTML = "Draw";
} else if (randomnumber1 > randomnumber2) {
  title.innerHTML = "🚩 Player 1 Wins";
} else {
  title.innerHTML = "Player 2 Wins 🚩";
}
