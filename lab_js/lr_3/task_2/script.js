let score = 0;
let taskCount = 0;
let correctAnswer = 0;
let hasAnswered = false;

function createTask() {
    taskCount++;
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    document.getElementById("task").textContent = `${num1} x ${num2} = `;
    hasAnswered = false; 
    document.getElementById("answer").value = ""; 
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    if (!hasAnswered) {
        const userAnswer = parseInt(document.getElementById("answer").value);
        if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
            score++;
            document.getElementById("result").textContent = "Вірно.";
        } else {
            document.getElementById("result").textContent = `Помилка, правильна відповідь "${correctAnswer}".`;
        }
        document.getElementById("score").textContent = 
          `Загальний рахунок: ${(score/taskCount*100).toFixed(2)}% (${score} правильних відповідей з ${taskCount})`;
        hasAnswered = true; 
    }
    else{
      document.getElementById("result").textContent = "Ви вже відповіли."
    }
}

document.getElementById("checkButton").addEventListener("click", checkAnswer);

document.getElementById("nextTaskButton").addEventListener("click", createTask);

createTask();