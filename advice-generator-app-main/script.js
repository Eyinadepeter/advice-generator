const adviceNumber = document.querySelector("#advice-number");
const adviceText = document.querySelector("#advice-text");
const button = document.querySelector("#generate-btn");

async function getAdvice() {
  try {
    const response = await fetch(
      "https://api.adviceslip.com/advice?t=" + Date.now()
    );

    const data = await response.json();

    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent =
      "Unable to load advice. Please try again.";
  }
}

button.addEventListener("click", getAdvice);

getAdvice();