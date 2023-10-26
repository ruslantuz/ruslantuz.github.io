let score = 0;
let taskCount = 0;
let correctAnswer = 0;
let hasAnswered = false;

// Функція для генерування нового завдання та варіантів відповіді
function generateTask() {
    taskCount++;
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    document.getElementById("task").textContent = `Завдання: ${num1} x ${num2}`;

    const answerOptions = [];
    answerOptions.push(correctAnswer);
    while (answerOptions.length < 4) {
        const option = Math.floor(Math.random() * 100);
        if (!answerOptions.includes(option)) {
            answerOptions.push(option);
        }
    }
    answerOptions.sort(() => Math.random() - 0.5);

    for (let i = 1; i <= 4; i++) {
        document.getElementById(`label${i}`).textContent = answerOptions[i - 1];
        document.getElementById(`option${i}`).value = answerOptions[i - 1];
    }

    hasAnswered = false;
    document.getElementById("answerForm").reset(); 
    document.getElementById("result").textContent = "";
}

// Функція для перевірки відповіді
function checkAnswer() {
    if (!hasAnswered) {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            if (userAnswer === correctAnswer) {
                score++;
                document.getElementById("result").textContent = "Вірно.";
            } else {
              document.getElementById("result").textContent = `Помилка, правильна відповідь "${correctAnswer}".`;
            }
            document.getElementById("score").textContent = 
              `Загальний рахунок: ${(score/taskCount*100).toFixed(2)}% (${score} правильних відповідей з ${taskCount})`;
            hasAnswered = true; 
        }
    }
    else{
      document.getElementById("result").textContent = "Ви вже відповіли.";
    }
}

document.getElementById("checkButton").addEventListener("click", checkAnswer);

document.getElementById("nextTaskButton").addEventListener("click", generateTask);

generateTask();