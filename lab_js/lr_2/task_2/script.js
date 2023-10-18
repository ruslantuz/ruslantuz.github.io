function getWeekDay(date){
    let days = ['НД','ПН','ВТ','СР', 'ЧТ','ПТ','СБ'];
    return days[date.getDay()];
}
let date = new Date(2012,0,3);
document.write(`<p>Дата: ${date.toLocaleString()}</p>`);
document.write(`<p>День тижня: ${getWeekDay(date)}</p>`)