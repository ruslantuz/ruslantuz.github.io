const options = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

function displayCurrentTime() {
    const currentTime = new Date();
    document.getElementById("clock").textContent = currentTime.toLocaleTimeString('uk-UA', options);
}

displayCurrentTime();

document.getElementById("updateButton").addEventListener("click", displayCurrentTime);
