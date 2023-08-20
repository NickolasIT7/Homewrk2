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
// 7 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифрычисла и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
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
// var rectangle = {
//     x1: 5,
//     y1: 7,
//     x2: 11,
//     y2: 1
// }
// 1
// function getRectangle(rectangle) {
//     console.log(rectangle.x1, rectangle.y1, rectangle.x2, rectangle.y2)
// }
// 2
// function getRectWidth(rectangle) {
//     return rectangle.x2 - rectangle.x1
// }
// 3
// function getRectHeight(rectangle) {
//     return rectangle.y1 - rectangle.y2
// }
// 4
// function getRectArea(rectangle) {
//     return getRectWidth(rectangle) * getRectHeight(rectangle)
// }
// 5
// function getRectPerimeter(rectangle) {
//     return getRectWidth(rectangle) * 2 + getRectHeight(rectangle) * 2
// }
// 6
// function changeWidth(rectangle) {
//     return addWidth
// }
// const addWidth = +(prompt('на сколько увеличить ширину прямоугольника') as string)
// 7
// function changeHeight(rectangle) {
//     return addHeight
// }
// const addHeight = +(prompt('на сколько увеличить высоту прямоугольника') as string)
// 8
// function change(rectangle) {
//     return addHeight
//     return addWidth
// }
// const addHeight1 = +(prompt('на сколько увеличить высоту прямоугольника') as string)
// const addWidth1 = +(prompt('на сколько увеличить ширину прямоугольника') as string)
// 9
// function changex(rectangle) {
//     const x3 = +(prompt('на сколько сдвинуть прямоугольник по оси x') as string)
// }
// 10
// function changey(rectangle) {
//     const y3 = +(prompt('на сколько сдвинуть прямоугольник по оси y') as string)
// }
// }
// const x3 = +(prompt('на сколько сдвинуть прямоугольник по оси x') as string)
// const y3 = +(prompt('на сколько сдвинуть прямоугольник по оси y') as string)
// 12
// function point(rectangle) {
//     const x = +(prompt('введите координаты точки по оси x') as string)
//     const y = +(prompt('введите координаты точки по оси y') as string)
//     if ((rectangle.x1 <= x && rectangle.x2 >= x) && (rectangle.y1 >= y && rectangle.y2 <= y)) {
//         alert('точка внутри')
//     } else {
//         alert('точка снаружи')
//     }
// }
// console.log(rectangle.x1, rectangle.y1, rectangle.x2, rectangle.y2)
// let width = getRectangle(rectangle)
// console.log('ширина', getRectWidth(rectangle))
// let height = getRectHeight(rectangle)
// console.log('высота', height)
// let area = getRectArea(rectangle)
// console.log('площадь', area)
// let perimeter = getRectPerimeter(rectangle)
// console.log('периметр', perimeter)
// let newWidth = +getRectWidth(rectangle) + addWidth
// console.log(newWidth)
// let newHeight = +getRectHeight(rectangle) + addHeight
// console.log(newHeight)
// let newWidth1 = +getRectWidth(rectangle) + addWidth
// console.log(newWidth1)
// let newHeight1 = +getRectHeight(rectangle) + addHeight1
// console.log(newHeight1)
// let x = rectangle.x2 + x3
// console.log(x)
// console.log(x)
// let y = rectangle.y2 + y3
// console.log(y)
// point(rectangle)
// pz3-2 
// 1 Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
// одинаковой длины
// 1.1
// let firstString = prompt('введите 1 строку')
// let secondString = prompt('введите 2 строку')
// function degree(firstString, secondString) {
//     if (firstString.length > secondString.length)
//         return 1
//     if (firstString.length < secondString.length)
//         return -1
//     if (firstString.length == secondString.length)
//         return 0
// }
// console.log(degree(firstString, secondString))
// 1.2
// let firstString = '34'
// let secondString = '41341'
// let degree = (firstString, secondString) => {
//     if (firstString.length > secondString.length)
//         return 1
//     if (firstString.length < secondString.length)
//         return -1
//     if (firstString.length == secondString.length)
//         return 0
// }
// console.log(degree(firstString, secondString))
//2 Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
// let string1 = 'хетафе'
// let UpperString = (string1: any) => {
//     let newString = string1[0].toUpperCase() + string1.slice(1)
//     return newString
// }
// console.log(UpperString(string1))
// 3 Написать функцию, которая считает количество гласных букв в переданной строке.
// let string2 = 'Getafe'
//  function vowels(string2) {
//     let vowels = ["a", "e", "i", "o", "u"];
//    let vowelCount = 0
//     for(let j = 0; j < string2.length; j++) 
//  for(let i=0; i < vowels.length; i++)
// {
//         if(vowels[j] === string2){
//  		vowelCount+=1
//      }
//      }
//      return vowelCount
//  }
//  console.log(vowels(string2));
//4 Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. 
// Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.
// function checkSpam(string1: any) {
//     let lowString = string1.toLowerCase(string1)
//     if (lowString.includes('100% бесплатно') || lowString.includes('100% бесплатно') || lowString.includes('увеличение продаж') || lowString.includes('только сегодня') ||
//         lowString.includes('не удаляйте') || lowString.includes('ххх')) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkSpam('100 % бесплатно и только сегодня предложение'));
//5 Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие. Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”
// let str = 'i know what you did this summer'
// function reduction(str) {
//     let maxlength = 5
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength + 2)
//     }
// }
// console.log(reduction(str))
//6 Написать функцию, которая проверяет, является ли переданная строка палиндромом.
// function isStrPalindrome(str) {
//     let n = str.length;
//     for(let i = 0; i < n/2; i++)
//     {  
//        if (str.charAt(i) !== str.charAt(n-1-i))
//          return false;
//     }
//     return true;
// }
// console.log(isStrPalindrome('AnnA'))
//7 Написать функцию, которая считает количество слов в предложении
// 7.1 
// let offer = prompt('введите предложение')
// function countWords(str) {
//     return str.split(' ').length
// }
// console.log(countWords(offer))
//7.2
// function countWords(str) {
//     return str.split(' ').length
// }
// console.log(countWords('как у вас дела'))
//8 Написать функцию, которая возвращает самое длинное слово из предложения.
// let offer = prompt('введите предложение')
// function longestWord(offer) {
//     const stringSplit = offer.split(' ')
//     let longestWord = ""
//     for (const word of stringSplit) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }    
// console.log (longestWord(offer))
//9 Написать функцию, которая считает среднюю длину слова в предложении.
// let offer = prompt('введите предложение')
// function countAverageWord(offer) {
// offer = offer.split(' ')
// let averageWord = 0
// let sumOffer = 0 
// for (let i=0; i <offer.length;i++) {
// const el = offer[i]
// sumOffer =sumOffer+el.length
// }
// averageWord=sumOffer/offer.length     
// return averageWord
// }   
// console.log(countAverageWord(offer))
// 10 Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот символ в строке.
// function findSymbol(str,symb) {
// let result = 0
// let char = str.split(' ')
// for (let i=0; i <char.length; i++) {
// let count = result[char[i]]?result[char[i]] : 0
// result[char[i]] = count +1
// }
// return result
// }
// console.log (findSymbol('как у вас дела','к'));
// 1 Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
// Написать несколько функций для работы с таким массивом.
// 1 Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2 Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3 Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
// const purchase = [
//     {
//       name: 'a',
//       count: 10,
//       purchased: true,
//     },
//     {
//       name: 'b',
//       count: 5,
//       purchased: false,
//     },
//     {
//       name: 'c',
//       count: 3,
//       purchased: true,
//     },
//     {
//       name: 'd',
//       count: 1,
//       purchased: true,
//     },
//   ]
//   const purchasedol = document.querySelector('.purchase')
//   const showPurchaseButton = document.querySelector('.showPurchase')
//   const addPurchaseButton = document.querySelector('.addPurchase')
//   const setPurchasedButton = document.querySelector('.setPurchased')
//   function showPurchase() {
//     if (purchasedol) {
//       purchasedol.innerHTML = ``
//     }
//     for (let el of purchase) {
//       if (!el.purchased) {
//         if (purchasedol) {
//           purchasedol.innerHTML += `<li>${el.name} необходимо купить ${el.count} штук </li>`
//         }
//       }
//     }
//     for (let el of purchase) {
//       if (el.purchased) {
//         if (purchasedol) {
//           purchasedol.innerHTML += `<li>${el.name} куплено ${el.count} штук </li>`
//         }
//       }
//     }
//   }
//   function addPurchase() {
//     const name = prompt('Введите название покупки') as string
//     const count = +(prompt('Введите количество') as string)
//     let find = false
//     for (let el of purchase) {
//       if (el.name == name) {
//         find = true
//         el.count += count
//       }
//     }
//     if (!find) {
//       purchase.push({
//         name,
//         count,
//         purchased: false
//       })
//     }
//     showPurchase()
//   }
//   function setPurchased() {
//     const name = prompt('Введите название покупки')
//     for (let el of purchase) {
//       if (el.name == name) {
//         el.purchased = true;
//       }
//       showPurchase()
//     }
//   }
//   showPurchaseButton?.addEventListener('click', showPurchase)
//   addPurchaseButton?.addEventListener('click', addPurchase)
//   setPurchasedButton?.addEventListener('click', setPurchased)
//Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке. 
// const check = [
//     {
//       product: 'bread',
//       count: '1',
//       price: '50',
//     },
//     {
//       product: 'chop',
//       count: '2',
//       price: '160',
//     },
//     {
//       product: 'cheese',
//       count: '2',
//       price: '80',
//     },
//   ]
//   function showCheck(arr: any[]) {
//     console.log(arr)
//   }
//   showCheck(check)
//   function getSum(arr: any[]) {
//     let sum = 0
//     for (let el of arr) {
//       sum += el.count * parseFloat(el.price)
//     }
//     return sum
//   }
//   console.log(getSum(check))
//   function maxPurchase(arr: any[]) {
//     let res = [...arr];
//     let maxCost = 0;
//     for (const product of res) {
//       let cost = product.price * product.count
//       if (cost > maxCost) {
//         maxCost = cost;
//       }
//     }
//     return maxCost;
//   }
//   console.log(maxPurchase(check))
//   function averagePurchase(arr: any[]) {
//     let res = [...arr];
//     let averagePurch = 0
//     let sum = 0
//     for (const product of res) {
//       sum += product.price * product.count;
//     }
//     return (sum / res.length).toFixed(2);
//   }
//   console.log(averagePurchase(check));
// 3 Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
// const styleRed = [
//     {
//       name: 'color',
//       value: 'red',
//     },
//     {
//       name: 'text-decoration',
//       value: 'underline'
//     },
//   ]
//   const styleGreen = [
//     {
//       name: 'color',
//       value: 'green',
//     },
//     {
//       name: 'font-size',
//       value: '20px'
//     },
//   ]
//   const printTextDiv = document.querySelector('.print.Text')
//   function printText(style: any[], text: string) {
//     let styleStr = ''
//     for (let el of style) {
//       styleStr += `${el.name}:${el.value};`
//     }
//     if (printTextDiv) {
//       printTextDiv.innerHTML += `<p style= ${styleStr}${text} </p>`
//     }
//   }
//   printText(styleRed, 'Хетафе ');
//   printText(styleGreen, 'Мадрид ');
// 4 Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета. 
// const audience = [
//     {
//       name: 'yandex',
//       count: '20',
//       faculty: 'html',
//     },
//     {
//       name: 'mail',
//       count: '12',
//       faculty: '1c',
//     },
//     {
//       name: 'rambler',
//       count: '18',
//       faculty: 'mysql',
//     }
//   ]
//   function showAudience(arr: any[]) {
//     console.log(arr)
//   }
//   showAudience(audience)
//   function showAudienceForFaculty(arr: any[]) {
//     let faculty = prompt('Введите название факультета') as string
//     const auditories = [] as any
//     for (let el of arr) {
//       if (el.faculty == faculty) {
//         auditories.push(el)
//       }
//     }
//     return auditories
//   }
//   console.log(showAudienceForFaculty(audience));
//   function showAudienceForGroup(arr: any[]) {
//     let students = +(prompt('Введите количество студентов') as string)
//     const group = [] as any
//     for (let el of arr) {
//       if (el.count > students) {
//         group.push(el)
//       }
//     }
//     return group
//   }
//   console.log(showAudienceForGroup(audience))
// pz2-2
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
// 1 Функция принимает массив и выводит его на экран.
// 2 Функция принимает массив и выводит только четные элементы.
// 3 Функция принимает массив и возвращает сумму всех элементов массива.
// 4 Функция принимает массив и возвращает его максимальный элемент.
// 5 Функция добавления нового элемента в массив по указанному индексу.
// 6 Функция удаления элемента из массива по указанному индексу.
// 1 
var arr = [3, 6, 7, 2, 5, 5, 7, 3, 6, 4];
function showArr(arr) {
    return arr;
}
console.log(showArr(arr));
// 2  
function even(arr) {
    for (var i = 2; i <= arr.length; i++) {
        if (arr[i] % 2 == 0)
            return (arr[i]);
    }
}
console.log(even(arr));
// 3
function sum(arr) {
    var sum = 0;
    for (var i in arr) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sum(arr));
//4 
function maxElement(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i];
        }
    }
}
// 5
var arr4 = [3, 6, 7, 2, 5, 5, 7, 3, 6, 4];
function addElement(arr, index, value) {
    arr.splice(index, 0, value);
}
addElement(arr4, 0, 6);
console.log('arr', arr4);
// 6
function delElement(arr, index) {
    return arr.splice(index, 1);
}
delElement(arr4, 3);
console.log('arr', arr4);
//Создать еще один массив из 5 случайных чисел и написать следующие функции
//1 Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
//2 Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений
//3 Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве
// 1
var arr1 = [1, 1, 2, 3, 5, 8, 7, 9, 10, 7];
var arr2 = [5, 1, 6, 3, 2];
function getUnicArray(a, b) {
    var arr = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var el = a_1[_i];
        if (!arr.includes(el))
            arr.push(el);
    }
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var el = b_1[_a];
        for (var i = 0; i < arr.lenght; i++)
            console.log('arr[+i+],arr[i]');
        if (!arr.includes(el))
            arr.push(el);
    }
    return arr;
}
console.log(getUnicArray(arr1, arr2));
// 2
var arr02 = [5, 1, 6, 3, 2];
function getNewUniqueArray(arr1, arr2) {
    var arr = [];
    arr1.forEach(function (el) {
        if (!arr.includes(el) && arr2.includes(el)) {
            arr.push(el);
        }
    });
    return arr;
}
console.log(getNewUniqueArray(arr4, arr02));
// 3
function newMassive(arr1, arr2) {
    var unique = arr1.filter(function (item) { return arr2.indexOf(item) == -1; });
    return unique;
}
console.log(arr02);
console.log(arr4);
console.log(newMassive(arr4, arr02));
// Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.
// 1. Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li).
// 2. Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть нерегистрозависимым
// 1  
var fruits = ['Яблоко', 'Апельсин', 'Мандарин', 'Клубника', 'Груша'];
function sortFruits(arr) {
    fruits.sort(arr);
    return sortFruits;
}
console.log(sortFruits(function (a, b) { return a > b; }));
//2 
function findFruits(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}
console.log(fruits.indexOf('Мандарин'));
// pz1-5
// Во всех заданиях обязательно использовать рекурсию.
// 1 Написать функцию, которая вычисляет факториал заданного числа.
// 2 Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.
// 3 Написать функцию, которая выводит переданное ей число задом наперед.
// Например: число 1234 вывести как 4321
// 4 Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
// 5 Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок.Например: число 4 – (((()))).
//1
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));
//2
//в прямом порядке
function rightNumbers(s) {
    return s ? rightNumbers(s - 1) + s.toString() : "";
}
console.log(rightNumbers(7));
//в обратном порядке
function backNumbers(s) {
    return (s > 1) ? s.toString() + backNumbers(s - 1) : 1;
}
console.log(backNumbers(7));
//3
function reverseNumber(f) {
    f = f + '';
    return f.split('').reverse().join('');
}
console.log(reverseNumber(6421));
//4
function sumNumber(s) {
    var ss = s.toString();
    if (ss.length == 1) {
        return s;
    }
    else {
        return +ss[0] + sumNumber(+ss.slice(1));
    }
}
console.log(sumNumber(8751));
//5
function sumBracket(s) {
    if (s == 0)
        return '';
    return '(' + sumBracket(s - 1) + ')';
}
console.log(sumBracket(3));
//  dz1-5
// Во всех заданиях обязательно использовать рекурсию
//  1 Написать функцию возведения числа в степень.
//  2 Написать функцию поиска наибольшего общего делителя.
//  3 Написать функцию для поиска максимальной цифры в числе.
//  4 Написать функцию, которая определяет простое ли переданное число.
//  5 Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
//  Например: число 18 – множители 2 * 3 * 3
//  6 Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
//  Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел.
//  Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8
// 1  
function pow(x, n) {
    if (n == 1) {
        return x;
    }
    else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(4, 3));
// 2 
function maxDevider(a, b) {
    if (b > a)
        return maxDevider(b, a);
    if (!b)
        return a;
    return maxDevider(b, a % b);
}
console.log(maxDevider(5, 15));
// 3
// let num = 1463
// function maxNumber(arrElements) {
//  let arr = [] 
//  arr.push(arrElements)
//  while(arr.length>0)
//  arrElements = arr.pop()
// for (let s=0; s < arr.length; s++)
// {
// let el = arr[s]
// if(arr.isArray(el)) {
// arr.push(el)
// continue  
// }
// if (el>max) {
// max=el  
// }
// }
// return max
// }
// console.log(maxNumber(arrElements))
// 4
function primeNumber(n) {
    var i = 2;
    if (n == i && n % i == 0) {
        return 'Простое число';
    }
    else if (n > i && n % i == 0) {
        return 'Составное число';
    }
    else {
        return primeNumber(n);
    }
}
console.log(primeNumber(16));
//5 
function getPrimeFactors(n) {
    function primeNumber(n) {
        var i;
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    var i, sequence = [];
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && primeNumber(i)) {
        }
    }
    return sequence;
}
console.log(getPrimeFactors(12));
//6
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(4));
console.log(fib(8));
