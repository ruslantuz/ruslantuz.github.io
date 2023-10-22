function getSecondsToTomorrow() {
    const now = new Date(),
        tomorrow = new Date(); 

    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
  
    return  (tomorrow - now) / 1000;
  }

  document.write(`<p>Кількість секунд до завтра: ${getSecondsToTomorrow()}</p>`);