var countDownFrom = function countDownFrom(num) {
    console.log(num);
    num--; // 改變參數值

    // if num < 0，回傳沒有遞迴的函式
    if (num < 0) {
        return false;
    }

    // 如果它是一個匿名函式，也可以執行 arguments.callee(num)
    countDownFrom(num);
};

countDownFrom(5);
// 執行函式，它會依序 logs 5, 4, 3, 2, 1, 0