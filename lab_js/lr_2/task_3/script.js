function getLastDayOfMonth(year, month) {
    const nextMonth = new Date(year, month + 1, 1);
    nextMonth.setDate(nextMonth.getDate() - 1);
  
    return nextMonth.getDate();
}
  
const lastDay = getLastDayOfMonth(2020, 1);
document.write(`<p>Останній день місяця: ${lastDay}</p>`);