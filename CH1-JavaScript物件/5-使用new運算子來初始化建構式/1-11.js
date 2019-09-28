// 使用 new 關鍵字來為每一個原生的建構函式實例化一個實例
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Crap!');

// log/驗證哪一個建構式建立了物件
console.log(myNumber.constructor); // logs Number()
console.log(myString.constructor); // logs String()
console.log(myBoolean.constructor); // logs Boolean()
console.log(myObject.constructor); // logs Object()
console.log(myArray.constructor); //logs Array(), in modern browsers
console.log(myFunction.constructor); // logs Function()
console.log(myDate.constructor); // logs Date()
console.log(myRegExp.constructor); // logs RegExp()
console.log(myError.constructor); // logs Error()