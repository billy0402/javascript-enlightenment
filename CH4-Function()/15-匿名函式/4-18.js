/*
 * // 匿名函式，但無法被呼叫
 * function() {
 *     console.log('hi');
 * };
 */

// 建立一個可呼叫匿名函式的函式
var sayHi = function (f) {
    f(); // 呼叫匿名函式
}

// 將匿名函式當成參數來傳遞
sayHi(function () {
    console.log('hi');
});
// log 'hi'