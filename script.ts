// let a = +(prompt ('введите начало диапазона') as string)
// let b = +(prompt ('введите конец диапозона') as string)
// let sum = 0;
// while (a <= b) {
// sum+=a
// a++
// }
// alert (sum);

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
// alert (a)

// // let c =+(prompt ('введите число') as string)
// // for (let i = 2; i * 2 <= c; i++) {
// //  if (c % i == 0) {
// //  alert (`${i}`)  
// //  } 
// }

// let d = +(prompt ('введите число') as string) 
// do {
// d % 10    
// }
// while (d>0)
// alert (d)


// var i, N, Q1, Q2;
//  for(i=0; i<10;++i)
//  {
//   N= prompt('введите 10 чисел: ', )
//     if (N > 0 )Q1++
//     else
//     if (N < 0 )Q2++
//  }
//  if(Q1>0)alert('Количество положительных: ' +Q1)
//  else alert('Положительных чисел нет')
//  if(Q1>0)alert('Количество отрицательных: ' +Q2)
//  else alert('Отрицательных чисел нет')

// do {
// let a = +(prompt ('введите первое число') as string)
// let b = +(prompt ('введите второе число') as string)
// let t = +(prompt ('выберите знак - + / *') as string)
// let prime = +(prompt ('хотите решить еще один пример?', Y/N) as string)
// if (prime==Y) {
//   switch (result) {
//     case '-': result = a - b
//     break 
//     case '+': result = a + b
//     break
//     case '/': result = a / b
//     break
//     case '*': result = a * b
//     break
//       }
//   alert (result)
// }
// }
//  while (c!=N)

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
// alert (newNumber)

// let day = ('понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье')
// let d = 0
// while (confirm ('хотите увидеть следующий день?')) {
// d = (d+1)
// }
// alert (d)

// let i
// let j
// for (i=2;i<10;i++) {
// for (j=1;j<11;j++) {
// let table = +(i*j) 
// document.write(' ' +table + ' ')
// }   
// document.write ('<br>')
// }

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
// alert (number**degree)
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
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
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

// Написать функцию, которая вычисляет факториал переданного ей числа

// function factorial(a) {
// let fact = 1
// if (a ==0) return fact
// for (let i=1; i<=a; i++) {
// fact = fact * i;   
// }
// return fact;
// }
// alert( factorial(5));

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// let a = +(prompt('введите первое число') as string)
// let b = +(prompt('введите второе число') as string)
// let c = +(prompt('введите третье число') as string)
// function sum(f) {
// f = ((a*100)+(b*10)+c)
// return f;
// }
//  console.log (f)

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

// function time1 (a,b,c) {
// let timeToSeconds = a*3600 + b*60 + c;
// return timeToSeconds;    
// alert(timeToSeconds);
// }


//Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»

// function time2 (a) {
// let hours = (a/3600)
// let minutes = ((a-(hours*3600))/60)
// let seconds = (a-(a-hours*3600)-(minutes*60))
// let CurrentTime = `${hours}:${minutes}:${seconds}`
// return CurrentTime;
// }

// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс»

// function timeDifference(a1,b1,c1,a2,b2,c2) {
// let timeToSeconds = a1*3600 + b1*60 +c1
// let timeToSeconds2 = a2*3600 + a2*60 +c2
// let dateDifference = timeToSeconds - timeToSeconds2
// let hours = (dateDifference/3600)
// let minutes = ((dateDifference-(hours*3600))/60)
// let seconds = (dateDifference-(dateDifference-hours*3600)-(minutes*60))
// let CurrentDifference = `${hours}:${minutes}:${seconds}`
// return CurrentDifference;
// }