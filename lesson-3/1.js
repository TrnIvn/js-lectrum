/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

const upperCaseFirst = function (param){
  if(typeof param !== 'string'){
    throw new Error ('Параметр не строка'); 
  }
  if(!param.trim().length) {
    return param;
  }
  const firstChar = param.charAt(0).toUpperCase();
  const reString = param.slice(1);
  return `${firstChar}${reString }`;
}

const result = upperCaseFirst('pitter'); // Pitter
const result1 = upperCaseFirst(''); // ''
console.log(result);
console.log(result1);
exports.upperCaseFirst = upperCaseFirst;
