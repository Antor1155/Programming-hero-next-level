"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const addans = add(2, 9);
const arrow = (num3, num4) => `my multiply is ${num3 * num4}`;
const multip = arrow(3, 9);
const method = {
    numk: 99,
    numz: 1,
    addition() {
        return this.numk + this.numz;
    },
};
method.numz = 101;
console.log(method.addition());
const arr = [1, 3, 4, 5];
const sqr = arr.map((ele) => ele ** 2 + "hello");
console.log(sqr);
