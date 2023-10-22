function typeWriter(text, index) {
    if (index < text.length) {
        document.getElementById("output").textContent += text.charAt(index);
        index++;
        setTimeout(function() {
        typeWriter(text, index);
        }, 100); 
    }
}
  
function startTyping() {
  const inputText = prompt("Введіть фразу для виводу:");
  if (inputText) {
    typeWriter(inputText, 0);
  }
}
  
document.getElementById("startButton").addEventListener("click", startTyping);