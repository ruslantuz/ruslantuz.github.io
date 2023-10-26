
const digitPixels = [
    [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]], // 0
    [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]], // 1
    [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]], // 2
    [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]], // 3
    [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]], // 4
    [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]], // 5
    [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]], // 6
    [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]], // 7
    [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]], // 8
    [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]]  // 9
  ];
      
function generateCaptcha(digits) {
  const captchaContainer = document.getElementById("captcha");
  captchaContainer.innerHTML = '';

  for (let digit of digits) {
    const pixelWrap = document.createElement("div");
    captchaContainer.append(pixelWrap);
    pixelWrap.className = "pixel-wrap";
    for (let row of digitPixels[digit]) {

      const pixelRow = document.createElement("div");
      pixelRow.className = "pixel-row";
      pixelWrap.appendChild(pixelRow);

      for (let pixel of row) {
        const pixelSpan = document.createElement("span");
        pixelSpan.className = "pixel";
        pixelSpan.style.backgroundColor = pixel ? "red" : "white";
        pixelRow.appendChild(pixelSpan);
      }

    }

  }
}

const randomDigits = Array.from({ length: Math.floor(Math.random() * 4 + 2) }, () => Math.floor(Math.random() * 10));
generateCaptcha(randomDigits);

document.getElementById("checkButton").addEventListener("click", function () {
  const enteredValue = document.getElementById("captchaInput").value;
  const enteredDigits = enteredValue.split('').map(Number);
  if (JSON.stringify(enteredDigits) === JSON.stringify(randomDigits)) {
    document.getElementById("message").textContent = "Капча введена правильно!";
  } else {
    document.getElementById("message").textContent = "Помилка.";
    generateCaptcha(randomDigits);
  }
});