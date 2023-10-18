let today = new Date(),
    newYeardate = new Date(today.getFullYear()+1, 0, 1);

document.write('<p> today: ' + today.toLocaleString() + '</p>');
document.write('<p> newYeardate: ' + newYeardate.toLocaleString() + '</p>');
document.write('<p> newYeardate - today: ' + (newYeardate - today) + '</p>');
document.write('<p> newYeardate.getTime() - today.getTime(): ' + (newYeardate.getTime() - today.getTime()) + '</p>');
let msDiff = newYeardate - today,
    days = Math.floor(msDiff/ (24 * 60 * 60 * 1000)),
    hours = Math.floor((msDiff/(1000 * 60 * 60)) % 24),
    mins = Math.floor((msDiff/ 1000 / 60) % 60),
    secs = Math.floor((msDiff/ 1000) % 60);

document.write('<p> До Нового року: ' + days + ' : ' + hours + ' : ' + mins + ' : ' + secs + '</p>');