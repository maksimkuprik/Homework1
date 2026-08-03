{
    const arr =;

    console.log('--- Задание 1 ---');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === 10) {
            break; 
        }
    }
}

{
    const arr =;
    let index = arr.indexOf(4);

    console.log('--- Задание 2 ---');
    console.log(`Индекс числа 4 равен: ${index}`); 
}

{
    const arr =;
    let result = arr.join(' ');

    console.log('--- Задание 3 ---');
    console.log(result); 
}

{
    let matrix = [];

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(1);
        }
        matrix.push(row);
    }

    console.log('--- Задание 4 ---');
    console.log(matrix);
}

{
    const arr =;
    arr.push(2, 2, 2);

    console.log('--- Задание 5 ---');
    console.log(arr); 
}

{
    const arr = [9, 8, 7, 'a', 6, 5];
    arr.sort(); 
    const result = arr.filter(item => item !== 'a');

    console.log('--- Задание 6 ---');
    console.log(result); 
}

{
    const arr =;
    let userInput = prompt('Задание 7: Угадайте число от 1 до 10:');
    let userNumber = Number(userInput);

    if (arr.includes(userNumber)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }
}

{
    const str = 'abcdef';
    const result = str.split('').reverse().join('');

    console.log('--- Задание 8 ---');
    console.log(result); 
}

{
    const arr = [[1, 2, 3], [4, 5, 6]];
    const result = [].concat(...arr);

    console.log('--- Задание 9 ---');
    console.log(result); 
}

{
    const arr =;

    console.log('--- Задание 10 ---');
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        let sum = current + next;
        console.log(`Сумма элементов ${current} + ${next} равна: ${sum}`);
    }
}

{
    function getSquaresArray(arr) {
        return arr.map(num => num ** 2);
    }

    console.log('--- Задание 11 ---');
    const initialArray =;
    console.log('Массив квадратов:', getSquaresArray(initialArray));
}

{
    function getWordLengths(arr) {
        return arr.map(word => word.length);
    }

    console.log('--- Задание 12 ---');
    const wordsArray = ['яблоко', 'банан', 'киви', 'апельсин'];
    console.log('Массив длин слов:', getWordLengths(wordsArray));
}

{
    function getNegativeNumbers(arr) {
        return arr.filter(num => num < 0);
    }

    console.log('--- Задание 13 ---');
    const mixedArray = [4, -3, 0, 8, -12, -1, 5, -9];
    console.log('Только отрицательные числа:', getNegativeNumbers(mixedArray));
}

{
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.round(Math.random() * 10);
        randomArray.push(randomNum);
    }

    const evenArray = randomArray.filter(num => num % 2 === 0);

    console.log('--- Задание 14 ---');
    console.log('Исходный массив:', randomArray);
    console.log('Массив с четными значениями:', evenArray);
}

{
    const randomNumbers = [];
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 10) + 1;
        randomNumbers.push(num);
    }

    const sum = randomNumbers.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / randomNumbers.length;

    console.log('--- Задание 15 ---');
    console.log('Сгенерированный массив:', randomNumbers);
    console.log(`Среднее арифметическое: ${average.toFixed(2)}`);
}