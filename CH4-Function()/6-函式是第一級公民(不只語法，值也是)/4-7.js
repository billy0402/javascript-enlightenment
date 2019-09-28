// 你可將函式儲存在變數 (funcA).陣列 (funcB) 和物件 (funcC) 中
var funcA = function () { }; // 以這種方式呼叫: funcA()
var funcB = [function () { }]; // 以這種方式呼叫: funcB[0]()
var funcC = { method: function () { } }; // funcC.method() 或 funcC['method']()

// 函式可傳送到函式，也可以由函式傳回
var funcD = function (func) {
    return func
};

var runFuncPassedToFuncD = funcD(function () {
    console.log('Hi');
});

runFuncPassedToFuncD();

// 函式是物件，也就是說它們可以擁有屬性
var funcE = function () { };
funcE.answer = 'yup'; // 實例屬性
console.log(funcE.answer);
// logs 'yup'