{
    const people = [
       { name: 'Глеб', age: 29 },
       { name: 'Анна', age: 17 },
       { name: 'Олег', age: 7 },
       { name: 'Оксана', age: 47 }
    ];

    people.sort((a, b) => a.age - b.age);

    console.log('--- Задание 1 ---');
    console.log(people);
}

{

    function isPositive(num) {
        return num > 0;
    }

    function isMale(person) {
        return person.gender === 'male';
    }

    function filter(array, ruleFunction) {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            if (ruleFunction(array[i])) {
                result.push(array[i]);
            }
        }

        return result;
    }

    console.log('--- Задание 2 ---');

    console.log(filter([3, -4, 1, 9], isPositive)); 

    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter(people, isMale));
}

{
    console.log('--- Задание 3: Запуск таймера ---');

    const intervalId = setInterval(() => {
        const currentDate = new Date();
        console.log(currentDate.toLocaleString()); 
    }, 3000);

    setTimeout(() => {
        clearInterval(intervalId); 
        console.log('30 секунд прошло');
    }, 30000);
}

{
    function delayForSecond(callback) {

        setTimeout(callback, 1000);
    }

    console.log('--- Задание 4: Скрипт запущен, ждем 1 секунду ---');

    delayForSecond(function () {
       console.log('Привет, Глеб!');
    });
}

{
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда (Задание 5)');
            if(cb) {  cb(); }
        }, 1000)
    }

    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }

    delayForSecond(() => sayHi('Глеб'));
}