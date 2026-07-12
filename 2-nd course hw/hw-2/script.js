{
    let password = 'пароль';
    let userPassword = prompt('Задание 1: Введите пароль');

    if (userPassword === password) {
        alert('Пароль введен верно');
    } else {
        alert('Пароль введен неправильно');
    }
}

{
    let c1 = 2;
    if (c1 > 0 && c1 < 10) {
        console.log('Задание 2 (для c = 2): Верно');
    } else {
        console.log('Задание 2 (для c = 2): Неверно');
    }

    let c2 = 0;
    if (c2 > 0 && c2 < 10) {
        console.log('Задание 2 (для c = 0): Верно');
    } else {
        console.log('Задание 2 (для c = 0): Неверно');
    }

    let c3 = 10;
    if (c3 > 0 && c3 < 10) {
        console.log('Задание 2 (для c = 10): Верно');
    } else {
        console.log('Задание 2 (для c = 10): Неверно');
    }

    let c4 = -3;
    if (c4 > 0 && c4 < 10) {
        console.log('Задание 2 (для c = -3): Верно');
    } else {
        console.log('Задание 2 (для c = -3): Неверно');
    }
}

{
    let d = 50;
    let e = 120;
    if (d > 100 || e > 100) {
        console.log('Задание 3: Верно');
    } else {
        console.log('Задание 3: Неверно');
    }
}

{
    let a = '2';
    let b = '3';
    alert(+a + +b);
}


{
    let monthNumber = 12;
    if (monthNumber > 13) {
        console.log('Задание 5: Программа не выполняется: номер месяца больше 13');
    } else if (monthNumber < 1 || monthNumber === 13) {
        console.log('Задание 5: Введен некорректный номер месяца');
    } else {
        switch (monthNumber) {
            case 12:
            case 1:
            case 2:
                console.log('Задание 5: Зима');
                break;
            case 3:
            case 4:
            case 5:
                console.log('Задание 5: Весна');
                break;
            case 6:
            case 7:
            case 8:
                console.log('Задание 5: Лето');
                break;
            case 9:
            case 10:
            case 11:
                console.log('Задание 5: Осень');
                break;
        }
    }
}
