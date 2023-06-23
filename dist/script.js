// dz3-module1
// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
// let range1 = +(prompt ('введите начало диапазона') as string)
// let range2 = +(prompt ('введите конец диапозона') as string)
// let sum = 0;
// while (range1 <= range2) {
// sum+=range1
// range1++
// }
// console.log (sum);
//2 Запросить 2 числа и найти только наибольший общий делитель.
// let a = +(prompt ('введите первое число') as string)
// let b = +(prompt ('введите второе число') as string)
// while (a!=b) {
//  if (a > b) {
//  a = a - b  
//  } 
// else {
// b = b - a  
//  }
// }
// console.log (a)
// 3 Запросить у пользователя число и вывести все делители этого числа.
// let c =+(prompt ('введите число') as string)
// for (let i = 2; i * 2 <= c; i++) {
//  if (c % i == 0) {
//  console.log (`${i}`)  
//  } aA
// }
// 4 Определить количество цифр в введенном числе.
// let userNumber = +(prompt(' Введите число') as string)
//     let count = 0;
//   for (let i = 0; i < +userNumber.length; i++) {
//         count += 1;
//     };
//     console.log(` Число состоит из ${count} цифр`);
// 5 Запросить у пользователя 10 чисел и подсчитать, сколькоон ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести статистику на экран.
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;
// for (let i = 1; i <= 10; i++ ) {
//     const num = +(prompt("Введите число") as string)
//     if (num > 0) {
//     positive++;
//     }
//     if (num < 0) {
//     negative++;
//     }
//     if (num == 0) {
//     zero++;
//     }
//     if (num % 2 == 0) {
//     even++;
//     }
//     if (num % 2 !== 0) {
//     odd++;
//     }
// }
// console.log(` цифры - положительные: ${positive}, отрицательные: ${negative}, нули: ${zero}, четные: ${even}, нечетные: ${odd}.`)
// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.
// do {
//     let firstNumber = +(prompt(' Введите первое число') as string)
//     let secondNumber = +(prompt(' Введите второе число') as string)
//     let operator = prompt(' Введите  оператор', '+, -, *, /')
//     let answer = eval(`${firstNumber} ${operator} ${secondNumber}`)
//     alert(answer);
// } while (confirm(' Решить еще один пример?'));
// 7 Запросить у пользователя число и на сколько цифр егосдвинуть. Сдвинуть цифрычисла и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// let input 
// do {
// input = prompt ('введите число') as string
// }while (input?.length<1)
// const shift = +(prompt ('на сколько разрядов сдвинуть число?')as string)
// let newNumber = ''
// for (let i=shift;i<input.length;i++){
// newNumber += input[i]
// }
// for (let i=shift-1;i>=0;i--) {
// newNumber += input [i]   
// }
// console.log(newNumber)
// 8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. 
// let day = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
// let currentDay = 0
// let nextDay
// do {
//     alert(`День недели - ${day[currentDay]}.`)
//     nextDay = confirm(' Хотите увидеть следующий день?')
//     currentDay++     
//     if (currentDay === day.length) {
//         currentDay = 0;
//     }        
// } while (nextDay)
// 9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// let i
// let j
// for (i=2;i<10;i++) {
// for (j=1;j<11;j++) {
// let table = +(i*j) 
// document.write(' ' +table + ' ')
// }   
// document.write ('<br>')
// }
// 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
//  И так до тех пор, пока пользователь не выберет == N.
// let userConfirmGht
// let userConfirmSht
// let userConfirmEqls
// let N0 = 51
// let N1 = 100
// alert ('загадать число от 0 до 100')
// do {
//   let userConfirmGht = confirm (`Ваше число больше ${N0} и меньше ${N1}?`)
// if (userConfirmGht) {
// N0 = N1/2 
// N1 = N0 + N1/2 
// }
// else {
// N1 = N0 
// N0 /= 2 
// }
// }while(N0!=N1)
// alert ('Ваше число ${N0}')
// praktice
// let i = +(prompt('сколько раз вывести #')as string)
// while ()
// i++
// console.log ('#')
// let num = 1000
// let i = 0
// do { num/=2
// i++
// } while (num > 50)
// console.log ('num=',num, 'i=',i)
// let number = +(prompt('введите число')as string)
// let degree = +(prompt('степень')as string)
// while (degree>0) {
// console.log (number**degree)
// break
// }
// let number1 = +(prompt('введите число')as string)
// let number2 = +(prompt('введите число')as string)
// while ()
// let num = +(prompt('введите число')as string)
// while (num>0) {
// alert (num=(num*(num-1)))    
// break
// } 
// let number = 2
// let number1
// do {
// number1 = +(prompt('решите пример 2+2*2')as string)    
// } while (number1 != +(number+(number*number)))
// let number2 = 1000
// let number3
// do {number3=(number2/2)    
// } while (number3 > 50)
// console.log (number3)
// let i
// let number4 =+(prompt ('введите число')as string)
// for (i = 1; i<100; i++) {
// console.log(i)    
// }
//Функции
//1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
//чем второе; 1 - если первое больше, чем второе; и 0 - если числа равны.
// let a = +(prompt('введите первое число') as string)
// let b = +(prompt('введите второе число') as string)
// function compare(a:number,b:number) {
// if (a < b) 
// return -1;
//  if (a > b) 
// return 1;
// else (a == b) 
// return 0;
// }
// const comp = compare(a,b)
// console.log(comp)
// 2 Написать функцию, которая вычисляет факториал переданного ей числа
// function factorial(a) {
// let fact = 1
// if (a ==0) return fact
// for (let i=1; i<=a; i++) {
// fact = fact * i;   
// }
// return fact;
// }
// console.log( factorial(5));
// 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// let a = +(prompt('введите первое число') as string)
// let b = +(prompt('введите второе число') as string)
// let c = +(prompt('введите третье число') as string)
// function sum(f) {
// f = ((a*100)+(b*10)+c)
// return f;
// }
//  console.log (sum(f))
//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//Если в функцию передали 1 параметр, то она вычисляет площать квадрата.
// function square(a,b) {
// return a * b; {
// if (b == undefined) {
// return a**2;    
// }  
// }    
// }
// let a = +(prompt('введите первое число') as string)
// let b = +(prompt('введите первое число') as string) 
// console.log(square(a,b));
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.
// function perfect(a) {
// var temp = 0
// for (let i = 1; i <= a/2, i++;) {
// if (a % i ===0) {
// temp +=i;    
// }
// }   
// if (temp === a && temp !== 0) {
// document.writeln ('Это совершенное число')    
// } else {
// document.writeln ('Это не совершенное число ')    
// }
// }
// perfect (6);
//Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными. 
// const isPrime = (num) => {
//     let divisor = 2;
//     while (divisor <= Math.sqrt(num)) {
//       if (num % divisor === 0) {
//         return false;
//       }
//       divisor += 1;
//     }
//     return true;
//   }
// function getPerfect(a,b) {
// var temp = 0
// for (let i = a; i <= b; i += 1) {
//     if (isPrime((2 ** i) - 1)) {
//       const num = ((2 ** i) - 1) * 2 ** (i - 1);
//       console.log(num);
//     }
//     continue;
// }
// }
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// let a = +(prompt('введите часы') as string)
// let b = +(prompt('введите минуты') as string)
// let c = +(prompt('введите секунды') as string)
// function time (a,b,c) {
// return `${a}:${b}:${c}`;    
// }
// alert (`${a}:${b}:${c}`)
//Написать функцию, которая принимает часы, минуты и
//секунды и возвращает это время в секундах.
// function time1 (hours,minutes,seconds) {
// let timeToSeconds = hours*3600 + minutes*60 + seconds;
// console.log(timeToSeconds); 
// }
// time1(12,40,10)
//Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»
// function currTimeAndSeconds(hours, minutes, seconds) {
//     var timeInSeconds = hours * 3600 + minutes * 60 + seconds;
//     var aboutSeconds = +(prompt('на сколько увеличить время в секундах') as string)
//     var newTimeInSeconds = timeInSeconds + aboutSeconds;
//     var hours2 = Math.floor(newTimeInSeconds / 3600);
//     var minutes2 = Math.floor((newTimeInSeconds - (hours2 * 3600)) / 60);
//     var seconds2 = Math.floor(newTimeInSeconds % 60);
//     var newCurrentTime = hours2 + ":" + minutes2 + ":" + seconds2;
//    
//     console.log(newCurrentTime);
// }
// currTimeAndSeconds(12, 10, 15);
// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс»
// function timeDifference(a1,b1,c1,a2,b2,c2) {
// let timeToSeconds = a1*3600 + b1*60 +c1
// let timeToSeconds2 = a2*3600 + a2*60 +c2
// let dateDifference = timeToSeconds - timeToSeconds2
// let hours = Math.floor(dateDifference/3600)
// let minutes = Math.floor((dateDifference-(hours*3600))/60)
// let seconds = Math.floor(dateDifference % 60);
// let currentDifference = `${hours}:${minutes}:${seconds}`
// console.log(currentDifference)
// }
// timeDifference(15,10,10,15,0,10)
// Создать объект, описывающий автомобиль и  функции для работы с этим объектом.
// 1 Функция для вывода на экран информации об автомобиле.
// 2 Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час
// const car = {
// carBrand: 'toyota',
// model: 'Camry',
// year: 2022,
// AverageSpeed: 100
// }
// function(carBrand,model,year,AverageSpeed)
// console.log(car)
// function time(AverageSpeed) {
// let distance = +(prompt("Введите растояние") as string)
// let hours = distance/AverageSpeed 
// if (hours % 4 ==0) {
// return hours + Math.floor((hours-1) / 4);    
// }
// return hours + Math.floor(hours / 4);
// }
// console.log (time(10));
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объ-ектом.
// 1 Функция сложения 2-х объектов-дробей.
// 2 Функция вычитания 2-х объектов-дробей.
// 3 Функция умножения 2-х объектов-дробей.
// 4 Функция деления 2-х объектов-дробей.
// 5 Функция сокращения объекта-дроби.
// var fraction1 = {
//     numerator: 1,
//     denominator: 4
// };
// var fraction2 = {
//     numerator: 1,
//     denominator: 6
// };
// console.log(fraction1.numerator + "/" + fraction1.denominator + " and " + fraction2.numerator + "/" + fraction2.denominator);
// function maxDenominator(f) {
//     var min = f.numerator < f.denominator ? f.numerator : f.denominator;
//     for (var i = min; i > 1; i--) {
//         if (f.numerator % i == 0 && f.denominator % i == 0)
//             return i;
//     }
//     return 1;
// }
// function fractionReduction(f) {
//     var denominator = maxDenominator(f);
//     f.numerator /= denominator;
//     f.denominator /= denominator;
//     return f;
// }
// function fractionSubstraction(f1, f2) {
//     var ajusted = fractionAjust(f1, f2);
//     var sub = {
//         numerator: ajusted.f1.numerator - ajusted.f2.numerator,
//         denominator: f1.denominator
//     };
//     return fractionReduction(sub);
// }
// function fractionAjust(f1, f2) {
//     var f1D = f1.denominator;
//     var f2D = f2.denominator;
//     f1.numerator *= f2D;
//     f1.denominator *= f2D;
//     f2.numerator *= f1D;
//     f2.denominator *= f1D;
//     return { f1: f1, f2: f2 };
// }
// function fractionMultiplication(f1, f2) {
//     var mult = {
//         numerator: f1.numerator * f2.numerator,
//         denominator: f1.denominator * f2.denominator
//     };
//     return fractionReduction(mult);
// }
// function fractionDivision(f1, f2) {
//     var div = {
//         numerator: f1.numerator * f2.denominator,
//         donominator: f1.denominator * f2.numerator
//     };
//     return fractionReduction(div);
// }
// function fractionSum(f1, f2) {
//     var ajusted = fractionAjust(f1, f2);
//     var sum = {
//         numerator: ajusted.f1.numerator + ajusted.f2.numerator,
//         denominator: ajusted.f1.denominator
//     };
//     return fractionReduction(sum);
// }
// var sumResult = fractionSum(fraction1, fraction2);
// var subResult = fractionSubstraction(fraction1, fraction2);
// var multResult = fractionMultiplication(fraction1, fraction2);
// var divResult = fractionDivision(fraction1, fraction2);
// console.log("sum = " + sumResult.numerator + "/ " + sumResult.denominator);
// console.log("sub = " + subResult.numerator + "/ " + subResult.denominator);
// console.log("mult = " + multResult.numerator + "/ " + multResult.denominator);
// console.log("div = " + divResult.numerator + "/ " + divResult.denominator);
// Создать объект, описывающий время (часы, минуты, секунды), и функции для работы с этим объектом.
// 1 Функция вывода времени на экран.
// 2 Функция изменения времени на переданное количество
// секунд.
// 3 Функция изменения времени на переданное количество
// минут.
// 4 Функция изменения времени на переданное количество
// часов.
// let currentTime = {
// hours:11,
// minutes:47,
// seconds:50,    
// }
// function currTime(time:any) {
//     return `${time.hours}:${time.minutes}:${time.seconds}`
//   }
//   function addSeconds(time:any, seconds:number) {
//     let hours = time.hours
//     let minutes = time.minutes
//     let newSeconds = time.seconds + seconds
//     if (newSeconds>59) {
//       minutes += Math.floor(newSeconds/60)
//       newSeconds %= 60 
//     }
//     return {
//       hours:hours,
//       minutes:minutes,
//       seconds:newSeconds,    
//     }
//   }
//   console.log(currTime(currentTime))
//   const seconds = +(prompt('на сколько увеличить время в секундах') as string)
//   console.log(currTime(addSeconds(currentTime, seconds)))
// function addMinutes(time:any, minutes:number) {
//   let hours = time.hours 
//   let newMinutes = time.minutes + minutes
//   if (newMinutes>59) {
//     hours += Math.floor(newMinutes/60)
//     newMinutes %= 60 
//   }
//   return {
//     hours:hours,
//     minutes:newMinutes,
//     seconds:seconds,    
//   }
// }
// console.log(currTime(currentTime))
// const minutes = +(prompt('на сколько увеличить время в минутах') as string)
// console.log(currTime(addMinutes(currentTime, minutes)))
//     function addHours(time:any, hours:number) {
//     let newHours = time.hours + hours
//     let minutes = time.minutes
//     let seconds = time.seconds 
//     return {
//       hours:newHours,
//       minutes:minutes,
//       seconds:seconds,    
//     }
// }
//   console.log(currTime(currentTime))
//   const hours = +(prompt('на сколько увеличить время в часах') as string)
//   console.log(currTime(addHours(currentTime, hours)))
// console.log(currTime(currentTime))
// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
// 1. Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).
// 2. Функция принимает объект-прямоугольник и возвращает
// его ширину.
// 3. Функция принимает объект-прямоугольник и возвращает
// его высоту.
// 4. Функция принимает объект-прямоугольник и возвращает
// его площадь.
// 5. Функция принимает объект-прямоугольник и возвращает
// его периметр.
// 6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// ширину.
// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// высоту.
// 8. Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.
// 9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
// 11. Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
// 12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и
// координаты точки.
var rectangle = {
    x1: 5,
    y1: 7,
    x2: 11,
    y2: 1
};
1;
function getRectangle(rectangle) {
    console.log(rectangle.x1, rectangle.y1, rectangle.x2, rectangle.y2);
}
2;
function getRectWidth(rectangle) {
    return rectangle.x2 - rectangle.x1;
}
3;
function getRectHeight(rectangle) {
    return rectangle.y1 - rectangle.y2;
}
4;
function getRectArea(rectangle) {
    return getRectWidth(rectangle) * getRectHeight(rectangle);
}
5;
function getRectPerimeter(rectangle) {
    return getRectWidth(rectangle) * 2 + getRectHeight(rectangle) * 2;
}
6;
function changeWidth(rectangle) {
    return addWidth;
}
var addWidth = +prompt('на сколько увеличить ширину прямоугольника');
7;
function changeHeight(rectangle) {
    return addHeight;
}
var addHeight = +prompt('на сколько увеличить высоту прямоугольника');
8;
function change(rectangle) {
    return addHeight;
    return addWidth;
}
var addHeight1 = +prompt('на сколько увеличить высоту прямоугольника');
var addWidth1 = +prompt('на сколько увеличить ширину прямоугольника');
9;
function changex(rectangle) {
    var x3 = +prompt('на сколько сдвинуть прямоугольник по оси x');
}
10;
function changey(rectangle) {
    var y3 = +prompt('на сколько сдвинуть прямоугольник по оси y');
}
11;
function changexy(rectangle) {
}
var x3 = +prompt('на сколько сдвинуть прямоугольник по оси x');
var y3 = +prompt('на сколько сдвинуть прямоугольник по оси y');
12;
function point(rectangle) {
    var x = +prompt('введите координаты точки по оси x');
    var y = +prompt('введите координаты точки по оси y');
    if ((rectangle.x1 <= x && rectangle.x2 >= x) && (rectangle.y1 >= y && rectangle.y2 <= y)) {
        alert('точка внутри');
    }
    else {
        alert('точка снаружи');
    }
}
getRectangle(rectangle);
console.log('ширина', getRectWidth(rectangle));
var height = getRectHeight(rectangle);
console.log('высота', height);
var area = getRectArea(rectangle);
console.log('площадь', area);
var perimeter = getRectPerimeter(rectangle);
console.log('периметр', perimeter);
var newWidth = +getRectWidth(rectangle) + addWidth;
console.log(newWidth);
var newHeight = +getRectHeight(rectangle) + addHeight;
console.log(newHeight);
var newWidth1 = +getRectWidth(rectangle) + addWidth;
console.log(newWidth1);
var newHeight1 = +getRectHeight(rectangle) + addHeight1;
console.log(newHeight1);
var x4 = rectangle.x2 + x3;
console.log(x4);
var y4 = rectangle.y2 + y3;
console.log(y4);
point(rectangle);
