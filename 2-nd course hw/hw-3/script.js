{
    console.log('--- Задание 1 ---');
    console.log('Привет');
    console.log('Привет');
}

{
    console.log('--- Задание 2 ---');
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

{
    console.log('--- Задание 3 ---');
    for (let i = 7; i <= 22; i++) {
        console.log(i);
    }
}

{
    console.log('--- Задание 4 ---');
    let obj = {
        "Коля": '200',
        "Вася": '300',
        "Петя": '400'
    };

    for (let key in obj) {
        console.log(`${key} — зарплата ${obj[key]} долларов.`);
    }
}

{
    console.log('--- Задание 5 ---');
    let n = 1000;
    let num = 0;

    while (n >= 50) {
        n = n / 2;
        num++;
    }

    console.log(`Полученное число: ${n}`);
    console.log(`Количество итераций (num): ${num}`);
}

{
    console.log('--- Задание 6 ---');

    let firstFriday = 3; 

    for (let currentDay = firstFriday; currentDay <= 31; currentDay += 7) {
        console.log(`Сегодня пятница, ${currentDay}-е число. Необходимо подготовить отчет.`);
    }
}