"use strict";

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
var input;

do {
  input = prompt('введите число');
} while ((input === null || input === void 0 ? void 0 : input.length) < 1);

var shift = +prompt('на сколько разрядов сдвинуть число?');
var newNumber = '';

for (var i = shift; i < input.length; i++) {
  newNumber += input[i];
}

for (var i = shift - 1; i >= 0; i--) {
  newNumber += input[i];
}

alert(newNumber); // var i, N, Q1, Q2;
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
// let str = +(prompt('Введите число') as string)
// let k = +(prompt('На сколько цифр его сдвинуть?') as string)
// alert(str.slice(k) + str.slice(0, k));
// let day = ('понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье')
// let d = 0
// while (confirm ('хотите увидеть следующий день?')) {
// d = (d+1)
// }
// alert (d)
// praktice
// let i = +(prompt('сколько раз вывести #')as string)
// while ()
// i++
// console.log ('#')
// let i = +(prompt('введите число')as string)
// while (i>0){
// console.log (i)
// i--;
// }
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