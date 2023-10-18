let today = new Date();
let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    } 
    document.write(`<p>${today.toLocaleString('ar-EG')}</p>`); //арабска мова 
    document.write(`<p>${today.toLocaleString('ar-EG', options)}</p>`); //арабска мова з параметрами 
    document.write(`<p>${today.toLocaleString('en-EN')}</p>`); // дата в англомовних країнах 
    document.write(`<p>${today.toLocaleString('en-GB')}</p>`); // дата в Великобританиї 
    document.write(`<p>${today.toLocaleString('en-GB' ,options)}</p>`); // дата в Великобританиї з параметрами 
    document.write(`<p>${today.toLocaleString('uk-UK', options)}</p>`); // дата в Україні з параметрами

    options = {
        year: '2-digit',
        month: 'short',
        day: '2-digit',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    } 
        document.write(`<p>${today.toLocaleString('ar-EG', options)}</p>`); 
        document.write(`<p>${today.toLocaleString('en-GB' ,options)}</p>`); 
        document.write(`<p>${today.toLocaleString('ru-RU' ,options)}</p>`); 
        document.write(`<p>${today.toLocaleString('uk-UK', options)}</p>`); 