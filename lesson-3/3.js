/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
const truncate = function (string, maxLength){
  if(arguments.length !== 2 ){
    throw new Error ("Функция должна принимать два параметра");
  }
  if(typeof string !== 'string'){
    throw new Error ('sourse должен быль строкой');
  }
  if(typeof maxLength !== "number"){
    throw new Error ('maxLength должен быть числом');
  }
  if (string.length <= maxLength){
    return string;
  }
  const result = string.slice(0, maxLength-3);
  return `${result}...`;
}
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'

exports.truncate = truncate;
