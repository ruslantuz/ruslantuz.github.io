let today = new Date(),
    newYeardate = new Date(today.getFullYear()+1, 0, 1);

document.write('<p> today: ' + today.toLocaleString() + '</p>');
document.write('<p> newYeardate: ' + newYeardate.toLocaleString() + '</p>');
document.write('<p> newYeardate - today: ' + newYeardate - today + '</p>');
document.write('<p> newYeardate.getTime() - today.getTime(): ' + newYeardate.getTime() - today.getTime() + '</p>');