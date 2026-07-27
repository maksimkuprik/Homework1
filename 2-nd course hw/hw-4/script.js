{
    function getMinValue(a, b) {
        return Math.min(a, b);
    }

    console.log('--- Задание 1 ---');
    console.log(`Меньшее из 8 и 4: ${getMinValue(8, 4)}`); 
    console.log(`Меньшее из 6 и 6: ${getMinValue(6, 6)}`);
}

{
    function checkEvenOrOdd(n) {
        if (n % 2 === 0) {
            return 'Число четное';
        } else {
            return 'Число нечетное';
        }
    }

    console.log('--- Задание 2 ---');
    console.log(`Число 4: ${checkEvenOrOdd(4)}`); 
    console.log(`Число 7: ${checkEvenOrOdd(7)}`);  
}

{

    function logSquare(num) {
        let result = num * num;
        console.log(`Квадрат числа ${num} равен: ${result}`);
    }

    function getSquare(num) {
        return num * num;
    }

    console.log('--- Задание 3 ---');
    logSquare(5); 

    let savedSquare = getSquare(6); 
    console.log(`Возвращенное значение квадрата 6: ${savedSquare}`); 
}

{
    function correctAge(age) {
        let numericAge = Number(age);

        if (numericAge < 0) {
            return 'Вы ввели неправильное значение';
        } else if (numericAge >= 0 && numericAge <= 12) {
            return 'Привет, друг!';
        } else if (numericAge >= 13) {
            return 'Добро пожаловать!';
        }
    }

    let userResponse = prompt("Задание 4: Сколько вам лет?");
    alert(correctAge(userResponse));
}

{
    function multiplyNumbers(a, b) {
        let numA = Number(a);
        let numB = Number(b);

        if (isNaN(numA) || isNaN(numB)) {
            return 'Одно или оба значения не являются числом';
        } else {
            return numA * numB;
        }
    }

    console.log('--- Задание 5 ---');
    console.log(`Умножение 5 на 6: ${multiplyNumbers(5, 6)}`);    
    console.log(`Умножение 'привет' на 4: ${multiplyNumbers('привет', 4)}`); 
}

{
    function cubeNumber(value) {
        let n = Number(value);

        if (isNaN(n) || value === null || value === '') {
            return 'Переданный parameter не является числом';
        } else {
            let result = n ** 3;
            return `n в кубе равняется ${result}`;
        }
    }

    console.log('--- Задание 6 (Проверка от 0 до 10) ---');
    for (let i = 0; i <= 10; i++) {
        console.log(`Для числа ${i}: ${cubeNumber(i)}`);
    }
}

{
    let circle1 = {
        radius: 5,
        getArea: function() { return Math.PI * this.radius ** 2; },
        getPerimeter: function() { return 2 * Math.PI * this.radius; }
    };

    let circle2 = {
        radius: 10,
        getArea: function() { return Math.PI * this.radius ** 2; },
        getPerimeter: function() { return 2 * Math.PI * this.radius; }
    };

    console.log('--- Задание 7 ---');
    console.log(`Круг 1 (Площадь): ${circle1.getArea().toFixed(2)}`);      
    console.log(`Круг 1 (Периметр): ${circle1.getPerimeter().toFixed(2)}`); 
    console.log(`Круг 2 (Площадь): ${circle2.getArea().toFixed(2)}`);      
    console.log(`Круг 2 (Периметр): ${circle2.getPerimeter().toFixed(2)}`); 
}