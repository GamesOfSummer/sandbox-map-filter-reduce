"use strict";
exports.__esModule = true;
var array = [
    41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51,
];
console.log(array.map(function (x) { return x * 2; }));
var test = function (x) { return x * 4; };
console.log(array.map(function (x) { return test(x); }));
console.log(array.filter(function (x) { return x % 2 === 0; }));
var reducer = function (accumulator, currentValue) {
    return accumulator + currentValue;
};
console.log(array.reduce(reducer));
