var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');

console.log(addNumbersA(2, 2));
// logs 4

// 也可以使用比較常用的字面值來編寫
var addNumbersB = function (num1, num2) {
    return num1 + num2;
};

console.log(addNumbersB(2, 2));
// logs 4