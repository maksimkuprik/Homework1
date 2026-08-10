let numA = 10;
alert("1. Сначала значение: " + numA); 
numA = 20;
alert("1. Затем значение изменилось на: " + numA);  


const iphoneReleaseYear = 2007;
alert("2. Год выпуска первого iPhone: " + iphoneReleaseYear); 


const jsCreator = "Брендан Эйк";
alert("3. Создатель JavaScript: " + jsCreator); 


let mathNum1 = 10;
let mathNum2 = 2;
alert("4. Сумма: " + (mathNum1 + mathNum2));       
alert("4. Разность: " + (mathNum1 - mathNum2));    
alert("4. Произведение: " + (mathNum1 * mathNum2)); 
alert("4. Частное: " + (mathNum1 / mathNum2));     


let resultPower = 2 ** 5;
alert("5. 2 в 5-й степени равно: " + resultPower); 


let remainderA = 9;
let remainderB = 2;
let resultRemainder = remainderA % remainderB;
alert("6. Остаток от деления 9 на 2: " + resultRemainder); 


let numShort = 1;
numShort += 5; 
numShort -= 3; 
numShort *= 7; 
numShort /= 3; 
numShort++;    
numShort--;    
alert("7. Итоговый результат вычислений: " + numShort); 


let userAge = prompt("8. Сколько вам лет?");
alert("8. Ваш введенный возраст: " + userAge);


const userObj = {
    name: "Алексей",  
    age: 25,          
    isAdmin: true     
};
console.log("9. Весь созданный объект сохранен в консоли:", userObj);
alert(`9. Объект создан! Имя в объекте: ${userObj.name}, Статус админа: ${userObj.isAdmin}`);


let inputName = prompt("10. Как вас зовут?");
alert(`Привет, ${inputName}!`); 