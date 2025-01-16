"use strict";
let result = 0;
let inputs = [2, '+', 3];
const calculate = (value) => {
    let numberToCalc = eval(value.join(''));
    return result = numberToCalc;
};
inputs.push('+');
inputs.push('(');
inputs.push(3);
inputs.push('+');
inputs.push(3);
inputs.push(')');
inputs.push('*');
inputs.push(3);
console.log(calculate(inputs));
