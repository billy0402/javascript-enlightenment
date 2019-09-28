// 在產生原始值的時候不會建立任何物件，注意在此不使用 "new" 關鍵字
var primitiveString1 = 'foo';
var primitiveString2 = String('foo');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

// 用 typeof 確認不是物件
console.log(typeof primitiveString1, typeof primitiveString2); // logs 'string,string'
console.log(typeof primitiveNumber1, typeof primitiveNumber2); // logs 'number,number,
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2); // logs 'boolean,boolean'

// 比較使用建構式與 new 關鍵字來建立物件的做法
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x * y");
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('Crap!');

console.log(
    typeof myNumber,
    typeof myString,
    typeof myBoolean,
    typeof myObject,
    typeof myArray,
    typeof myFunction, // 留意，對於所有函式物件，typeof 會回傳 function
    typeof myDate,
    typeof myRegExp, // 留意，對於 RegExp()，typeof 會回傳 function
    typeof myError
);
// logs 'object object object object object function object function object'