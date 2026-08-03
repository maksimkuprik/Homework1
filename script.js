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