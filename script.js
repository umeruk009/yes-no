let messageIndex = 0;
const messages = [
  "No?",
  "Are you sure?",
  "Really?",
  "Please 😢",
  "Think again!",
  "Last chance!"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Change NO text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // YES gets bigger
  const yesSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${yesSize * 1.3}px`;

  // NO gets smaller (with minimum size)
  const noSize = parseFloat(
    window.getComputedStyle(noButton).fontSize
  );

  const minSize = 10;

  if (noSize > minSize) {
    noButton.style.fontSize = `${noSize * 0.8}px`;
  }
}



function handleYesClick() {
  window.location.href = "yes_page.html";
}
