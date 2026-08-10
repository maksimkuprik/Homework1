function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },

        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuiz = quiz[i];
        
        let message = currentQuiz.question + "\n" + currentQuiz.options.join("\n") + "\n\nВведите номер ответа (1, 2 или 3):";
        
        let userAnswer = prompt(message);

        if (userAnswer === null) {
            alert("Игра прервана.");
            return; 
        }

        if (Number(userAnswer) === currentQuiz.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Викторина окончена!\nВаш результат: ${correctCount} из ${quiz.length} правильных ответов.`);
}

function startRockPaperScissors() {

    let userChoice = prompt('Введите ваш выбор: "камень", "ножницы" или "бумага"');

    if (userChoice === null) {
        alert("Игра прервана.");
        return;
    }

    userChoice = userChoice.trim().toLowerCase();

    if (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага") {
        alert("Вы ввели неправильное значение. Пожалуйста, напишите: камень, ножницы или бумага.");
        return;
    }

    const options = "камень,ножницы,бумага".split(",");

    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[randomIndex];

    let resultMessage = `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n`;

    if (userChoice === computerChoice) {
        resultMessage += "Результат: Ничья! 🤝";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        resultMessage += "Результат: Вы победили! 🎉";
    } else {
        resultMessage += "Результат: Вы проиграли. 🤖";
    }

    alert(resultMessage);
}


function startGuessNumber() {

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess = null;

    while (guess !== secretNumber) {
        let userInput = prompt("Компьютер загадал число от 1 до 100.\nПопробуйте угадать:");

        if (userInput === null) {
            alert("Игра прервана.");
            return;
        }

        guess = Number(userInput);
        attempts++;

        if (isNaN(guess) || userInput.trim() === "") {
            alert("Пожалуйста, введите корректное число.");
            continue;
        }

        if (guess < secretNumber) {
            alert("Загаданное число больше.");
        } else if (guess > secretNumber) {
            alert("Загаданное число меньше.");
        } else {
            alert(`🎉 Поздравляем! Вы угадали число ${secretNumber}!\nКоличество попыток: ${attempts}`);
        }
    }
}


function startArithmetic() {

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    
    const operations = ["+", "-", "*", "/"];
    const randomOp = operations[Math.floor(Math.random() * operations.length)];
    
    let correctAnswer;
    let taskText = `${num1} ${randomOp} ${num2}`;

    switch (randomOp) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "*":
            correctAnswer = num1 * num2;
            break;
        case "/":
        
            correctAnswer = Number((num1 / num2).toFixed(2));
            taskText += " (округлите до 2 знаков после запятой, если получается дробь)";
            break;
    }

    const userInput = prompt(`Решите задачу:\n${taskText}`);

    if (userInput === null) {
        alert("Игра прервана.");
        return;
    }

    if (Number(userInput) === correctAnswer) {
        alert("📊 Верно! Отличная работа!");
    } else {
        alert(`❌ Ошибка. Правильный ответ был: ${correctAnswer}`);
    }
}


function startReverseText() {
    const userInput = prompt("Введите любой текст, который хотите перевернуть:");

    // Проверяем «Отмену» или пустую строку
    if (userInput === null) {
        alert("Игра прервана.");
        return;
    }
    if (userInput.trim() === "") {
        alert("Вы ничего не ввели!");
        return;
    }

    const reversedText = userInput.split("").reverse().join("");

    alert(`Оригинальный текст:\n${userInput}\n\nПеревернутый текст:\n${reversedText}`);
}