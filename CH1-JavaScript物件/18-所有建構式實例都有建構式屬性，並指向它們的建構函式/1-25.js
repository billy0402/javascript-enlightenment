var myNumber = new Number('23');
var myNumberL = 23; // 簡短字面值
var myString = new String('male');
var myStringL = 'male'; // 簡短字面值
var myBoolean = new Boolean('true');
var myBooleanL = true; // 簡短字面值
var myObject = new Object();
var myObjectL = {}; // 簡短字面值
var myArray = new Array();
var myArrayL = []; // 簡短字面值
var myFunction = new Function();
var myFunctionL = function () { }; // 簡短字面值
var myDate = new Date();
var myRegExp = new RegExp('/./');
var myRegExpL = /./; // 簡短字面值
var myError = new Error();

// 全部都會回傳 true
console.log(
    myNumber.constructor === Number,
    myNumberL.constructor === Number,
    myString.constructor === String,
    myStringL.constructor === String,
    myBoolean.constructor === Boolean,
    myBooleanL.constructor === Boolean,
    myObject.constructor === Object,
    myObjectL.constructor === Object,
    myArray.constructor === Array,
    myArrayL.constructor === Array,
    myFunction.constructor === Function,
    myFunctionL.constructor === Function,
    myDate.constructor === Date,
    myRegExp.constructor === RegExp,
    myRegExpL.constructor === RegExp,
    myError.constructor === Error
);