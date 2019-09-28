/* 數值 */

// 數值物件被視為物件
var numberObject = new Number(1.10023);
console.log(numberObject.toFixed()); // logs 1
console.log(numberObject['toFixed']()); // logs 1

// 當字面值/原始數值被視為物件時，它會轉換成物件
var numberLiteral = 1.10023;
console.log(numberLiteral.toFixed()); // logs 1
console.log(numberLiteral['toFixed']()); // logs 1
console.log((1234).toString()); // logs '1234'
console.log(1234['toString']()); // logs '1234'