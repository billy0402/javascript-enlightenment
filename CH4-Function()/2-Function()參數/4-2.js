var addFunction = new Function('num1', 'num2', 'return num1 + num2');

// 或者，建構式的第一個參數也可以使用逗號分隔引數字串，如下列函式本體所示。
var timesFunction = new Function('num1,num2', 'return num1 * num2');

console.log(addFunction(2, 2), timesFunction(2, 2));
// logs '4 4'

// 與常見的函式初始化模式比較
// 表達式格式
var addFunction = function (num1, num2) {
    return num1 + num2;
};

// 陳述式格式
function addFunction(num1, num2) {
    return num1 + num2;
}