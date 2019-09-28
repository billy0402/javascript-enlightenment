// 任何可產生物件的原生建構式都可以使用這種做法
var myString = new String();
var myNumber = new Number();
var myBoolean = new Boolean(true);
var myObject = new Object();
var myArray = new Array();
var myFunction = new Function('return 2+2');
var myRegExp = new RegExp('\bt[a-z]+\b');

myString.prop = 'test';
myNumber.prop = 'test';
myBoolean.prop = 'test';
myObject.prop = 'test';
myArray.prop = 'test';
myFunction.prop = 'test';
myRegExp.prop = 'test';

console.log(myString.prop, myNumber.prop, myBoolean.prop, myObject.prop, myArray.prop, myFunction.prop, myRegExp.prop);
// logs 'test', 'test', 'test', 'test', 'test', 'test', 'test'

// 注意: 實例屬性在原始/字面值是無效的
var myString = 'string';
var myNumber = 1;
var myBoolean = true;

myString.prop = true;
myNumber.prop = true;
myBoolean.prop = true;

console.log(myString.prop, myNumber.prop, myBoolean.prop);
// logs undefined, undefined, undefined