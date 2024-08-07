let inputField = document.querySelector("#input");
let keysEl = document.querySelectorAll(".letter");

inputField.addEventListener("keydown", onKeyPress);
inputField.addEventListener("keyup", onKeyUp);

function onKeyPress(e) {
  console.log(`Clicked key: ${e.key}`);
  keysEl.forEach((letter) => {
    if (letter.dataset.letter === e.key) {
      letter.classList.add("active");
      speakKey(e.key); // super bonus
    }
  });
}

function onKeyUp(e) {
  keysEl.forEach((letter) => {
    if (letter.dataset.letter === e.key) {
      letter.classList.remove("active");
    }
  });
  inputField.value = "";
}

// Double bonus (using for loop just to show variety, but ForEach is also gerat to use)

for (i = 0; i < keysEl.length; i++) {
  keysEl[i].addEventListener("mouseover", function (event) {
    event.target.classList.add("active");
  });
  keysEl[i].addEventListener("mouseleave", function (event) {
    event.target.classList.remove("active");
  });
}

//super bonus function for Speak Key
function speakKey(key) {
  const utterance = new SpeechSynthesisUtterance(key);
  speechSynthesis.speak(utterance);
}

// extra practice adding a click event so the user can use the mouse to ckick instead of keyboard
keysEl.forEach((letter) => {
  letter.addEventListener("click", () => {
    const clickedKey = letter.dataset.letter;
    console.log(`Clicked key: ${clickedKey}`);
    inputField.value += clickedKey; // Append clicked key to the input field
    speakKey(clickedKey); // Speak the clicked key
  });
});
