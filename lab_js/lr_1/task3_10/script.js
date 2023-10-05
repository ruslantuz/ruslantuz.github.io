function displayStudentNames() {
    let studentCount = parseFloat(prompt("Введіть кількість учнів у групі:").replace(/[^\d]/g, '.'));

    if (!isNaN(studentCount) && studentCount > 0 && Number.isInteger(studentCount)) {
        let namesList = "";

        for (let i = 1; i <= studentCount; i++) {
            let fullName = prompt("Введіть ім'я та прізвище учня " + i + ":");
            namesList += fullName + "\n";
        }

        alert('Ім\'я та прізвище учнів:\n' + namesList);
    } else {
        alert('Будь ласка, введіть дійсну кількість учнів (ціле число більше 0).');
    }
    }

    displayStudentNames();