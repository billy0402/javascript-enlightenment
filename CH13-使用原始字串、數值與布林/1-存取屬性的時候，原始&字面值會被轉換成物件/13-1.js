/* 字串 */

// 字串物件被視為物件
var stringObject = new String('foo');
console.log(stringObject.length); // logs 3
console.log(stringObject['length']); // logs 3

// 當字面值/原始字串被視為物件時，它會轉換成物件
var stringLiteral = 'foo';
console.log(stringLiteral.length); // logs 3
console.log(stringLiteral['length']); // logs 3
console.log('bar'.length); // logs 3
console.log('bar'['length']); // logs 3