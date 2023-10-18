function getWeekDay(date){
    let days = ['ПН','ВТ','СР', 'ЧТ','ПТ','СБ','НД'];
    return days[date.getDay()-1];
}
let date = new Date(2012,0,3);
document.write(`<p>Дата: ${date.toLocaleString()}</p>`);
document.write(`<p>День тижня: ${getWeekDay(date)}</p>`)