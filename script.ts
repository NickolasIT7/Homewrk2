
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
let arr = [3, 6, 7, 2, 5, 5, 7, 3, 6, 4]
function showArr(arr) {
  return arr
}
console.log(showArr(arr))

// 2  
function even(arr) {
  for (let i = 2; i <= arr.length; i++) {
    if (arr[i] % 2 == 0)
      return (arr[i])
  }
}
console.log(even(arr))

// 3
function sum(arr) {
  let sum = 0
  for (let i in arr) {
    sum = sum + arr[i]
  }
  return sum
}
console.log(sum(arr))

//4 
function maxElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      arr[0] = arr[i]
    }
  }
}

// 5

let arr4 = [3, 6, 7, 2, 5, 5, 7, 3, 6, 4]
function addElement(arr, index, value) {
  arr.splice(index, 0, value)
}
addElement(arr4, 0, 6)
console.log('arr', arr4)
// 6
function delElement(arr, index) {
  return arr.splice(index, 1)
}
delElement(arr4, 3)
console.log('arr', arr4)

//Создать еще один массив из 5 случайных чисел и написать следующие функции

//1 Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.

//2 Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений

//3 Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве

// 1
let arr1 = [1, 1, 2, 3, 5, 8, 7, 9, 10, 7]
let arr2 = [5, 1, 6, 3, 2]
function getUnicArray(a: any[], b: any[]) {
  let arr = [] as any
  for (let el of a) {
    if (!arr.includes(el)) arr.push(el)
  }
  for (let el of b) {
    for (let i = 0; i < arr.lenght; i++)
      console.log('arr[+i+],arr[i]')
    if (!arr.includes(el)) arr.push(el)
  }
  return arr
}
console.log(getUnicArray(arr1, arr2))

// 2
let arr02 = [5, 1, 6, 3, 2]
function getNewUniqueArray(arr1, arr2) {
  let arr = [] as any[]
  arr1.forEach(el => {
    if (!arr.includes(el) && arr2.includes(el)) {
      arr.push(el)
    }
  })
  return arr
}
console.log(getNewUniqueArray(arr4, arr02))

// 3
function newMassive(arr1, arr2) {
  let unique = arr1.filter((item) => arr2.indexOf(item) == -1)
  return unique
}
console.log(arr02)
console.log(arr4)
console.log(newMassive(arr4, arr02))

// Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.
// 1. Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li).
// 2. Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть нерегистрозависимым

// 1  
let fruits = ['Яблоко', 'Апельсин', 'Мандарин', 'Клубника', 'Груша']
function sortFruits(arr) {
  fruits.sort(arr)
  return sortFruits
}
console.log(sortFruits((a, b) => a > b))

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
console.log(fruits.indexOf('Мандарин'))

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
console.log(factorial(4))

//2
//в прямом порядке
function rightNumbers(s) {
  return s ? rightNumbers(s - 1) + s.toString() : ""
}
console.log(rightNumbers(7))

//в обратном порядке
function backNumbers(s) {
  return (s > 1) ? s.toString() + backNumbers(s - 1) : 1;
}
console.log(backNumbers(7));

//3
function reverseNumber(f) {
  f = f + ''
  return f.split('').reverse().join('')
}
console.log(reverseNumber(6421))

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
    return ''
  return '(' + sumBracket(s - 1) + ')'
}
console.log(sumBracket(3))

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
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(4, 3));

// 2 
function maxDevider(a, b) {
  if (b > a)
    return maxDevider(b, a)
  if (!b)
    return a
  return maxDevider(b, a % b)
}
console.log(maxDevider(5, 15))

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
  let i = 2
  if (n == i && n % i == 0) {
    return 'Простое число'
  } else if (n > i && n % i == 0) {
    return 'Составное число'
  } else {
    return primeNumber(n)
  }
}
console.log(primeNumber(16))

//5 

function getPrimeFactors(n) {
  function primeNumber(n) {
    let i
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

console.log(getPrimeFactors(12))


//6
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(4))
console.log(fib(8))

//dz4-2

//1
//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

let Circle = /** @class */ (function () {
  function Circle(radius) {
    // все, что в комментариях происходит неявно
    // this = {}  
    this._radius = radius;
    // console.log(this) // {_radius:r, prototype:Circle}
  }
  Object.defineProperty(Circle.prototype, "radius", {
    get: function () {
      return this._radius
    },
    set: function (value) {
      this._radius = value
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(Circle.prototype, "diametr", {
    get: function () {
      var diametr = this._radius * 2
      return diametr
    },
    enumerable: false,
    configurable: true
  });
  Circle.prototype.getSquare = function () {
    return Math.PI * Math.pow(this._radius, 2)
  };
  Circle.prototype.getCircleLength = function () {
    return Math.PI * (this._radius * 2)
  };
  return Circle
}());

let myCircle = new Circle(5);
// console.log(myCircle._radius)
console.log(myCircle.radius)
myCircle.radius = 10
console.log(myCircle.radius);
console.log(myCircle.diametr)
console.log(myCircle.getSquare())
console.log(myCircle.getCircleLength())
console.log(myCircle)

//2
// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.

let HtmlElement = /** @class */ (function () {
  function HtmlElement(tag, single, text) {
    this.attrs = []
    this.styles = []
    this.elements = []
    this.tag = tag
    this.single = single
    this.text = text
  }
  HtmlElement.prototype.setAttr = function (attr) {
    this.attrs.push(attr)
  }
  HtmlElement.prototype.setStyle = function (style) {
    this.styles.push(style)
  }
  HtmlElement.prototype.appendElement = function (element) {
    this.elements.push(element)
  }
  HtmlElement.prototype.prependElement = function (element) {
    this.elements.unshift(element)
  }
  HtmlElement.prototype.getHtml = function () {
    if (this.single) {
      return "<" + this.tag + " " + this.attrs.join(' ') + " value=\"" + this.text + "\" >"
    }
    else {
      var begin = "<" + this.tag + " " + this.attrs.join(' ') + ">" + this.text
      var end = "</" + this.tag + ">"
      return begin + this.elements.map(function (el) { return el.getHtml(); }).join('') + end
    }
  }
  return HtmlElement
}())
var imgElement = new HtmlElement('img', true, '')
var pElement = new HtmlElement('p', false, 'Getafe')
var h3Element = new HtmlElement('h3', false, 'Getafe')
h3Element.setAttr('class="colorRed"')
console.log(imgElement)
imgElement.setAttr('src=https://upload.wikimedia.org/wikipedia/ru/thumb/3/3f/Getafe_cf_200px_RU.png/200px-Getafe_cf_200px_RU.png')
imgElement.setStyle('color:red')
imgElement.setStyle('padding:10px')
imgElement.setAttr("style=\"" + imgElement.styles.join(';') + "\"")
console.log(imgElement.getHtml())
pElement.appendElement(imgElement)
console.log(pElement.getHtml())
var divElement = new HtmlElement('div', false, '')
divElement.setAttr('style="width:300px; margin:10px"')
var wrapperElement = new HtmlElement('div', false, '')
wrapperElement.setAttr('id="wrapper"')
wrapperElement.setStyle('display: flex')
wrapperElement.appendElement(divElement)
divElement.appendElement(h3Element)
divElement.appendElement(imgElement)
divElement.appendElement(pElement)

//3
// Реализовать класс, который описывает css класс. Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки

var CssClass = /** @class */ (function () {
  function CssClass(name) {
    this.styles = []
    this.name = name
  }
  CssClass.prototype.setStyle = function (style) {
    this.styles.push(style)
  };
  CssClass.prototype.delStyle = function (style) {
    var id = this.styles.findIndex(function (el) { el == style; })
    if (id != 1)
      this.styles.splice(id, 1)
  };
  CssClass.prototype.getCss = function () {
    return "." + this.name + " {" + (this.styles.join(';')) + "}"
  }
  return CssClass
}())
var colorRed = new CssClass('colorRed')
colorRed.setStyle('color:red')
colorRed.setStyle('font-size:24px')
var colorGreen = new CssClass('colorGreen')
colorGreen.setStyle('color:green')

//4
// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент, описанный с помощью класса
// HtmlElement;
// ■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных элементов).

var MainBlockHtml = /** @class */ (function () {
  function MainBlockHtml(h, a) {
    this.htmlObject = h
    this.cssArray = a
  }
  MainBlockHtml.prototype.getCode = function () {
    document.head.innerHTML += "<style>" + this.cssArray.map(function (el) { return el.getCss(); }).join('\n') + "</style>"
    document.body.innerHTML += this.htmlObject.getHtml()
  };
  return MainBlockHtml
}())
var pageObj = new MainBlockHtml(divElement, [colorRed, colorGreen])
pageObj.getCode()

//pz4-2

//1
// Реализовать класс PrintMaсhine, которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу метода.



let PrintMachine = /** @class */ (function () {
  function PrintMachine(size, color, font, tag) {
    if (tag === void 0) { tag = 'p'; }
    this.size = 14;
    this.color = 'red';
    this.font = 'Arial';
    this.tag = 'p';
    this.print = function (text) {
      // @ts-ignore
      document.write("<" + this.tag + " style=\"font-size:" + this.size + "; color: " + this.color + "; font-family:" + this.font + "\">" + text + "</" + this.tag + ">");
    };
    this.size = size;
    this.color = color;
    this.font = font;
    this.tag = tag;
  }
  return PrintMachine;
}());

console.log(PrintMachine);

let header = new PrintMachine(20, 'black', 'Arial', 'h2');
let text = new PrintMachine(16, 'black', 'Arial', 'p');
let datePrint = new PrintMachine(18, 'black', 'Arial', 'p')

function PM(size, color, font, tag) {
  if (tag === void 0) { tag = 'p'; }
  return function print(text) {
    document.write("<" + tag + " style=\"font-size:" + size + "; color: " + color + "; font-family:" + font + "\">" + text + "</" + tag + ">")
    let rPA14 = PM(14, 'red', 'Arial', 'st')
    rPA14('sfdsfsdfwerwersdf sdfds fsdfs')
    let bHT16 = PM(16, 'blue', 'Tahoma', 'h1')
    bHT16('sdfsdfjwiooiwe nkuhyiuo hfsd')
    let redParagraphArial14 = new PrintMachine(14, 'red', 'Arial', 'st')
    let blueHeaderTahoma16 = new PrintMachine(16, 'blue', 'Tahoma', 'h1')
    blueHeaderTahoma16.tag = 'h2'
    blueHeaderTahoma16.print('sdfhsdkjfhsdk kjh ksjfdh sdk')
    redParagraphArial14.print('fsddsfdsfsd')
  };
}
;
[0, 1, 2].forEach(function (el) {
  console.log(el);
});
function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}
forEach([0, 1, 2], (function (el, i) {
  console.log(el, i);
}));

//2
//Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print.
// Обратите внимание на то, как выводится дата:
// ■ если с даты публикации прошло менее дня, то выводится «сегодня»
// ■ если с даты публикации прошло менее недели, то выводится «N дней назад»
// ■ в остальных случаях, полная дата в формате «дд.мм.гггг».

class infoNews {
  heading;
  text;
  arrayTags: Array<string>
  date: Date;

  constructor(heading, text, arrayTags, date: string) {
    this.heading = heading;
    this.text = text;
    this.arrayTags = arrayTags;
    this.date = new Date(date);
  }
  getDate() {
    let today = new Date()
    let yesterday = new Date(today.valueOf() - 1000 * 60 * 60 * 24)
    if (this.date.toLocaleDateString() == today.toLocaleDateString()) {
      return 'today'
    } else if (this.date.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
      return ((today.valueOf() - this.date.valueOf()) / (1000 * 60 * 60 * 24)).toFixed(0) + ' days ago'
    } else {
      return this.date.toLocaleDateString()
    }
  }
  print() {
    header.print(this.heading)
    text.print(this.text)
    datePrint.print(`<i>${this.getDate()}<i>`)
    text.print(this.arrayTags.join('  '))
  }
}
const post = new infoNews('you', 'never', ['walk', 'alone'], '2023-07-29')
console.log(post.getDate())

//3

// Реализовать класс, описывающий новостную ленту. Класс должен содержать:
// ■ массив новостей;
// ■ get-свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних новостей до старых);
// ■ метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.

class NewsFeed {
  array: infoNews[]
  constructor(NewsArray: infoNews[]) {
    this.array = NewsArray
  }
  get count() {
    return this.array.length
  }
  print() {
    this.array.forEach(el => {
      el.print()
    })
  }
}

const feed = new NewsFeed([
  new infoNews('you', 'never', ['walk', 'alone'], '2023-08-23'),
  new infoNews('you2', 'never', ['walk', 'alone'], '2023-08-21'),
  new infoNews('you3', 'never', ['walk', 'alone'], '2023-07-24'),
  new infoNews('you4', 'never', ['walk', 'alone'], '2023-07-09'),
])

// infoNews.push('you', 'never', ['walk', 'alone'], '2023-08-25')
// console.log(NewsFeed)

// let index = arr.findIndex(el => el.this.heading == this.heading)
// infoNews.splice(index, 1)
// console.log(NewsFeed)

// infoNews.sort(a.date - b.date)
// console.log(NewsFeed)

// infoNews.filter(this.arrayTags = 'you')
// console.log(NewsFeed)

//dz3-2
//1 Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.

function displayStringStatistics(strc) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let digits = '0123456789';
  let chars = '_+=-!@#$%^&*()~`*[]{}\\|/';
  let l = 0, d = 0, c = 0;
  for (let _i = 0, strc_1 = strc; _i < strc_1.length; _i++) {
    let char = strc_1[_i];
    if (letters.includes(char))
      l++;
    if (digits.includes(char))
      d++;
    if (chars.includes(char))
      c++;
  }
  console.log("num of letters " + l + "\nnum of digits " + d + "\nnum of chars " + c);
  // return {letters:l,digits:d,chars:c}
}
displayStringStatistics('as35dfsj24Stsas#');

//2 Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

// function textToString(num) {
//   let firstNumber = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
//   let secondNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
//   let thirdNumber = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
//   if (num > 0 && num <= 9) {
//     return firstNumber[num - 1]
//   }
//   if (num >= 10 && num <= 20) {
//     return secondNumber[num - 1]
//   }
//   if (num >= 20 && num <= 99) {
//     let str = (`${num}`)
//     str = str.split('');
//     let first = str[0]
//     let second = str[1]
//     return `${thirdNumber[first - 2]} ${firstNumber[second - 1]}`
//   }
// }
// console.log(textToString(24))
// console.log(textToString(36))
// console.log(textToString(61))

//3 Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

function changeSymbol(str: string) {
  const arr = str.split('')//превращение строки в массив 
  const big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let small = 'abcdefghijklmnopqrstuvwxyz'
  const num = '0123456789'
  for (let i = 0; i < arr.length; i++) {
    if (big.includes(arr[i])) {
      arr[i] = arr[i].toLowerCase()
    } else if (small.includes(arr[i])) {
      arr[i] = arr[i].toUpperCase()
    } else if (num.includes(arr[i])) {
      arr[i] = '_'
    }
  }
  return arr.join('')
}
console.log(changeSymbol('12axcSs2'))

//4 Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, text- align в textAlign.

function changeStyleName(style: string) {
  let arr = style.split('-')
  console.log('arr', arr)
  arr.forEach((el, i, arr) => {
    if (i > 0) {
      console.log('el', el)
      arr[i] = el[0].toUpperCase() + el.slice(1)
    }
  })
  console.log('arr', arr)
  return arr.join('')
}
console.log(changeStyleName('font-size-normal'))

//5 Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.

function wordToAbbr(word: string) {
  return word.split(' ').map(i => i[0].toUpperCase()).join('')
}
console.log(wordToAbbr('cascading style sheets'))

//6 Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.

function joinStrings(...strings) {
  return strings.join('');
}
console.log(joinStrings('Google', 'Opera', 'fsfs'));

//7 Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 != 0) {
        return num1 / num2;
      }
      else {
        return "на 0 делить нельзя";
      }
  }
}
console.log(calculate(4, 6, "-"));
console.log(calculate(2, 5, "*"));

//8 Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

function task(url) {
  let arr
  let protocol
  let domain
  let arr1
  let way
  arr2 = url.split("://")
  for (let index = 0; index < arr.lenght; index++) {
    protocol = arr[0]
    arr1 = arr[0].split("/")
    domain = arr1[0]
  }
  arr1.shift()
  way = arr1.join("/")

  return "Информация\протокол: " + protocol + "\домен: " + domain + "\путь: " + way;
}

console.log(task("https:itstep.org/ua/about"))

//9 Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.

function devide(str, devide) {
  return arr = str.split(devide);
}
console.log(devide('10/08/2020', '/'));

//10 Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % указывается индекс входного параметра.
// При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”

function textConclusion(template, ...strings) {
  [...strings].forEach((item, index) => template = template.replace('%' + (index + 1), item));
  return template;
}
console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));
console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));

// dz2-5

//1
// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в процентах);
// ■ метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.Продемонстрировать работу написанных методов.

class Marker {
  colour;
  ink;

  constructor(colour, ink) {
    this.colour = colour;
    this.ink = ink
  }
  get markerProperties() {
    return [this.colour, this.ink]
  }
  set markerProperties(newProperties) {
    [this.colour, this.ink] = [...newProperties]
  }

  // print(line) {
  //   let m = document.getElementById("content")
  //   for (let i = 0; i < line.lenght; i++) {
  //     if (this.ink != 0) {
  //       if (line[i] == " ") {
  //         this.ink += 0.5;
  //       }
  //       m.innerHTML += line[i]
  //       m.style.color = this.colour
  //       this.ink -= 0.5;
  //     } else {
  //       document.write("Marker is over")
  //       break
  //     }
  //   }
  // }
}

class FilledMarker extends Marker {
  fill(ink) {
    if (ink > 100) {
      ink = 100
    } else {
      this.ink += ink
    }
  }
}

let marker = new FilledMarker("#432", 15)
marker.fill(32)
const l = 'hello'

// marker.print(l)
document.body.setAttribute("style", "font-size: 15px; text-align:center;");

//2
//Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// метод для вывода даты (числа и месяца) текстом;
// метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// метод для проверки – високосный год или нет;
// метод, возвращающий следующую дату.

class ExtendedDate extends Date {
  getRussianDate() {
    const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
  }
  now() {
    this.now()
  }
  parse(val: string) {
    this.parse(val)
  }
}
console.log((new ExtendedDate('2020-12-26')).getRussianDate())

function checkDate(ExtendedDate) {
  if (this.now > ExtendedDate) {
    return false
  }
  if (this.now <= ExtendedDate) {
    return true
  }
}
console.log(checkDate('2023-08-18'))

//3
//Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. 
//Массив работников необходимо передавать через конструктор, а получать html код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

class Employee {
  name;
  age;
  post;
  constructor(name: string, age: number, post: string) {
    this.name = name;
    this.age = age;
    this.post = post;
  }
}

const empl = [
  new Employee("Matthew McConaughey", 44, "investment specialist"),
  new Employee("Jon Flanagan", 30, "credit specialist"),
  new Employee("Jamie Carragher", 45, "auditor"),
  new Employee("Robert Fowler", 48, "accountant"),
  new Employee("Jamie Vardy", 36, "accountant")
]

class EmpTable {
  arr
  constructor(arr: Employee[]) {
    this.arr = arr;
  }

  getHtml() {
    const html = `<table>
    <thead>
    <tr>
    <th>name</th>
    <th>age</th>
        <th>post</th>
      </tr>
    </thead>
    <tbody>
      ${this.arr.map(el => `<tr><td>${el.name}</td><td>${el.age}</td><td>${el.post}</td></tr>`).join('')}
      </tbody>
      </table>`
    document.body.insertAdjacentHTML('beforeend', html)
    return html
  }
}
const table = new EmpTable(empl)



//4
//Реализовать класс StyledEmpTable, который наследуется от класса EmpTable. Добавить метод getStyles(), который возвращает
// строку со стилями для таблицы в тегах style. Переопределить метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса. Создать объект класса StyledEmpTable и вывести на экран результат работы метода getHtml().

class StyledEmpTable extends EmpTable {
  getStyles() {
    return `<style> table { color:red } </style>`
  }
  getHtml(): string {
    document.head.insertAdjacentHTML('beforeend', this.getStyles())
    return super.getHtml()
  }
}

const StyledTable = new StyledEmpTable(empl)
StyledTable.getHtml()




//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// 1.Используя setInterval.
// 2.Используя рекурсивный setTimeout.

//1
function printNumbers(from, to) {
  setInterval(function go() {
    let i = from
    while (i <= to)
      setInterval(go, 1000)
    i++
  }, 1000)
}
printNumbers(2, 5)

//2
function printNumbersRecursion(from, to) {
  setTimeout(function go() {
    if (from < to) {
      setTimeout(go, 1000)
    }
    from++
  }, 1000)
}
printNumbersRecursion(5, 10)

// pz2-5
//1
// Реализовать класс Button, который содержит ширину, высоту, текст кнопки и метод showBtn(), который выводит кнопку на экран с помощью тега button и функции document.write().
// Реализовать класс BootstrapButton, унаследовав его от класса Button. Добавить поле color и переопределить метод showBtn() так, чтобы кнопка выводилась со стилями и указанным цветом.

class Button {
  width
  height
  text
  constructor(width: number, height: number, text: string) {
    this.width = width
    this.height = height
    this.text = text
  }
  showBtn() {
    document.body.insertAdjacentHTML('beforeend', `<button style="width:${this.width}; height:${this.height};">${this.text}</button>`)
  }
}
const newButton = new Button(200, 100, 'Stop')
newButton.showBtn()
class BootstrapButton extends Button {
  color
  constructor(width: number, height: number, text: string, color: string) {
    super(width, height, text)//вызов конструктора родителя
    this.color = color//this доступен только после вызова конструктора родителя
  }
  showBtn() {
    // super.showBtn()//вызов метода родителя
    document.body.insertAdjacentHTML('beforeend', `<button style="width:${this.width}; height:${this.height};background-color:${this.color}">${this.text}</button>`)
  }
}

const newButton2 = new BootstrapButton(200, 100, 'STOP', 'start')
newButton2.showBtn()

//2
// Реализовать класс, описывающий геометрическую фигуру со свойствами и методами:
// ■ get-свойство для получения названия фигуры;
// ■ метод для вывода информации о фигуре (стороны и их длина);
// ■ метод для вычисления площади фигуры;
// ■ метод для вычисления периметра фигуры.
// Реализуйте классы-наследники: квадрат, прямоугольник и треугольник. Переопределите методы вывода и вычислений в  классах-наследниках.
// Создайте массив с различными фигурами и выведите информацию о каждой фигуре, включая площадь и периметр.

class Figure {
  name
  constructor(name: string) {
    this.name = name;
  }
  get figureName() {
    return this.name
  }
  getFigureInfo() {
  }
  getFigureSquare() {
  }
  getFigurePerimetr() {
  }
}

class Triangle extends Figure {
  length1
  length2
  length3
  constructor(length1: number, length2: number, length3: number) {
    super()
  }
  getFigureSquare() {
    Sq = (this.length1 * this.length2) / 2
  }
  getFigurePerimetr() {
    perimetr = this.length1 + this.length2 + this.length3
  }
}

class Square extends Figure {
  length3
  constructor(length3) {
    getFigureSquare() {
      Sq = this.length3 * 2
    }
    getFigurePerimetr() {
      perimetr = this.length3 * 4
    }
  }
}

class Rectangle extends Figure {
  length4
  length5
  constructor(length4,length5) {
    getFigureSquare() {
      Sq = this.length4*this.length5
    }
    getFigurePerimetr() {
      perimetr = this.length4*2+this.length5*2
    }
  }
}

let figures = [
  new Triangle(4,6,3),
  new Square(6),
  new Rectangle(4,7)
]
console.log 


//3
// Реализуйте класс ExtentedArray, унаследовав его от стандартного класса Array и добавив следующие методы:
// ■ метод getString(separator) – для получения строки со всеми элементами массива, перечисленными через указанный разделитель: запятая, тире, пробел и т. д.;
// ■ метод getHtml(tagName) – для получения строки с html кодом, где каждый элемент массива будет обернут в указанный тег (учтите, если указывается тег li, то все элементы
// дополнительно необходимо обернуть в ul).
// Создайте объект класса ExtentedArray, заполните его данными и выведите на экран результаты работы методов getString() и getHtml().

class ExtentedArray extends Array {
  
}