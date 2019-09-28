/* 布林 */

// 布林物件被視為物件
var booleanObject = new Boolean(0);
console.log(booleanObject.toString()); // logs 'false'
console.log(booleanObject['toString']()); // logs 'false'

// 當字面值/原始布林被視為物件時，它會轉換成物件
var booleanLiteral = false;
console.log(booleanLiteral.toString()); // logs 'false'
console.log(booleanLiteral['toString']()); // logs 'false'
console.log((true).toString()); // logs 'true'
console.log(true['toString']()); // logs 'true'