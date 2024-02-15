const text = "ONIEL";
const rainbowText = document.getElementById("rainbowText");

text.split("").forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  rainbowText.appendChild(span);
});
