function formatTimeValue(value) {
    return value < 10 ? `0${value}` : value;
}
  
function updateClock() {
    const now = new Date();
    const hours = formatTimeValue(now.getHours());
    const minutes = formatTimeValue(now.getMinutes());
    const seconds = formatTimeValue(now.getSeconds());
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();