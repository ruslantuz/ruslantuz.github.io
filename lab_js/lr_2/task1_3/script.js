year.addEventListener('change', friday13);
function friday13(year) {
    year = this.value || year;
    let str = '';
    for(let i=0; i<12; i++) {
        let d = new Date(year, i, 13);
        if(d.getDay() == 5)
            str += `<p>П'ятниця, ${d.toLocaleDateString()}</p>`;
    }
    output13.innerHTML = str;
}