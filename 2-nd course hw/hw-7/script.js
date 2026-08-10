{
    const str = 'js';
    const result = str.toUpperCase();

    console.log('--- Задание 1 ---');
    console.log(result); 
}


{
    function filterBySearch(array, searchStr) {
        const search = searchStr.toLowerCase();
   
        return array.filter(item => item.toLowerCase().startsWith(search));
    }

    console.log('--- Задание 2 ---');
    const fruits = ['Яблоко', 'банан', 'Апельсин', 'Абрикос', 'киви'];
    console.log(filterBySearch(fruits, 'а')); 
}


{
    const num = 32.58884;

    console.log('--- Задание 3 ---');
    console.log('До меньшего целого:', Math.floor(num)); 
    console.log('До большего целого:', Math.ceil(num));  
    console.log('До ближайшего целого:', Math.round(num)); 
}


{
    console.log('--- Задание 4 ---');

    const min = Math.min(52, 53, 49, 77, 21, 32);
    const max = Math.max(52, 53, 49, 77, 21, 32);

    console.log('Минимальное значение:', min); // 21
    console.log('Максимальное значение:', max); // 77
}


{
    function logRandomOneToTen() {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        console.log(randomNum);
    }

    console.log('--- Задание 5 ---');
    logRandomOneToTen(); 
}


{
    function getRandomNumbersArray(n) {
        const resultLength = Math.floor(n / 2); 
        const randomArray = [];

        for (let i = 0; i < resultLength; i++) {
        
            let randomValue = Math.floor(Math.random() * (n + 1));
            randomArray.push(randomValue);
        }
        return randomArray;
    }

    console.log('--- Задание 6 ---');
    console.log(getRandomNumbersArray(10)); 
}


{
    function getRandomInRange(min, max) {
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log('--- Задание 7 ---');
    console.log(getRandomInRange(5, 15)); 
}


{
    console.log('--- Задание 8 ---');
    console.log(new Date()); 
}


{
    const currentDate = new Date();
    
    currentDate.setDate(currentDate.getDate() + 73);

    console.log('--- Задание 9 ---');
    console.log('Дата через 73 дня:', currentDate.toLocaleString());
}


{
    function formatRussianDate(dateObj) {
    
        const months = "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(",");
        const days = "воскресенье,понедельник,вторник,среда,четверг,пятница,суббота".split(",");

        const dayOfMonth = dateObj.getDate();
        const monthText = months[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const dayOfWeekText = days[dateObj.getDay()];

        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const seconds = String(dateObj.getSeconds()).padStart(2, '0');

        const dateResult = `Дата: ${dayOfMonth} ${monthText} ${year} — это ${dayOfWeekText}.`;
        const timeResult = `Время: ${hours}:${minutes}:${seconds}`;

        return `${dateResult}\n${timeResult}`;
    }

    console.log('--- Задание 10 ---');
    console.log(formatRussianDate(new Date()));
}