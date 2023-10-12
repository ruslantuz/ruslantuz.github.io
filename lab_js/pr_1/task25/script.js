function sumSalaries(salaries) {
  let sum = 0;

  const salaryValues = Object.values(salaries);

  for (const salary of salaryValues) {
    sum += salary;
  }

  return sum;
}

const salaries = {
  "Петро": 100,
  "Іван": 300,
  "Марія": 250
};

const totalSalaries = sumSalaries(salaries);
console.log('Загальна сума зарплат:', totalSalaries);