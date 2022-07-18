// Play a drum beat if a certain key is triggered.

var buttonList = document.querySelectorAll(".drum");
var len = buttonList.length;
// for (var k = 0; k < len; k++) {
//     buttonList[k].addEventListener("click", handleClick);
// }

// Detect button press.
document.addEventListener("keydown", function(event) {
  musicEvent(event.key);
});

// Anonymous function
//
// Detect keyboard press.
for (var k = 0; k < len; k++) {
  document.querySelectorAll(".drum")[k].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    var audio;
    musicEvent(buttonInnerHTML);
  });
}

// function handleClick() {
//   // alert("I got clicked!")
//   // var entry = document.getElementsByClassName(this.innerHTML);
//   // entry[0].style.color = "white";
//   this.style.color = "white";
// }

function musicEvent(key) {
  if (playSound(key)) {
    buttonAnimation(key);
  }
}

function playSound(key) {
  var sound = "";
  switch (key) {
    case "w":
      sound = "sounds/crash.mp3";
      break;
    case "a":
      sound = "sounds/kick-bass.mp3";
      break;
    case "s":
      sound = "sounds/snare.mp3";
      break;
    case "d":
      sound = "sounds/tom-1.mp3";
      break;
    case "j":
      sound = "sounds/tom-2.mp3";
      break;
    case "k":
      sound = "sounds/tom-3.mp3";
      break;
    case "l":
      sound = "sounds/tom-4.mp3";
      break;
    default:
      // console.log(key + " is not valid.");
      break;
  }

  if (sound) {
    var audio = new Audio(sound);
    audio.play();
  }

  return sound;
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playSequence(str) {
  var N = str.length;
  for (var k = 0; k < N; k++) {
    setTimeout(() => {
        musicEvent(str[k]);
    }, k*1000);
  }
}
