// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

////////////////// Решение //////////////////
'use strict'

const arr = [1, 3, 2, 5, 4, 6];

for (var i = 0, endI = arr.length - 1; i < endI; i++) {
  for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] < arr[j + 1]) {
          var swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
      }
  }
}
console.log(arr);
