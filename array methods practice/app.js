// practice forEach method
// foreach method return every element of an array from start to end. return a single array element at a time.
// similar to auto in c++

let arr = [1,3,9,2,8,4,98,34,56];

console.log("Given array elements: ")
arr.forEach((el) => console.log(el));

// practice map method
// array's element access process same as foreach.
// different than foreach, it create an array same size of given array. and return the whole array

console.log("Square of given elements: ");
let square = arr.map((el) => (el*el));
console.log(square);

// practice filter method
// use to filter array element, return only those array element, which meets specific conditions

console.log("All even elements in given array: ");
let evens = arr.filter((el) =>  el % 2 == 0);
console.log(evens);

// practice every method
// return true if every array elements fulfill given conditions. otherwise return false.
// similar as logical AND operation

console.log("Does every elements of given array is even: ")
let isEvenAll = arr.every((el) => el % 2 == 0);
console.log(isEvenAll);

// practice some method
// return true if any elements of the array fulfill given conditions. return false if no one fulfill given conditions.
// similar as logical OR operation

console.log("Does any element of given array is even: ")
let isEvenAny = arr.some((el) => el % 2 == 0);
console.log(isEvenAny);

// practice reduce method
// has two arguments, accumulator and element. element is the current array element and accumulator is the return value of previous step
// initially accumulator value is zero or null depend on datatype.

console.log("Sum of all array elements is: ");
let sum = arr.reduce((res, el) => res + el);
console.log(sum);