/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';

// Решение №1

const extractCurrencyValue = function(source) {
  if(arguments.length !== 1){
    throw new Error ("Функция должна принимать один параметр");
  }
  if(typeof source !== 'string'){
    return null;
  }
  const num = source.match(/[0-9]+/)[0];
  return Number(num);
}
console.log(extractCurrencyValue(PRICE)); // 120


 // Решение №2

//  const extractCurrencyValue = function(source) {
//   if(arguments.length !== 1){
//     throw new Error ("Функция должна принимать один параметр");
//   }
//   if(typeof source !== 'string'){
//     return null;
//   }
//   const result = source.slice(1)
//   return +result;
// } 
// console.log(extractCurrencyValue(PRICE)); // 120

 exports.extractCurrencyValue = extractCurrencyValue;