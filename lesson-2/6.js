// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4];

////////////////// Решение //////////////////


// Вариант 1 //
/*
const array = [1, 2, 3, 4];

function arraySum(array){
var sum = null;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(array);
*/

// Вариант 2 //

const array = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < array.length; i++) {

    sum += array[i];

}   

console.log(sum);



