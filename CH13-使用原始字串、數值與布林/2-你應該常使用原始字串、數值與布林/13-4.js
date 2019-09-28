// 字串.數值與布林物件
console.log(typeof new String('foo')); // logs 'object'
console.log(typeof new Number(1)); // logs 'object'
console.log(typeof new Boolean(true)); // logs 'object'

// 字串.數值與布林字面值/原始值
console.log(typeof 'foo'); // logs 'string'
console.log(typeof 1); // logs 'number'
console.log(typeof true); // logs 'boolean'