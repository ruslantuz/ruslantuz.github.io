function displayStudentNames() {
    let namesList = "";
    do{
        let fullName = prompt("Введіть ім'я та прізвище учня " + ":");
        namesList += fullName + "\n";

    } while(confirm("Продовжити ввід?"));
    alert('Ім\'я та прізвище учнів:\n' + namesList);
}

displayStudentNames();