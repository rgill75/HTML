// alert("Game is here!")

// Play a sound if a button is pressed.
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var index = 0;
$(".btn").on("click", function () {
  var currentColor = this.id;
  if (currentColor == gamePattern[index]) {
    playKey(currentColor);
    index++;
    if (index === level) {
      index = 0;
      level++;
      playGame(level);
      animatePress(currentColor);
    }
  } else if (gamePattern.length === 0) {
    playKey(currentColor)
  } else {
    playKey("wrong");
    applyFlash();
    $("h1")[0].innerHTML = "Game Over, Press Any Key to Restart";
    level = 0;
    index = 0;
    gamePattern = [];
  }
});

function startGame() {
  if (level === 0) {
    level = 1;
    playGame(1);
  }
}

function playGame(level) {
  $("#level-title")[0].innerHTML = "Level " + level;
  setTimeout(nextSequence, 1000);
  for (k = 0; k < level - 1; k++) {
    var chosenColor = gamePattern[k];
    playKey(chosenColor);
  }
}

function nextSequence() {
  var num = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[num];
  gamePattern.push(randomChosenColor);
  playKey(randomChosenColor);
  buttonAnimation(randomChosenColor);
}

function playKey(id) {
  var sound = "sounds/" + id + ".mp3";
  var audio = new Audio(sound);
  audio.play();
}

function buttonAnimation(currentKey) {
  $("#" + currentKey).fadeIn(100).fadeOut(200).fadeIn(100);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function applyFlash() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
}
