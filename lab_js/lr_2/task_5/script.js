function formatDate(date) {
    const now = new Date();
    const diff = now - date;
  
    if (diff < 1000) {
      return 'прямо зараз';
    }
  
    const seconds = Math.floor(diff / 1000);
  
    if (seconds < 60) {
      return `${seconds} сек. назад`;
    }
  
    const minutes = Math.floor(diff / (1000 * 60));
  
    if (minutes < 60) {
      return `${minutes} хв. назад`;
    }
  
    const formattedDate = date.toLocaleString('uk-UA',{
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });

    return formattedDate;
  }
  
  const date = new Date(); 
  date.setMinutes(date.getMinutes() - 1);
  const formattedDate = formatDate(date);
  document.write(`<p>Форматована дата: ${formattedDate}</p>`);