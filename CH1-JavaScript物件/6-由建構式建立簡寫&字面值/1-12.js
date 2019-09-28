var myNumber = new Number(23); // 物件
var myNumberLiteral = 23; // 原始的數字值，不是物件

var myString = new String('male'); // 物件
var myStringLiteral = 'male'; // 原始的字串值，不是物件

var myBoolean = new Boolean(false); // 物件
var myBooleanLiteral = false; // 原始的布林值，不是物件

var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];

var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function (x, y) { return x * y };

var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;

// 確認字面值也是由相同的建構式建立的
console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);