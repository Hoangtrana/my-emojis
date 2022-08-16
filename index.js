// 1. Loop through the myEmojis array and log each of them out to the console

const myEmojis = ["👨‍💻", "⛷", "🍲"];

const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");
//const emoji = document.createElement("span");
//emoji.textContent += myEmojis[i];
//emojisContainer.append(emoji);

// Hook an event listener up with the button, and log out the input field's value when it's clicked
updateArray(myEmojis);

pushBtn.addEventListener("click", function () {
  console.log(emojiInput.value);
  // Push the emoji into the myEmoji's array, and clear the input field
  // However, if the input value is empty, don't do anything
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    clearInput();
    updateArray(myEmojis);
    console.log(myEmojis);
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    clearInput();
    updateArray(myEmojis);
    console.log(myEmojis);
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  updateArray(myEmojis);
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  updateArray(myEmojis);
});
// Render the updated myEmojis array in the mini-browser.
function updateArray(arr) {
  emojiContainer.innerHTML = "";
  let emojiList = "";
  for (let i = 0; i < arr.length; i++) {
    emojiList += `<span> ${arr[i]} </span>`;
  }
  emojiContainer.innerHTML = emojiList;
}

function clearInput() {
  emojiInput.value = "";
}
