var myObject = {};

// myObject 裡面的屬性代表大部分的 JavaScript 原始值

myObject.myFunction = function () { };
myObject.myArray = [];
myObject.myString = 'string';
myObject.myNumber = 33;
myObject.myDate = new Date();
myObject.myRegExp = /a/;
myObject.myNull = null;
myObject.myUndefined = undefined;
myObject.myObject = {};
myObject.myMathPI = Math.PI;
myObject.myError = new Error('Crap!');

console.log(myObject.myFunction, myObject.myArray, myObject.myString, myObject.myNumber, myObject.myDate, myObject.myRegExp, myObject.myNull, myObject.myNull, myObject.myUndefined, myObject.myObject, myObject.myMathPI, myObject.myError);

// 任何複合物件都使用相同的做法，例如函式

var myFunction = function () { };

myFunction.myFunction = function () { };
myFunction.myArray = [];
myFunction.myString = 'string';
myFunction.myNumber = 33;
myFunction.myDate = new Date();
myFunction.myRegExp = /a/;
myFunction.myNull = null;
myFunction.myUndefined = undefined;
myFunction.myObject = {};
myFunction.myMathPI = Math.PI;
myFunction.myError = new Error('Crap!');

console.log(myFunction.myFunction, myFunction.myArray, myFunction.myString, myFunction.myNumber, myFunction.myDate, myFunction.myRegExp, myFunction.myNull, myFunction.myNull, myFunction.myUndefined, myFunction.myObject, myFunction.myMathPI, myFunction.myError);