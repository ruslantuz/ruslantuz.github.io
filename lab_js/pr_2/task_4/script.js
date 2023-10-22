function betFunction() {
    const userBet = parseInt(prompt("Введіть суму ставки:"));
    if (!isNaN(userBet) && userBet !== null) {
        const randomNum = Math.floor(Math.random() * 11) - 5;

        setTimeout(function() {
        if (randomNum <= 0) {
            alert(`Результат: ${randomNum}\nВи програли.`);
        } else if (randomNum > 0) {
            const winnings = userBet * randomNum;
            alert(`Результат: ${randomNum}\nВи виграли ${winnings} гривень!`);
        }
        }, 1000);
    } else {
        alert("Будь ласка, введіть коректну суму ставки.");
    }
}
  
document.getElementById("betBtn").addEventListener("click", betFunction);