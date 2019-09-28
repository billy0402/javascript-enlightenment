var countUpFromZero = function () {
    var count = 0;
    return function () { // return nested child function when countUpFromZero is invoked
        return ++count; // 在父函式中，count 已被定義在範圍鏈
    };
}(); // 立刻呼叫，回傳嵌套函式

console.log(countUpFromZero()); // logs 1
console.log(countUpFromZero()); // logs 2
console.log(countUpFromZero()); // logs 3