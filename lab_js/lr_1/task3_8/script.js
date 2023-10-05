function calcMonth(){
    let month = parseFloat(prompt("Введіть номер місяця:").replace(/[^\d]/g, '.'));
    let season;
    if (month >= 1 && month <= 12 && Number.isInteger(month)){
        switch (Math.ceil((month+1)  / 3)){
            case 2:
                season = "Spring";
                break;
            case 3:
                season = "Summer";
                break;
            case 4:
                season = "Autumn";
                break;
            default:
                season = "Winter";
                break;
        }
        alert(season);
    }
    else {
        alert("Недійсний номер місяця")
    }
}

window.addEventListener('load', calcMonth());