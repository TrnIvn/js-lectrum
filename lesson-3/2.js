/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

const checkSpam = function (sourse, example){
  if(typeof sourse !== 'string'){
    throw new Error ('sourse не строка');
  }
  if(typeof example !== 'string'){
    throw new Error ('example не строка');
  }
const result = sourse.toLowerCase().includes(example.toLowerCase());
return result;
}
console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true
exports.checkSpam = checkSpam;
